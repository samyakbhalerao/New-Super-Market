/**
 * Created by Samyak on 03/07/2015.
 */
angular.module('eTOe.customer.authentication').controller('Customer.Authentication.CTRL', ['$scope','$rootScope','authService','postData',
    function($scope,$rootScope,authService,postData) {
     $scope.tab=1;
      //signin user
       $scope.signInUser=function(){
           var userData={};
           var loginUrl="put login api url here";
           userData.userName=$scope.userEmail;
           userData.password=$scope.userPassword;
         console.log('username:',$scope.userEmail);
           console.log('password:',$scope.userPassword);
           console.log('userdata:',userData);
         //  authService.loginReq(loginUrl,user).then(function(requested){console.log("response frm server:",requested);});
       };
       //fblogin
       $scope.fbLogin=function(){
          window.location.href = 'https://www.facebook.com/dialog/oauth?client_id=1384096608564140&redirect_uri=http://localhost:3000/auth/facebook/callback&response_type=token';
      
            $rootScope.$on('$locationChangeSuccess', function (){
                console.log('inside fb login');
                $rootScope.isFb = true;
                var hash = window.location.href,
                startPos = hash.indexOf('access_token=') + 'access_token='.length,
                endPos = Math.min(hash.indexOf('&expires_in=')),
                accessToken = hash.substring(startPos, endPos);
                $rootScope.fbToken = accessToken;
                if(!(accessToken.indexOf('app')) && (accessToken.indexOf('app') > -1)){
                    var data = {
                        'facebook_token': accessToken
                    };
                    console.log('make login call here with token:',data);
                   
                }
            });
       };
       //signup 
       $scope.signUpUser=function(){
        var signupData={};
        signupData.name=$scope.signupName;
        signupData.email=$scope.signupEmail;
        signupData.password=$scope.signupPassword;
        console.log('signup data:',signupData);
        /*postData.toUrl('url',signupData).then(function(requested){
          console.log('data from server:',requested);
        });*/

       };
       /* $('.signup-links li').click(function(){
            var link = $(this).attr('data-id');
            $('.signup-links li').removeClass('active');
            $('.content-wrapper').removeClass('active');
            $(this).addClass('active');
            $("."+link).addClass('active');
        });*/
        $('.float-wrapper input').bind("checkval",function(){
            var label = $(this).siblings("label");
            if(this.value !== ""){
                label.addClass('active');
            }else {
                label.removeClass('active');
            }
        }).on("keyup",function(){
            $(this).trigger("checkval");
        }).on("blur",function(){
            $(this).trigger("checkval");
        }).trigger("checkval");
        $('.form-btn').click(function(){
            $('.float-wrapper input').addClass('invalid');
            //Just add class of invalid if the input type isn't valid
        });
    }
]);