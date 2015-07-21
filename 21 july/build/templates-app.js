angular.module('templates-app', ['customer/authentication/views/authentication.view.tpl.html', 'customer/core/views/customer.home.tpl.html', 'customer/core/views/customer.restaurantdetails.tpl.html', 'customer/core/views/customer.tpl.html', 'customer/dashboard/views/activity.view.tpl.html', 'customer/dashboard/views/coupons.view.tpl.html', 'customer/dashboard/views/dashboard.view.tpl.html', 'customer/dashboard/views/history.view.tpl.html', 'customer/dashboard/views/reviews.view.tpl.html', 'customer/order/views/favourites.view.tpl.html', 'customer/order/views/menu.view.tpl.html', 'customer/order/views/modals.view.tpl.html', 'customer/order/views/order.view.tpl.html', 'customer/order/views/specials.view.tpl.html', 'customer/restaurants/views/cusines.view.tpl.html', 'customer/restaurants/views/meals.view.tpl.html', 'customer/restaurants/views/restaurant-list.view.tpl.html', 'customer/restaurants/views/restaurants.view.tpl.html', 'customer/restaurants/views/specials.view.tpl.html']);

angular.module("customer/authentication/views/authentication.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("customer/authentication/views/authentication.view.tpl.html",
    "<div class=\"signup-page\">\n" +
    "    <a href=\"#/home\" class=\"home-link\"><img src=\"assets/images/customer/core/logo.png\" alt=\"\"></a>\n" +
    "    <div class=\"content-wrap\">\n" +
    "        <ul class=\"signup-links clearfix\" ng-init=\"tab=1\">\n" +
    "            <li  data-id=\"login-content\" ng-class=\"{'active':tab==1}\" ng-click=\"tab=1\"><a href=\"\" >Login</a></li>\n" +
    "            <li  data-id=\"signup-content\" ng-class=\"{'active':tab==2}\" ng-click=\"tab=2\"><a href=\"\" >New to Etoe?</a></li>\n" +
    "        </ul>\n" +
    "        <div class=\"form-content clearfix\" >\n" +
    "            <div class=\"content-wrapper login-content \" ng-class=\"{'active':tab==1}\">\n" +
    "                <div class=\"float-wrapper\">\n" +
    "                    <input type=\"email\" class=\"\" placeholder=\"Email\" ng-model=\"userEmail\"/>\n" +
    "                    <div class=\"error-block\">Please enter a valid email address.</div>\n" +
    "                    <label class=\"\">Email</label>\n" +
    "                </div>\n" +
    "                <div class=\"float-wrapper\">\n" +
    "                    <input type=\"password\" class=\"\" placeholder=\"Password\" ng-model=\"userPassword\"/>\n" +
    "                    <div class=\"error-block\">Please enter your password.</div>\n" +
    "                    <label class=\"\">Password</label>\n" +
    "                </div>\n" +
    "                <button class=\"form-btn login-btn\" ng-click=\"signInUser()\">SIGN IN</button>\n" +
    "                <div class=\"form-link\">\n" +
    "                    <a href=\"\">Forgot Password?</a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"content-wrapper signup-content\" ng-class=\"{'active':tab==2}\">\n" +
    "                <div class=\"float-wrapper\">\n" +
    "                    <input type=\"text\" class=\"\" placeholder=\"Name\" ng-model=\"signupName\"/>\n" +
    "                    <div class=\"error-block\">Please enter your name.</div>\n" +
    "                    <label class=\"\">Name</label>\n" +
    "                </div>\n" +
    "                <div class=\"float-wrapper\">\n" +
    "                    <input type=\"email\" class=\"\" placeholder=\"Email\" ng-model=\"signupEmail\"/>\n" +
    "                    <div class=\"error-block\">Please enter a valid email address.</div>\n" +
    "                    <label class=\"\">Email</label>\n" +
    "                </div>\n" +
    "                <div class=\"float-wrapper\">\n" +
    "                    <input type=\"password\" class=\"\" placeholder=\"Password\" ng-model=\"signupPassword\"/>\n" +
    "                    <div class=\"error-block\">Please enter your password.</div>\n" +
    "                    <label class=\"\">Password</label>\n" +
    "                </div>\n" +
    "                <button class=\"form-btn signup-btn\" ng-click=\"signUpUser()\">SIGN UP</button>\n" +
    "                <div class=\"form-link\"> I agree to the Terms of usage and Privacy policy</div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <button class=\"social-btn fb-signup\" ng-click=\"fbLogin()\"><i class=\"fa fa-facebook-official\"></i> Connect with facebook</button>\n" +
    "        <button class=\"social-btn twitter-signup\"><i class=\"fa fa-twitter\"></i> Connect with twitter</button>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("customer/core/views/customer.home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("customer/core/views/customer.home.tpl.html",
    "<section>\n" +
    "<div class=\"container\">\n" +
    "     <input type=\"text\" id=\"searchBox\" ng-model=\"inputQuery\"/>\n" +
    "    <span id=\"results\"></span>\n" +
    "    <button ng-click=\"startSearch(inputQuery)\">Search</button>\n" +
    "</div>\n" +
    "</section>");
}]);

angular.module("customer/core/views/customer.restaurantdetails.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("customer/core/views/customer.restaurantdetails.tpl.html",
    "<section ng-controller=\"Customer.Resturantdetails.CTRL\">\n" +
    "    <div class=\"item-logo\"><img src=\"assets/images/core/Restaurant_Logo1.png\" alt=\"\"></div>\n" +
    "    <div class=\"basic-details\">\n" +
    "        <div class=\"list-head clearfix\">\n" +
    "            <h1>Galangal Supreme Restaurant</h1>\n" +
    "            <h2 class=\"list-tag\">Thai and Japanese</h2>\n" +
    "        </div>\n" +
    "        <div class=\"list-address\">140 Jerrico Turnpike Syosset,NY,11791</div>\n" +
    "        <div class=\"specific-details\">\n" +
    "            <div class=\"specific-item\">\n" +
    "                <label for=\"\">Minimum delivery</label>\n" +
    "                <span class=\"fa fa-money\"></span>\n" +
    "                <div class=\"specific-value\">\n" +
    "                    $20.00\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"specific-item\">\n" +
    "                <label for=\"\">Delivery time estimated</label>\n" +
    "                <span class=\"fa fa-clock-o\"></span>\n" +
    "                <div class=\"specific-value\">\n" +
    "                    20 <span>min</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"specific-item\">\n" +
    "                <label for=\"\">Distance</label>\n" +
    "                <span class=\"fa fa-expand\"></span>\n" +
    "                <div class=\"specific-value\">\n" +
    "                    3.2 <span>miles</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"specific-item\">\n" +
    "                <label for=\"\">Average pricing[<span>?</span>]</label>\n" +
    "                <span class=\"fa fa-dollar\"></span>\n" +
    "                <div class=\"specific-value\">\n" +
    "                    <i class=\"fa fa-dollar active\"></i>\n" +
    "                    <i class=\"fa fa-dollar active\"></i>\n" +
    "                    <i class=\"fa fa-dollar active\"></i>\n" +
    "                    <i class=\"fa fa-dollar\"></i>\n" +
    "                    <i class=\"fa fa-dollar\"></i>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"specific-item review-item\">\n" +
    "                <div class=\"review-heart\">4.5</div>\n" +
    "                <span class=\"fa fa-heart\">4.5</span>\n" +
    "                <div class=\"review-label\">13 reviews</div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"coupon-details clearfix\">\n" +
    "            <div class=\"coupon-wrap\">\n" +
    "                <div class=\"coupon-green clearfix\">\n" +
    "                    <div class=\"discount\"><span class=\"num\">5</span><span class=\"per\">%</span> Discount</div>\n" +
    "                    <div class=\"dine green-text\">\n" +
    "                        <i class=\"fa fa-cutlery\"></i>\n" +
    "                        <span>DINE IN</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"online green-text\">\n" +
    "                        <i class=\"fa fa-wifi\"></i>\n" +
    "                        <span>ONLINE ORDER</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"coupon-points\">40 points</div>\n" +
    "            </div>\n" +
    "            <div class=\"coupon-num\"><span>more Coupons </span><i class=\"fa fa-angle-right\"></i></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>");
}]);

angular.module("customer/core/views/customer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("customer/core/views/customer.tpl.html",
    "<nav class=\"navbar navbar-default\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "        <a class=\"navbar-brand\" href=\"#/home\"><img src=\"assets/images/customer/core/logo.png\" height=\"\"/></a>\n" +
    "    </div>\n" +
    "    <div class=\"clearfix\">\n" +
    "        <div class=\"menu-right clearfix\">\n" +
    "            <div class=\"nav-toggle\">\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <ul class=\"nav navbar-nav navbar-right\">\n" +
    "            <li>\n" +
    "                <a href=\"#\">DISCOUNT COUPONS</a>\n" +
    "            </li>\n" +
    "            <!--<li>\n" +
    "                <a href=\"#\">SIGN IN</a>\n" +
    "            </li>-->\n" +
    "            <li class=\"dropdown user-header\" dropdown is-open=\"status.isopen\" ng-click=\"toggleDropdown($event)\">\n" +
    "                <div class=\"dropdown-trigger\">\n" +
    "                    <span class=\"profile-img-header\"><img src=\"assets/images/customer/core/profile.jpg\" alt=\"\"/></span>\n" +
    "                    <span class=\"user-name-header\">Aamir Khan</span>\n" +
    "                    <i class=\"fa fa-caret-down\"></i>\n" +
    "                </div>\n" +
    "                <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "                    <li><a href=\"#\" target=\"_blank\">link1</a>\n" +
    "                    </li>\n" +
    "                    <li><a href=\"#\">Logout</a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</nav>\n" +
    "\n" +
    "<div ui-view=\"body\">\n" +
    "    \n" +
    "</div>\n" +
    "");
}]);

angular.module("customer/dashboard/views/activity.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("customer/dashboard/views/activity.view.tpl.html",
    "<div class=\"activity-wrap\">\n" +
    "    <div class=\"activity-wrap-inner\">\n" +
    "        <div class=\"activity-item online-order processing\">\n" +
    "            <div class=\"activity-circle\"><i class=\"fa fa-clock-o\"></i></div>\n" +
    "            <div class=\"head\">Your order is being packed</div>\n" +
    "            <div class=\"time-stamp\">Today, 12:38 PM</div>\n" +
    "            <div class=\"activity-body\">\n" +
    "                <div class=\"rest-details\">\n" +
    "                    <img src=\"assets/images/customer/core/rest-logo2.png\" alt=\"\" />\n" +
    "                    <div class=\"name\">Ibis's Restaurants</div>\n" +
    "                    <div class=\"address\">140 Jerrico Turnpike Syosset,NY,11791</div>\n" +
    "                </div>\n" +
    "                <div class=\"order-status clearfix status1\">\n" +
    "                    <div class=\"order-circle circle1\">\n" +
    "                        <i class=\"fa fa-bell\"></i>\n" +
    "                    </div>\n" +
    "                    <div class=\" order-line line1\"></div>\n" +
    "                    <div class=\"order-circle circle2\">\n" +
    "                        <i class=\"fa fa-bullseye\"></i>\n" +
    "                    </div>\n" +
    "                    <div class=\" order-line line2\"></div>\n" +
    "                    <div class=\"order-circle circle3\">\n" +
    "                        <i class=\"fa fa-bullhorn\"></i>\n" +
    "                    </div>\n" +
    "                    <div class=\" order-line line3\"></div>\n" +
    "                    <div class=\"order-circle circle4\">\n" +
    "                        <i class=\"fa fa-car\"></i>\n" +
    "                    </div>\n" +
    "                    <div class=\" order-line line4\"></div>\n" +
    "                    <div class=\"order-circle circle5\">\n" +
    "                        <i class=\"fa fa-dropbox\"></i>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"activity-item order-type done\">\n" +
    "            <div class=\"activity-circle\"><i class=\"fa fa-clock-o\"></i></div>\n" +
    "            <div class=\"head\">You have redeemed your online order coupon successfully</div>\n" +
    "            <div class=\"time-stamp\">Yesterday, 01:09 PM</div>\n" +
    "            <div class=\"activity-body\">\n" +
    "                <div class=\"clearfix\">\n" +
    "                    <div class=\"coupon-receipt\">\n" +
    "                        <div class=\"details\">\n" +
    "                            <div class=\"discount\">\n" +
    "                                <span class=\"num\">5</span>% DISCOUNT\n" +
    "                            </div>\n" +
    "                            <div class=\"text\">\n" +
    "                                You saved $12.00\n" +
    "                            </div>\n" +
    "                            <span class=\"points\">+40 points</span>\n" +
    "                        </div>\n" +
    "                        <div class=\"order-type\">\n" +
    "                            <i class=\"fa fa-cutlery\"></i>\n" +
    "                        </div>\n" +
    "                        <div class=\"rest-name\">Ibis's Restaurants</div>\n" +
    "                    </div>\n" +
    "                    <div class=\"review-right\">\n" +
    "                        <div class=\"que\">How did you feel about this restaurant?</div>\n" +
    "                        <textarea placeholder=\"Write review for this restaurant\"></textarea>\n" +
    "                        <div class=\"clearfix\">\n" +
    "                            <div class=\"stars-wrap\">\n" +
    "                                <i class=\"fa fa-star-o\"></i>\n" +
    "                                <i class=\"fa fa-star-o\"></i>\n" +
    "                                <i class=\"fa fa-star-o\"></i>\n" +
    "                                <i class=\"fa fa-star-o\"></i>\n" +
    "                                <i class=\"fa fa-star-o\"></i>\n" +
    "                            </div>\n" +
    "                            <button class=\"review-submit\">Submit Review</button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"share-block\">\n" +
    "                    <div class=\"text\">\n" +
    "                        Get <span>40 points</span> for free by sharing this offer with your friends</div>\n" +
    "                    <div class=\"text-small\">Get 40 points</div>\n" +
    "                    <div class=\"social-share fb-share\"><i class=\"fa fa-facebook\"></i></div>\n" +
    "                    <div class=\"social-share twitter-share\"><i class=\"fa fa-twitter\"></i></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"activity-item order-type done\">\n" +
    "            <div class=\"activity-circle\"><i class=\"fa fa-clock-o\"></i></div>\n" +
    "            <div class=\"head\">You have earned 40 points with your online order.</div>\n" +
    "            <div class=\"time-stamp\">12-May-2015, 12:30 PM</div>\n" +
    "            <div class=\"activity-body\">\n" +
    "                <div class=\"clearfix\">\n" +
    "                    <div class=\"coupon-receipt yellow\">\n" +
    "                        <div class=\"details\">\n" +
    "                            <div class=\"money\">\n" +
    "                                $23.<sup>89</sup>\n" +
    "                            </div>\n" +
    "                            <div class=\"text\">\n" +
    "                                Earned 40  points\n" +
    "                            </div>\n" +
    "                            <span class=\"points\">+40 points</span>\n" +
    "                        </div>\n" +
    "                        <div class=\"order-type\">\n" +
    "                            <i class=\"fa fa-cutlery\"></i>\n" +
    "                        </div>\n" +
    "                        <div class=\"rest-name\">Ibis's Restaurants</div>\n" +
    "                    </div>\n" +
    "                    <div class=\"review-right\">\n" +
    "                        <div class=\"que\">How did you feel about this restaurant?</div>\n" +
    "                        <textarea placeholder=\"Write review for this restaurant\"></textarea>\n" +
    "                        <div class=\"clearfix\">\n" +
    "                            <div class=\"stars-wrap\">\n" +
    "                                <i class=\"fa fa-star-o\"></i>\n" +
    "                                <i class=\"fa fa-star-o\"></i>\n" +
    "                                <i class=\"fa fa-star-o\"></i>\n" +
    "                                <i class=\"fa fa-star-o\"></i>\n" +
    "                                <i class=\"fa fa-star-o\"></i>\n" +
    "                            </div>\n" +
    "                            <button class=\"review-submit\">Submit Review</button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"share-block\">\n" +
    "                    <div class=\"text\">\n" +
    "                        Get <span>40 points</span> for free by sharing this offer with your friends</div>\n" +
    "                    <div class=\"text-small\">Get 40 points</div>\n" +
    "                    <div class=\"social-share fb-share\"><i class=\"fa fa-facebook\"></i></div>\n" +
    "                    <div class=\"social-share twitter-share\"><i class=\"fa fa-twitter\"></i></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"activity-item coupon-type done\">\n" +
    "            <div class=\"activity-circle\"><i class=\"fa fa-clock-o\"></i></div>\n" +
    "            <div class=\"head\">Redeem this coupon and save your money.</div>\n" +
    "            <div class=\"time-stamp\">10-May-2015, 09:00 PM</div>\n" +
    "            <div class=\"coupon-type-body clearfix\">\n" +
    "                <div class=\"coupon-item clearfix\">\n" +
    "                    <div class=\"coupon-back\">\n" +
    "                        <img src=\"assets/images/customer/core/coupon-back.jpg\" alt=\"\">\n" +
    "                        <div class=\"gradient\"></div>\n" +
    "                    </div>\n" +
    "                    <div class=\"coupon-main\">\n" +
    "                        <div class=\"discount\">\n" +
    "                            <span class=\"number\">15</span><span>%</span> DISCOUNT\n" +
    "                        </div>\n" +
    "                        <div class=\"time\">Monday Dinner</div>\n" +
    "                        <div class=\"points\"><span>120</span> Points</div>\n" +
    "                        <div class=\"coupon-footer\">\n" +
    "                            <span class=\"name\">Barbeque Junction</span>\n" +
    "                            <span class=\"options\"><i class=\"fa fa-cutlery\"></i></span>\n" +
    "                            <span class=\"options\"><i class=\"fa fa-wifi\"></i></span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"coupon-secondary\">\n" +
    "                        <div class=\"content\">Get $20 off on your delicious  Sushi lunch</div>\n" +
    "                        <div class=\"rest-name\">at <span class=\"name\">Barbeque Junction</span> | <span class=\"distance\">700m away</span></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"coupon-type-right\">\n" +
    "                    <button>ORDER ONLINE NOW!</button>\n" +
    "                    <span class=\"or-text\">Or</span>\n" +
    "                    <button>REDEEM FOR DINE IN</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"activity-item address-type done\">\n" +
    "            <div class=\"activity-circle\"><i class=\"fa fa-clock-o\"></i></div>\n" +
    "            <div class=\"head\">Redeem this coupon and save your money.</div>\n" +
    "            <div class=\"time-stamp\">11-May-2015, 11:23 AM</div>\n" +
    "            <div class=\"address-type-body clearfix\">\n" +
    "                <div class=\"address-block\">\n" +
    "                    <button class=\"edit-btn\">EDIT</button>\n" +
    "                    <div class=\"head\">\n" +
    "                        <i class=\"fa fa-building-o\"></i> <span>Office</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"address-text\">93/A, Appek Building,4th Cross D, Industrial Layout, Kormangala 5th Block, Bangalore - 560095, India</div>\n" +
    "                </div>\n" +
    "                <div class=\"address-type-right\">\n" +
    "                    <div id=\"mapCanvas\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"activity-item profile-type done\">\n" +
    "            <div class=\"activity-circle\"><i class=\"fa fa-clock-o\"></i></div>\n" +
    "            <div class=\"head\">You have successfully edited your profile.</div>\n" +
    "            <div class=\"time-stamp\">10-May-2015, 09:00 PM</div>\n" +
    "            <div class=\"profile-type-body clearfix\">\n" +
    "                <div class=\"profile-block\">\n" +
    "                    <button class=\"edit-btn\">EDIT</button>\n" +
    "                    <div class=\"profile-option\">Profile pic updated</div>\n" +
    "                    <div class=\"profile-option\">Name changed to <span>Kate Upton</span></div>\n" +
    "                    <div class=\"profile-option\">Mobile number updated to <span>+0012876567537</span></div>\n" +
    "                </div>\n" +
    "                <div class=\"profile-type-right\">\n" +
    "                    <div class=\"dp-outer\">\n" +
    "                        <img src=\"assets/images/customer/core/dp.png\" alt=\"\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"activity-item loading-item\">\n" +
    "            <div class=\"activity-circle\"><i class=\"fa fa-clock-o\"></i></div>\n" +
    "            <div class=\"loading-head\">Load more previous events</div>\n" +
    "            <div class=\"time-stamp\">2months ago</div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("customer/dashboard/views/coupons.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("customer/dashboard/views/coupons.view.tpl.html",
    "<div class=\"coupons-wrap\">\n" +
    "    <div class=\"coupon-tab-item clearfix\">\n" +
    "        <div class=\"coupon-item clearfix\">\n" +
    "            <div class=\"coupon-back\">\n" +
    "                <img src=\"assets/images/customer/core/coupon-back.jpg\" alt=\"\">\n" +
    "                <div class=\"gradient\"></div>\n" +
    "            </div>\n" +
    "            <div class=\"coupon-main\">\n" +
    "                <div class=\"discount\">\n" +
    "                    <span class=\"number\">15</span><span>%</span> DISCOUNT\n" +
    "                </div>\n" +
    "                <div class=\"time\">Monday Dinner</div>\n" +
    "                <div class=\"points\"><span>120</span> Points</div>\n" +
    "                <div class=\"coupon-footer\">\n" +
    "                    <span class=\"name\">Barbeque Junction</span>\n" +
    "                    <span class=\"options\"><i class=\"fa fa-cutlery\"></i></span>\n" +
    "                    <span class=\"options\"><i class=\"fa fa-wifi\"></i></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"coupon-tab-right\">\n" +
    "            <span class=\"coupon-date\">18-MAY-2015</span>\n" +
    "            <div class=\"unused-wrap\">\n" +
    "                <div class=\"coupon-secondary\">\n" +
    "                    <div class=\"content\">Get $20 off on your delicious  Sushi lunch</div>\n" +
    "                    <div class=\"rest-name\">at <span class=\"name\">Barbeque Junction</span> | <span class=\"validity\">Validity : 23 June 2015</span></div>\n" +
    "                </div>\n" +
    "                <div class=\"clearfix\">\n" +
    "                    <button class=\"coupon-tab-btn\">Order online</button>\n" +
    "                    <button class=\"coupon-tab-btn\">Redeem for Dine in</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"used-wrap\">\n" +
    "                <div class=\"que\">How did you feel about this restaurant?</div>\n" +
    "                <textarea placeholder=\"Write review for this restaurant\"></textarea>\n" +
    "                <div class=\"clearfix\">\n" +
    "                    <div class=\"stars-wrap\">\n" +
    "                        <i class=\"fa fa-star-o\"></i>\n" +
    "                        <i class=\"fa fa-star-o\"></i>\n" +
    "                        <i class=\"fa fa-star-o\"></i>\n" +
    "                        <i class=\"fa fa-star-o\"></i>\n" +
    "                        <i class=\"fa fa-star-o\"></i>\n" +
    "                    </div>\n" +
    "                    <button class=\"review-submit\">Submit Review</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"coupon-tab-item clearfix used\">\n" +
    "        <div class=\"coupon-item clearfix\">\n" +
    "            <div class=\"coupon-back\">\n" +
    "                <img src=\"assets/images/customer/core/coupon-back.jpg\" alt=\"\">\n" +
    "                <div class=\"gradient\"></div>\n" +
    "            </div>\n" +
    "            <div class=\"coupon-main\">\n" +
    "                <div class=\"discount\">\n" +
    "                    <span class=\"number\">15</span><span>%</span> DISCOUNT\n" +
    "                </div>\n" +
    "                <div class=\"time\">Monday Dinner</div>\n" +
    "                <div class=\"points\"><span>120</span> Points</div>\n" +
    "                <div class=\"coupon-footer\">\n" +
    "                    <span class=\"name\">Barbeque Junction</span>\n" +
    "                    <span class=\"options\"><i class=\"fa fa-cutlery\"></i></span>\n" +
    "                    <span class=\"options\"><i class=\"fa fa-wifi\"></i></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"total-savings\">Total savings : $23.00</div>\n" +
    "        <div class=\"coupon-tab-right\">\n" +
    "            <span class=\"coupon-date\">18-MAY-2015</span>\n" +
    "            <div class=\"unused-wrap\">\n" +
    "                <div class=\"coupon-secondary\">\n" +
    "                    <div class=\"content\">Get $20 off on your delicious  Sushi lunch</div>\n" +
    "                    <div class=\"rest-name\">at <span class=\"name\">Barbeque Junction</span> | <span class=\"validity\">Validity : 23 June 2015</span></div>\n" +
    "                </div>\n" +
    "                <div class=\"clearfix\">\n" +
    "                    <button class=\"coupon-tab-btn\">Order online</button>\n" +
    "                    <button class=\"coupon-tab-btn\">Redeem for Dine in</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"used-wrap\">\n" +
    "                <div class=\"que\">How did you feel about this restaurant?</div>\n" +
    "                <textarea placeholder=\"Write review for this restaurant\"></textarea>\n" +
    "                <div class=\"clearfix\">\n" +
    "                    <div class=\"stars-wrap\">\n" +
    "                        <i class=\"fa fa-star-o\"></i>\n" +
    "                        <i class=\"fa fa-star-o\"></i>\n" +
    "                        <i class=\"fa fa-star-o\"></i>\n" +
    "                        <i class=\"fa fa-star-o\"></i>\n" +
    "                        <i class=\"fa fa-star-o\"></i>\n" +
    "                    </div>\n" +
    "                    <button class=\"review-submit\">Submit Review</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"coupon-tab-item clearfix\">\n" +
    "        <div class=\"coupon-item clearfix\">\n" +
    "            <div class=\"coupon-back\">\n" +
    "                <img src=\"assets/images/customer/core/coupon-back.jpg\" alt=\"\">\n" +
    "                <div class=\"gradient\"></div>\n" +
    "            </div>\n" +
    "            <div class=\"coupon-main\">\n" +
    "                <div class=\"discount\">\n" +
    "                    <span class=\"number\">15</span><span>%</span> DISCOUNT\n" +
    "                </div>\n" +
    "                <div class=\"time\">Monday Dinner</div>\n" +
    "                <div class=\"points\"><span>120</span> Points</div>\n" +
    "                <div class=\"coupon-footer\">\n" +
    "                    <span class=\"name\">Barbeque Junction</span>\n" +
    "                    <span class=\"options\"><i class=\"fa fa-cutlery\"></i></span>\n" +
    "                    <span class=\"options\"><i class=\"fa fa-wifi\"></i></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"coupon-tab-right\">\n" +
    "            <span class=\"coupon-date\">18-MAY-2015</span>\n" +
    "            <div class=\"unused-wrap\">\n" +
    "                <div class=\"coupon-secondary\">\n" +
    "                    <div class=\"content\">Get $20 off on your delicious  Sushi lunch</div>\n" +
    "                    <div class=\"rest-name\">at <span class=\"name\">Barbeque Junction</span> | <span class=\"validity\">Validity : 23 June 2015</span></div>\n" +
    "                </div>\n" +
    "                <div class=\"clearfix\">\n" +
    "                    <button class=\"coupon-tab-btn\">Order online</button>\n" +
    "                    <button class=\"coupon-tab-btn\">Redeem for Dine in</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"used-wrap\">\n" +
    "                <div class=\"que\">How did you feel about this restaurant?</div>\n" +
    "                <textarea placeholder=\"Write review for this restaurant\"></textarea>\n" +
    "                <div class=\"clearfix\">\n" +
    "                    <div class=\"stars-wrap\">\n" +
    "                        <i class=\"fa fa-star-o\"></i>\n" +
    "                        <i class=\"fa fa-star-o\"></i>\n" +
    "                        <i class=\"fa fa-star-o\"></i>\n" +
    "                        <i class=\"fa fa-star-o\"></i>\n" +
    "                        <i class=\"fa fa-star-o\"></i>\n" +
    "                    </div>\n" +
    "                    <button class=\"review-submit\">Submit Review</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"coupon-tab-item clearfix used\">\n" +
    "        <div class=\"coupon-item clearfix\">\n" +
    "            <div class=\"coupon-back\">\n" +
    "                <img src=\"assets/images/customer/core/coupon-back.jpg\" alt=\"\">\n" +
    "                <div class=\"gradient\"></div>\n" +
    "            </div>\n" +
    "            <div class=\"coupon-main\">\n" +
    "                <div class=\"discount\">\n" +
    "                    <span class=\"number\">15</span><span>%</span> DISCOUNT\n" +
    "                </div>\n" +
    "                <div class=\"time\">Monday Dinner</div>\n" +
    "                <div class=\"points\"><span>120</span> Points</div>\n" +
    "                <div class=\"coupon-footer\">\n" +
    "                    <span class=\"name\">Barbeque Junction</span>\n" +
    "                    <span class=\"options\"><i class=\"fa fa-cutlery\"></i></span>\n" +
    "                    <span class=\"options\"><i class=\"fa fa-wifi\"></i></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"total-savings\">Total savings : $23.00</div>\n" +
    "        <div class=\"coupon-tab-right\">\n" +
    "            <span class=\"coupon-date\">18-MAY-2015</span>\n" +
    "            <div class=\"unused-wrap\">\n" +
    "                <div class=\"coupon-secondary\">\n" +
    "                    <div class=\"content\">Get $20 off on your delicious  Sushi lunch</div>\n" +
    "                    <div class=\"rest-name\">at <span class=\"name\">Barbeque Junction</span> | <span class=\"validity\">Validity : 23 June 2015</span></div>\n" +
    "                </div>\n" +
    "                <div class=\"clearfix\">\n" +
    "                    <button class=\"coupon-tab-btn\">Order online</button>\n" +
    "                    <button class=\"coupon-tab-btn\">Redeem for Dine in</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"used-wrap\">\n" +
    "                <div class=\"que\">How did you feel about this restaurant?</div>\n" +
    "                <textarea placeholder=\"Write review for this restaurant\"></textarea>\n" +
    "                <div class=\"clearfix\">\n" +
    "                    <div class=\"stars-wrap\">\n" +
    "                        <i class=\"fa fa-star-o\"></i>\n" +
    "                        <i class=\"fa fa-star-o\"></i>\n" +
    "                        <i class=\"fa fa-star-o\"></i>\n" +
    "                        <i class=\"fa fa-star-o\"></i>\n" +
    "                        <i class=\"fa fa-star-o\"></i>\n" +
    "                    </div>\n" +
    "                    <button class=\"review-submit\">Submit Review</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("customer/dashboard/views/dashboard.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("customer/dashboard/views/dashboard.view.tpl.html",
    "<div class=\"dashboard-page\" ng-controller=\"Customer.Dashboard.CTRL\">\n" +
    "    <div class=\"dashboard-wrap clearfix\">\n" +
    "        <ul class=\"dashboard-tabs clearfix\">\n" +
    "            <li><a class=\"active\" href=\"#/activity\" ui-sref=\"customer.dashboard.activity\">Activity</a></li>\n" +
    "            <li><a href=\"#/history\" ui-sref=\"customer.dashboard.history\">Order History</a></li>\n" +
    "            <li><a href=\"#/coupons\" ui-sref=\"customer.dashboard.coupons\">Coupons</a></li>\n" +
    "            <li><a href=\"\">Profile</a></li>\n" +
    "            <li><a href=\"#/reviews\" ui-sref=\"customer.dashboard.reviews\">Reviews</a></li>\n" +
    "        </ul>\n" +
    "        <select class=\"dashboard-tabs-small\">\n" +
    "            <option value=\"\">Activity</option>\n" +
    "            <option value=\"\">Order History</option>\n" +
    "            <option value=\"\">Coupons</option>\n" +
    "            <option value=\"\">Profile</option>\n" +
    "            <option value=\"\">Reviews</option>\n" +
    "        </select>\n" +
    "        <div class=\"dashboard-content\">\n" +
    "            <div ui-view=\"body\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<script src=\"http://maps.googleapis.com/maps/api/js\"></script>");
}]);

angular.module("customer/dashboard/views/history.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("customer/dashboard/views/history.view.tpl.html",
    "<div class=\"history-wrap\" ng-controller=\"Customer.Dashboard.History.CTRL\">\n" +
    "    <div class=\"clearfix date-row\">\n" +
    "        <div class=\"col-xs-6\">\n" +
    "            <label>From</label>\n" +
    "            <div class=\"input-wrap\">\n" +
    "                <input class=\"form-control\" type=\"text\" readonly=\"readonly\" datepicker-popup=\"dd-MMMM-yyyy\" ng-model=\"dt\" is-open=\"opened\" datepicker-options=\"dateOptions\" ng-click=\"open($event)\" />\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-6\">\n" +
    "            <label>To</label>\n" +
    "            <div class=\"input-wrap\">\n" +
    "                <input class=\"form-control\" type=\"text\" readonly=\"readonly\" datepicker-popup=\"dd-MMMM-yyyy\" ng-model=\"dt1\" is-open=\"opened\" datepicker-options=\"dateOptions\" ng-click=\"open($event)\"  />\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"date-row-small\">Showing from <input type=\"date\" /> to <input type=\"date\" /></div>\n" +
    "    <!-- history repeatable element starts -->\n" +
    "    <div class=\"hitem-wrap earned\"><!-- add class based on redeemed or earned -->\n" +
    "        <div class=\"hitem-link\">\n" +
    "            <div class=\"hitem-intro\">\n" +
    "                <span class=\"date\">12 May 2015</span>\n" +
    "                <span class=\"order-num\">Order no <span class=\"t-color\">ON02732030515001R</span></span>\n" +
    "            </div>\n" +
    "            <div class=\"clearfix\">\n" +
    "                <div class=\"hitem-basic\">\n" +
    "                    <img src=\"assets/images/customer/core/Restaurant_Logo1.png\" alt=\"\">\n" +
    "                    <div class=\"rest-name\">Galangal Thai restaurant</div>\n" +
    "                    <div class=\"rest-tag\">Thai and Japanese</div>\n" +
    "                    <div class=\"order-type\">\n" +
    "                        <!-- add i tags according to the order type -->\n" +
    "                        <i class=\"fa fa-cutlery\"></i>\n" +
    "                        <span class=\"type-text\">Normal</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"hitem-num\">\n" +
    "                    <div class=\"order-amount t-color\">$23. <sup>89</sup></div>\n" +
    "                    <div class=\"order-points t-color\">Earned 40 points</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"hitem-extra\">\n" +
    "            <div class=\"hitem-extra-wrap clearfix\">\n" +
    "                <div class=\"history-order\">\n" +
    "                    <label for=\"\">Order details</label>\n" +
    "                    <ul>\n" +
    "                        <li><span class=\"num\">1</span> Paneer Kofta</li>\n" +
    "                        <li><span class=\"num\">4</span> Gulab Jamun</li>\n" +
    "                        <li><span class=\"num\">2</span> Butter naan</li>\n" +
    "                        <li><span class=\"num\">3</span> Papad</li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "                <div class=\"history-address\">\n" +
    "                    <label for=\"\">Delivered to Office</label>\n" +
    "                    <p>93/A, Appek Building, 4th cross, Industrial Layout, Koramangala, Bangalore-560095</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- repeatable element ends -->\n" +
    "    <div class=\"hitem-wrap redeemed\">\n" +
    "        <div class=\"hitem-link\">\n" +
    "            <div class=\"hitem-intro\">\n" +
    "                <span class=\"date\">12 May 2015</span>\n" +
    "                <span class=\"order-num\">Order no <span class=\"t-color\">ON02732030515001R</span></span>\n" +
    "            </div>\n" +
    "            <div class=\"clearfix\">\n" +
    "                <div class=\"hitem-basic\">\n" +
    "                    <img src=\"assets/images/customer/core/rest-logo2.png\" alt=\"\">\n" +
    "                    <div class=\"rest-name\">Ibis Restaurants</div>\n" +
    "                    <div class=\"rest-tag\">British Breakfast special</div>\n" +
    "                    <div class=\"order-type\">\n" +
    "                        <!-- add i tags according to the order type -->\n" +
    "                        <i class=\"fa fa-wifi\"></i>\n" +
    "                        <span class=\"type-text\">Redeemed</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"hitem-num\">\n" +
    "                    <div class=\"order-amount t-color\">$23. <sup>89</sup></div>\n" +
    "                    <div class=\"order-points t-color\">Saved $12.23</div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"hitem-extra\">\n" +
    "            <div class=\"hitem-extra-wrap clearfix\">\n" +
    "                <div class=\"history-order\">\n" +
    "                    <label for=\"\">Order details</label>\n" +
    "                    <ul>\n" +
    "                        <li><span class=\"num\">1</span> Paneer Kofta</li>\n" +
    "                        <li><span class=\"num\">4</span> Gulab Jamun</li>\n" +
    "                        <li><span class=\"num\">2</span> Butter naan</li>\n" +
    "                        <li><span class=\"num\">3</span> Papad</li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "                <div class=\"history-address\">\n" +
    "                    <label for=\"\">Delivered to Office</label>\n" +
    "                    <p>93/A, Appek Building, 4th cross, Industrial Layout, Koramangala, Bangalore-560095</p>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("customer/dashboard/views/reviews.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("customer/dashboard/views/reviews.view.tpl.html",
    "<div class=\"review-wrap\">\n" +
    "    <div class=\"review-num\">12 reviews written</div>\n" +
    "    <div class=\"reviews-container\">\n" +
    "        <!--  review item starts here. -->\n" +
    "        <div class=\"review-item\">\n" +
    "            <img src=\"assets/images/customer/core/Restaurant_Logo1.png\" alt=\"\">\n" +
    "            <div class=\"rest-name\">Ibis's Restaurants</div>\n" +
    "            <div class=\"stars-wrap clearfix\">\n" +
    "                <i class=\"fa fa-star\"></i>\n" +
    "                <i class=\"fa fa-star\"></i>\n" +
    "                <i class=\"fa fa-star\"></i>\n" +
    "                <i class=\"fa fa-star-o\"></i>\n" +
    "                <i class=\"fa fa-star-o\"></i>\n" +
    "            </div>\n" +
    "            <p>Had a masala dosa and tasted kesari bath. And it was nothing less than awesome! And I believe, nothing more need be said.</p>\n" +
    "        </div>\n" +
    "        <!-- repeat item ends here -->\n" +
    "        <div class=\"review-item\">\n" +
    "            <img src=\"assets/images/customer/core/rest-logo2.png\" alt=\"\">\n" +
    "            <div class=\"rest-name\">Peter’s Fastfood and snacks</div>\n" +
    "            <div class=\"stars-wrap clearfix\">\n" +
    "                <i class=\"fa fa-star\"></i>\n" +
    "                <i class=\"fa fa-star\"></i>\n" +
    "                <i class=\"fa fa-star-o\"></i>\n" +
    "                <i class=\"fa fa-star-o\"></i>\n" +
    "                <i class=\"fa fa-star-o\"></i>\n" +
    "            </div>\n" +
    "            <p>Had a masala dosa and tasted kesari bath. And it was nothing less than awesome! And I believe, nothing more need be said.</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("customer/order/views/favourites.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("customer/order/views/favourites.view.tpl.html",
    "<div class=\"fav-block\" ng-controller=\"Customer.Order.Favourites.CTRL\">\n" +
    "    <div class=\"fav-head\">Favourites</div>\n" +
    "    <carousel interval=\"myInterval\" class=\"favourites-carousel\">\n" +
    "        <slide ng-repeat=\"slide in slides\" active=\"slide.active\">\n" +
    "            <img ng-src=\"{{slide.image}}\">\n" +
    "            <div class=\"carousel-caption\">\n" +
    "                <h4>{{slide.head}}</h4>\n" +
    "            </div>\n" +
    "        </slide>\n" +
    "    </carousel>\n" +
    "</div>");
}]);

angular.module("customer/order/views/menu.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("customer/order/views/menu.view.tpl.html",
    "<!--<section ng-controller=\"Customer.Order.Menu.CTRL\">\n" +
    "    <div class=\"menu-ul-wrapper\">\n" +
    "        <ul class=\"clearfix\">\n" +
    "\n" +
    "            <li class=\"menu-tab-item active\" data-id=\"menu-tab-content1\">\n" +
    "                <a href=\"\">\n" +
    "                    <i class=\"menu-type5\"></i>\n" +
    "\n" +
    "                    <span>Appetizers</span>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "            <li class=\"menu-tab-item\" data-id=\"menu-tab-content2\">\n" +
    "                <a href=\"\">\n" +
    "                    <i class=\"menu-type4\"></i>\n" +
    "                    <span>Entrees</span>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "\n" +
    "            <li class=\"menu-tab-item\" data-id=\"menu-tab-content3\">\n" +
    "                <a href=\"\">\n" +
    "                    <i class=\"menu-type1\"></i>\n" +
    "                    <span>Soup &amp; Salads</span>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "            <li class=\"menu-tab-item\" data-id=\"menu-tab-content4\">\n" +
    "                <a href=\"\">\n" +
    "                    <i class=\"menu-type2\"></i>\n" +
    "                    <span>Rice/Noodles</span>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "            <li class=\"menu-tab-item\" data-id=\"menu-tab-content5\">\n" +
    "                <a href=\"\">\n" +
    "                    <i class=\"menu-type3\"></i>\n" +
    "                    <span>Main course</span>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "            <li class=\"menu-tab-item\" data-id=\"menu-tab-content6\">\n" +
    "                <a href=\"\">\n" +
    "                    <i class=\"menu-type6\"></i>\n" +
    "                    <span>Desserts/Drinks</span>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"menu-content-wrapper\">\n" +
    "        <div class=\"clearfix menu-tab-content active\" id=\"menu-tab-content1\">\n" +
    "            <div class=\"col-sm-6\">\n" +
    "                <div class=\"menu-type-wrap\">\n" +
    "                    <h3>CHICKEN</h3>\n" +
    "                    <div class=\"menu-item added\">\n" +
    "                        &lt;!&ndash; add a class active if the  item is added to order ...Eg: see above&ndash;&gt;\n" +
    "                        <h4>Chicken tikka(1)</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 12.20</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Rose Mary Kabab</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 18.00</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"menu-type-wrap\">\n" +
    "                    <h3>LAMB</h3>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Seak Kabab <i class=\"fa fa-plus-square add-to-order\"></i></h4>&lt;!&ndash; add i tag with the above classes if the item has customizable menu &ndash;&gt;\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 22.30</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Barra Kabab</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 28.20</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-6\">\n" +
    "                <div class=\"menu-type-wrap\">\n" +
    "                    <h3>VEG</h3>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Samosa</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 2.30</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Kachori chaat</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 11.20</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Chaat Papri</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 15.20</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Onion Bajias</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 10.20</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Panir Pakora</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 10.20</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Assorted Pakora</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 10.20</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"clearfix menu-tab-content\" id=\"menu-tab-content2\">\n" +
    "            <div class=\"col-sm-6\">\n" +
    "                <div class=\"menu-type-wrap\">\n" +
    "                    <h3>CHICKEN</h3>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Chicken tikka</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 12.20</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Rose Mary Kabab</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 18.00</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-6\">\n" +
    "                <div class=\"menu-type-wrap\">\n" +
    "                    <h3>VEG</h3>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Samosa</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 2.30</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Kachori chaat</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 11.20</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Chaat Papri</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 15.20</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"clearfix menu-tab-content\" id=\"menu-tab-content3\">\n" +
    "            <div class=\"col-sm-6\">\n" +
    "                <div class=\"menu-type-wrap\">\n" +
    "                    <h3>CHICKEN</h3>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Chicken tikka</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 12.20</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Rose Mary Kabab</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 18.00</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-6\">\n" +
    "                <div class=\"menu-type-wrap\">\n" +
    "                    <h3>VEG</h3>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Samosa</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 2.30</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"clearfix menu-tab-content\" id=\"menu-tab-content4\">\n" +
    "            <div class=\"col-sm-6\">\n" +
    "                <div class=\"menu-type-wrap\">\n" +
    "                    <h3>CHICKEN</h3>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Chicken tikka</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 12.20</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-6\">\n" +
    "                <div class=\"menu-type-wrap\">\n" +
    "                    <h3>VEG</h3>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Samosa</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 2.30</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"clearfix menu-tab-content\" id=\"menu-tab-content5\">\n" +
    "            <div class=\"col-sm-6\">\n" +
    "                <div class=\"menu-type-wrap\">\n" +
    "                    <h3>CHICKEN</h3>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Rose Mary Kabab</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 18.00</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-6\">\n" +
    "                <div class=\"menu-type-wrap\">\n" +
    "                    <h3>VEG</h3>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Samosa</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 2.30</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"clearfix menu-tab-content\" id=\"menu-tab-content6\">\n" +
    "            <div class=\"col-sm-6\">\n" +
    "                <div class=\"menu-type-wrap\">\n" +
    "                    <h3>VEG</h3>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Samosa</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 2.30</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>-->\n" +
    "\n" +
    "<section id=\"menu-wrap\" class=\"active\">\n" +
    "    <div class=\"menu-ul-wrapper\">\n" +
    "     <!--Main categories-->\n" +
    "        <ul class=\"clearfix\">\n" +
    "\n" +
    "            <li class=\"menu-tab-item\" id=\"menu_tab{{$index+1}}\" data-id=\"menu-tab-content{{$index+1}}\" ng-click=\"showMenu($index)\" ng-repeat=\"(key,value) in  model.menu_categories\">\n" +
    "                <a href=\"\" >\n" +
    "                    <i class=\"menu-type5\"></i>\n" +
    "\n" +
    "                    <span>{{key}}</span>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "       </ul>\n" +
    "    </div>\n" +
    "    <div class=\"menu-content-wrapper\">\n" +
    "        <!--contents of categories-->\n" +
    "        <div class=\"clearfix menu-tab-content \" id=\"menu-tab-content{{$index+1}}\" ng-repeat=\"(key,value) in model.menu_categories\">\n" +
    "            <div ng-repeat=\"(key,value) in value.cat_sub_section\">\n" +
    "\n" +
    "            <div class=\"col-sm-6\">\n" +
    "                <div class=\"menu-type-wrap\" >\n" +
    "                    <h3>{{key}}</h3>\n" +
    "                    <div class=\"menu-item added\" ng-repeat=\"menu_item in value.sub_cat_items\" ng-click=\"addToCart(menu_item.item_name,menu_item.item_price)\">\n" +
    "                        <h4>{{menu_item.item_name}}</h4>\n" +
    "                        <p>{{menu_item.item_desc}}</p>\n" +
    "                        <span class=\"price\">{{menu_item.item_price}}</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "                <!--<div class=\"col-sm-6\">\n" +
    "\n" +
    "                </div>-->\n" +
    "            </div>\n" +
    "<!--\n" +
    "            <div class=\"col-sm-6\">\n" +
    "                <div class=\"menu-type-wrap\">\n" +
    "                    <h3>VEG</h3>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Samosa</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 2.30</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Kachori chaat</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 11.20</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Chaat Papri</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 15.20</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Onion Bajias</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 10.20</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Panir Pakora</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 10.20</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Assorted Pakora</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 10.20</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "-->\n" +
    "        </div>\n" +
    "       <!-- <div class=\"clearfix menu-tab-content\" id=\"menu-tab-content2\">\n" +
    "            <div class=\"col-sm-6\">\n" +
    "                <div class=\"menu-type-wrap\">\n" +
    "                    <h3>CHICKEN</h3>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Chicken tikka</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 12.20</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Rose Mary Kabab</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 18.00</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-6\">\n" +
    "                <div class=\"menu-type-wrap\">\n" +
    "                    <h3>VEG</h3>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Samosa</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 2.30</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Kachori chaat</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 11.20</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Chaat Papri</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 15.20</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"clearfix menu-tab-content\" id=\"menu-tab-content3\">\n" +
    "            <div class=\"col-sm-6\">\n" +
    "                <div class=\"menu-type-wrap\">\n" +
    "                    <h3>CHICKEN</h3>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Chicken tikka</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 12.20</span>\n" +
    "                    </div>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Rose Mary Kabab</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 18.00</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-6\">\n" +
    "                <div class=\"menu-type-wrap\">\n" +
    "                    <h3>VEG</h3>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Samosa</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 2.30</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"clearfix menu-tab-content\" id=\"menu-tab-content4\">\n" +
    "            <div class=\"col-sm-6\">\n" +
    "                <div class=\"menu-type-wrap\">\n" +
    "                    <h3>CHICKEN</h3>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Chicken tikka</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 12.20</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-6\">\n" +
    "                <div class=\"menu-type-wrap\">\n" +
    "                    <h3>VEG</h3>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Samosa</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 2.30</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"clearfix menu-tab-content\" id=\"menu-tab-content5\">\n" +
    "            <div class=\"col-sm-6\">\n" +
    "                <div class=\"menu-type-wrap\">\n" +
    "                    <h3>CHICKEN</h3>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Rose Mary Kabab</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 18.00</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-6\">\n" +
    "                <div class=\"menu-type-wrap\">\n" +
    "                    <h3>VEG</h3>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Samosa</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 2.30</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"clearfix menu-tab-content\" id=\"menu-tab-content6\">\n" +
    "            <div class=\"col-sm-6\">\n" +
    "                <div class=\"menu-type-wrap\">\n" +
    "                    <h3>VEG</h3>\n" +
    "                    <div class=\"menu-item\">\n" +
    "                        <h4>Samosa</h4>\n" +
    "                        <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                        <span class=\"price\">$ 2.30</span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>-->\n" +
    "    </div>\n" +
    "</section>");
}]);

angular.module("customer/order/views/modals.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("customer/order/views/modals.view.tpl.html",
    "<div ng-controller=\"Customer.Order.Modals.CTRL\">\n" +
    "    <div class=\"modal-window menu-customize-modal\"><!-- adding class modal-show will open modal box -->\n" +
    "        <div class=\"modal-wrap\">\n" +
    "            <div class=\"modal-close\">&times;</div>\n" +
    "            <div class=\"md-header clearfix\">\n" +
    "                <div class=\"menu-item\">\n" +
    "                    <h4>Seek kabab</h4>\n" +
    "                    <p>Tender pieces marinated in yoghurt and spices</p>\n" +
    "                </div>\n" +
    "                <div class=\"modal-price\">\n" +
    "                    <div class=\"price-val\">$12.00</div>\n" +
    "                    <span>Total</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"md-body\">\n" +
    "                <div class=\"md-form-row\">\n" +
    "                    <div class=\"md-form-head\">Preferred Make type</div>\n" +
    "                    <div class=\"md-radio-row clearfix\">\n" +
    "                        <label >\n" +
    "                            <input type=\"radio\" name=\"md-radio1\" checked />\n" +
    "                            <span class=\"md-radio-style\"></span>\n" +
    "                            Deep roasted\n" +
    "                        </label>\n" +
    "                        <label >\n" +
    "                            <input type=\"radio\" name=\"md-radio1\" />\n" +
    "                            <span class=\"md-radio-style\"></span>\n" +
    "                            Double grilled\n" +
    "                        </label>\n" +
    "                        <label >\n" +
    "                            <input type=\"radio\" name=\"md-radio1\" />\n" +
    "                            <span class=\"md-radio-style\"></span>\n" +
    "                            Thai\n" +
    "                        </label>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"md-form-row\">\n" +
    "                    <div class=\"md-form-head\">What leaves do you want as salad</div>\n" +
    "                    <div class=\"md-radio-row clearfix\">\n" +
    "                        <label >\n" +
    "                            <input type=\"radio\" name=\"md-radio2\" checked />\n" +
    "                            <span class=\"md-radio-style\"></span>\n" +
    "                            Spinach\n" +
    "                        </label>\n" +
    "                        <label >\n" +
    "                            <input type=\"radio\" name=\"md-radio2\" />\n" +
    "                            <span class=\"md-radio-style\"></span>\n" +
    "                            Red olive leaves\n" +
    "                        </label>\n" +
    "                        <label >\n" +
    "                            <input type=\"radio\" name=\"md-radio2\" />\n" +
    "                            <span class=\"md-radio-style\"></span>\n" +
    "                            Green grass\n" +
    "                        </label>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"md-form-row\">\n" +
    "                    <div class=\"md-form-head\">Preferred Make type</div>\n" +
    "                    <div class=\"md-radio-row clearfix\">\n" +
    "                        <label >\n" +
    "                            <input type=\"radio\" name=\"md-radio3\" checked />\n" +
    "                            <span class=\"md-radio-style\"></span>\n" +
    "                            Option1\n" +
    "                        </label>\n" +
    "                        <label >\n" +
    "                            <input type=\"radio\" name=\"md-radio3\" />\n" +
    "                            <span class=\"md-radio-style\"></span>\n" +
    "                            Option2\n" +
    "                        </label>\n" +
    "                        <label >\n" +
    "                            <input type=\"radio\" name=\"md-radio3\" />\n" +
    "                            <span class=\"md-radio-style\"></span>\n" +
    "                            Option3\n" +
    "                        </label>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"btn-wrap\">\n" +
    "                    <button class=\"md-btn add-to-order-btn\">ADD THIS TO MY ORDER</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"modal-overlay\"></div><!-- adding class open on this will open the overlay -->\n" +
    "</div>");
}]);

angular.module("customer/order/views/order.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("customer/order/views/order.view.tpl.html",
    "<div ng-if=\"!loading\">\n" +
    "<div class=\"menu-page\">\n" +
    "    <div class=\"main\">\n" +
    "        <div class=\"max-content\">\n" +
    "            <div class=\"main-content clearfix\">\n" +
    "                <!-- repetetive elements starts-->\n" +
    "                <div class=\"list-item clearfix\">\n" +
    "                    <div class=\"content-block\">\n" +
    "                        <div class=\"item-logo\"><img src=\"assets/images/customer/core/Restaurant_Logo1.png\" alt=\"\"></div>\n" +
    "                        <div class=\"basic-details\">\n" +
    "                            <div class=\"list-head clearfix\">\n" +
    "                                <h1>{{model.menu.restaurant_name}}</h1>\n" +
    "                                <h2 class=\"list-tag\">{{model.menu.restaurant_cuisines[0]}}</h2>\n" +
    "                            </div>\n" +
    "                            <div class=\"list-address\">{{model.menu.address1}},{{model.menu.cross_street}},{{model.menu.state}},{{model.menu.zip}}</div>\n" +
    "                            <div class=\"specific-details\">\n" +
    "                                <div class=\"specific-item\">\n" +
    "                                    <label for=\"\">Minimum delivery</label>\n" +
    "                                    <span class=\"fa fa-money\"></span>\n" +
    "                                    <div class=\"specific-value\">\n" +
    "                                        {{model.menu.minimum_delivery}}\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"specific-item\">\n" +
    "                                    <label for=\"\">Delivery time estimated</label>\n" +
    "                                    <span class=\"fa fa-clock-o\"></span>\n" +
    "                                    <div class=\"specific-value\">\n" +
    "                                         <span>{{model.menu.del_time_est}}</span>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"specific-item\">\n" +
    "                                    <label for=\"\">Distance</label>\n" +
    "                                    <span class=\"fa fa-expand\"></span>\n" +
    "                                    <div class=\"specific-value\">\n" +
    "                                        3.2 <span>miles</span>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"specific-item\">\n" +
    "                                    <label for=\"\">Average pricing[<span>?</span>]</label>\n" +
    "                                    <span class=\"fa fa-dollar\"></span>\n" +
    "                                    <div class=\"specific-value\">\n" +
    "                                        <i class=\"fa fa-dollar active\"></i>\n" +
    "                                        <i class=\"fa fa-dollar active\"></i>\n" +
    "                                        <i class=\"fa fa-dollar active\"></i>\n" +
    "                                        <i class=\"fa fa-dollar\"></i>\n" +
    "                                        <i class=\"fa fa-dollar\"></i>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"specific-item review-item\">\n" +
    "                                    <div class=\"review-heart\">4.5</div>\n" +
    "                                    <span class=\"fa fa-heart\">4.5</span>\n" +
    "                                    <div class=\"review-label\">{{model.menu.no_of_reviews}} reviews</div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"coupon-details clearfix\">\n" +
    "                                <div class=\"coupon-wrap\">\n" +
    "                                    <div class=\"coupon-green clearfix\">\n" +
    "                                        <div class=\"discount\"><span class=\"num\">5</span><span class=\"per\">%</span> Discount</div>\n" +
    "                                        <div class=\"dine green-text\">\n" +
    "                                            <i class=\"fa fa-cutlery\"></i>\n" +
    "                                            <span>DINE IN</span>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"online green-text\">\n" +
    "                                            <i class=\"fa fa-wifi\"></i>\n" +
    "                                            <span>ONLINE ORDER</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"coupon-points\">40 points</div>\n" +
    "                                </div>\n" +
    "                                <div class=\"coupon-num\"><span class=\"dot-more\">more</span><span class=\"coupon-t\"> coupons</span><i class=\"fa fa-angle-right\"></i></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"photos-block\">\n" +
    "                        <div ng-include=\"'customer/order/views/favourites.view.tpl.html'\"></div>\n" +
    "                        <div class=\"recent-block\">\n" +
    "                            <div class=\"fav-head\">Recent orders</div>\n" +
    "                            <ul>\n" +
    "                                <li>Beef Brocoli</li>\n" +
    "                                <li>Sushi Meal</li>\n" +
    "                                <li>Pad Thai</li>\n" +
    "                            </ul>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"menu-main clearfix\">\n" +
    "                <div class=\"main-left\">\n" +
    "                    <div class=\"main-tabs\">\n" +
    "                        <ul class=\"clearfix\">\n" +
    "                            <li class=\"order-tab-item\" data-id=\"special-wrap\"><a href=\"\" ui-sref=\"customer.order.specials\">Specials</a></li>\n" +
    "                            <li class=\"order-tab-item active\" data-id=\"menu-wrap\"><a href=\"\" ui-sref=\"customer.order.menu\">Menu</a></li>\n" +
    "                            <li class=\"cuisine-filter\">\n" +
    "                                <label for=\"\">Choose cuisine</label>\n" +
    "                                <!-- add class active on dropwdown wrap to activate the dropdown -->\n" +
    "                                <div class=\"dropdown-wrap cuisine-dropdown clearfix\">\n" +
    "                                    <div class=\"filter-dropdown cuisine-trigger\">\n" +
    "                                        <span>THAI</span>\n" +
    "                                        <i class=\"fa fa-angle-down pull-right\"></i>\n" +
    "                                    </div>\n" +
    "                                    <ul class=\"cuisine-menu\">\n" +
    "                                        <li>THAI</li>\n" +
    "                                        <li>JAPANESE</li>\n" +
    "                                        <li>CHINESE</li>\n" +
    "                                    </ul>\n" +
    "                                </div>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                    <div class=\"order-tab-content \" >\n" +
    "                        <div ui-view=\"body\"></div>\n" +
    "                      <!--  <div ng-include=\"'customer/order/views/menu.view.tpl.html'\"></div>-->\n" +
    "                    </div>\n" +
    "                <!--    <div class=\"order-tab-content\" >\n" +
    "                        <div ng-include=\"'customer/order/views/specials.view.tpl.html'\"></div>\n" +
    "                    </div>\n" +
    "                --></div>\n" +
    "                <div class=\"order-summary\">\n" +
    "                    <div class=\"order-summary-inner\">\n" +
    "                        <div class=\"order-summary-close\">&times;</div>\n" +
    "                        <div class=\"order-head\">Order Summary</div>\n" +
    "                        <div class=\"order-wrap\">\n" +
    "                            <div class=\"clearfix order-label-row\">\n" +
    "                                <div class=\"qty qty-head\">Qty</div>\n" +
    "                                <div class=\"dish-name name-head\">Dish name</div>\n" +
    "                                <div class=\"order-item-price price-head\">Price</div>\n" +
    "                            </div>\n" +
    "                            <div class=\"order-list\">\n" +
    "                                <div class=\"order-row clearfix veg\"><!-- veg class  if the item is veg or else non-veg -->\n" +
    "                                    <div class=\"qty qty-value\">1</div>\n" +
    "                                    <div class=\"dish-name name-value\">Paneer pakora</div>\n" +
    "                                    <div class=\"order-item-price price-value\">$ 28.20</div>\n" +
    "                                    <span class=\"order-remove\">&times;</span>\n" +
    "                                </div>\n" +
    "                                <div class=\"order-row clearfix non-veg\">\n" +
    "                                    <div class=\"qty qty-value\">1</div>\n" +
    "                                    <div class=\"dish-name name-value\">Butter Chicken</div>\n" +
    "                                    <div class=\"order-item-price price-value\">$ 38.20</div>\n" +
    "                                    <span class=\"order-remove\">&times;</span>\n" +
    "                                </div>\n" +
    "                                <div class=\"order-row clearfix veg\">\n" +
    "                                    <div class=\"qty qty-value\">1</div>\n" +
    "                                    <div class=\"dish-name name-value\">Pineapple Delight</div>\n" +
    "                                    <div class=\"order-item-price price-value\">$ 23.20</div>\n" +
    "                                    <span class=\"order-remove\">&times;</span>\n" +
    "                                </div>\n" +
    "                                <div class=\"order-row clearfix veg\" ng-repeat=\"item in model.cart.menu\">\n" +
    "                                    <div class=\"qty qty-value\">1</div>\n" +
    "                                    <div class=\"dish-name name-value\">{{item.name}}</div>\n" +
    "                                    <div class=\"order-item-price price-value\"> {{item.cost}}</div>\n" +
    "                                    <span class=\"order-remove\" ng-click=\"removeItem($index,item.cost)\">&times;</span>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"order-calc-wrap\">\n" +
    "                                <div class=\"order-total-row\">\n" +
    "                                    <span>Order Total</span>\n" +
    "                                    <div class=\"order-item-price order-price\">$ {{model.cart.total|number:2}}</div>\n" +
    "                                </div>\n" +
    "                                <div class=\"tip-row clearfix\">\n" +
    "                                    <span class=\"blue-text\" >Tip</span> min 15% of order\n" +
    "                                    <div class=\"tip-right\">+ $ <input type=\"text\" class=\"tip-input\" value=\"{{model.cart.tip|number:2}}\" /></div>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div class=\"service-charge-row\">\n" +
    "                                    <span class=\"order-grey\">Service charge</span>\n" +
    "                                    <div class=\"order-grey-price servie-price\">+  $ 03.00</div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"order-coupon-wrap\">\n" +
    "                                <div class=\"apply-coupon-row clearfix\">\n" +
    "                                    <span class=\"order-grey\">Apply coupons</span>\n" +
    "                                    <div class=\"order-grey-price servie-price\">- $ 00.00</div>\n" +
    "                                </div>\n" +
    "                                <div class=\"order-coupon\">\n" +
    "                                    <div class=\"order-coupon-inner\">\n" +
    "                                        <div class=\"discount\"><span class=\"num\">5</span><span class=\"per\">%</span> Discount</div>\n" +
    "                                        <div class=\"points\">40 points</div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"final-price-row clearfix\">\n" +
    "                                    <span>You pay</span>\n" +
    "                                    <div class=\"final-price\">\n" +
    "                                        $ 55.80\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <button class=\"red-btn confirm-order-btn\">CONFIRM ORDER</button>\n" +
    "                        <div class=\"order-benefits\">You earn <span>55 points</span> for this order</div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"order-trigger clearfix\">\n" +
    "        <div class=\"col-xs-6 ot-left\">\n" +
    "            <span class=\"ot-t\">Total</span>\n" +
    "            <span class=\"ot-price\">$ 76.00</span>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-6 ot-right\">\n" +
    "            <span>Order summary</span> >\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div ng-include=\"'customer/order/views/modals.view.tpl.html'\"></div>\n" +
    "</div>\n" +
    "<div ng-if=\"loading\">Loading............</div>\n" +
    "\n" +
    "");
}]);

angular.module("customer/order/views/specials.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("customer/order/views/specials.view.tpl.html",
    "<section id=\"special-wrap\"  class=\"active\">\n" +
    "    <!-- repeat of each special item -->\n" +
    "    <!-- add class sp-non-veg and sp-veg depending on the item is veg or non-veg -->\n" +
    "    <div class=\"special-item-outer\" >\n" +
    "        <div class=\"special-item clearfix sp-veg sp-non-veg\">\n" +
    "            <div class=\"special-img-wrap\">\n" +
    "                <img src=\"assets/images/customer/order/combo1.png\" alt=\"\" />\n" +
    "\n" +
    "            </div>\n" +
    "            <div class=\"special-basic-wrap\">\n" +
    "                <h3>Sushi Lunch</h3>\n" +
    "                <!-- the price has to get updated if in customization any extra dollar item is selected -->\n" +
    "                <div class=\"special-item-price\">$ 14.00</div>\n" +
    "                <p class=\"special-item-para\">Sushi Lunch is a a customisable traditional Japanesse lunch with Spinach, Non veg</p>\n" +
    "            </div>\n" +
    "            <div class=\"special-extra-trigger\"><i class=\"fa fa-angle-down\"></i></div>\n" +
    "        </div>\n" +
    "        <div class=\"special-extra-wrap\">\n" +
    "            <div class=\"special-extra-inner\">\n" +
    "                <div class=\"special-ul-wrapper\">\n" +
    "                    <ul class=\"clearfix\">\n" +
    "                        <!-- done class is to be added to the li tag if the meal doesnt give the option to custom add items to the meal. -->\n" +
    "                        <li class=\"special-tab-item done\">\n" +
    "                            <div><span class=\"check-circle\"><i class=\"fa fa-check\"></i></span></div>\n" +
    "                            <i class=\"fish\"></i>\n" +
    "                            <div class=\"special-tab-name\">Fish milto</div>\n" +
    "                        </li>\n" +
    "                        <li class=\"special-tab-item done\">\n" +
    "                            <div><span class=\"check-circle\"><i class=\"fa fa-check\"></i></span></div>\n" +
    "                            <i class=\"bacon\"></i>\n" +
    "                            <div class=\"special-tab-name\">bacon strip</div>\n" +
    "                        </li>\n" +
    "                        <li class=\"special-tab-item done\">\n" +
    "                            <div><span class=\"check-circle\"><i class=\"fa fa-check\"></i></span></div>\n" +
    "                            <i class=\"wine\"></i>\n" +
    "                            <div class=\"special-tab-name\">red wine</div>\n" +
    "                        </li>\n" +
    "                        <li class=\"special-tab-item done\">\n" +
    "                            <div><span class=\"check-circle\"><i class=\"fa fa-check\"></i></span></div>\n" +
    "                            <i class=\"donout\"></i>\n" +
    "                            <div class=\"special-tab-name\">Donouts</div>\n" +
    "                        </li>\n" +
    "                        <!-- active class is to added to the first element which can be customizable to the meal -->\n" +
    "                        <li class=\"special-tab-item active\" data-id=\"special-soup\">\n" +
    "                            <div><span class=\"special-tab-name-top\">Soups</span></div>\n" +
    "                            <i class=\"soup\"></i>\n" +
    "                            <div>\n" +
    "                                <div class=\"special-added-item\">Veg tamrmairigan</div>\n" +
    "                            </div>\n" +
    "                            <div class=\"special-add\">Choose 1 more</div>\n" +
    "                        </li>\n" +
    "                        <li class=\"special-tab-item\" data-id=\"special-noodles\">\n" +
    "                            <div><span class=\"special-tab-name-top\">Noodles</span></div>\n" +
    "                            <i class=\"noodles\"></i>\n" +
    "                            <div></div>\n" +
    "                            <div class=\"special-add\">Choose1</div>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "                <div class=\"special-content-wrapper\">\n" +
    "                    <div class=\"special-tab-content active\" id=\"special-soup\">\n" +
    "                        <div class=\"special-choose-head\"><div class=\"choose-text\">CHOOSE ANY <span>2 SOUPS</span> OF YOUR CHOICE</div> <span class=\"reset-special\"><i class=\"fa fa-repeat\"></i></span></div><!-- on click of this reset the checked items inside this tab -->\n" +
    "                        <div class=\"clearfix special-selection-options\">\n" +
    "                            <label for=\"special-soup1\"><input type=\"radio\" name=\"special-soup\" id=\"special-soup1\" /><span>Chicken soup</span></label>\n" +
    "                            <label for=\"special-soup2\"><input type=\"radio\" name=\"special-soup\" id=\"special-soup2\" /><span>Veg manchov soup</span></label>\n" +
    "                            <label for=\"special-soup3\"><input type=\"radio\" name=\"special-soup\" id=\"special-soup3\" checked /><span>Veg tamrmairigan</span></label>\n" +
    "                            <label for=\"special-soup4\"><input type=\"radio\" name=\"special-soup\" id=\"special-soup4\" /><span>Kalisi soup</span></label>\n" +
    "                            <label for=\"special-soup5\"><input type=\"radio\" name=\"special-soup\" id=\"special-soup5\" /><span>Knorr soup</span></label>\n" +
    "                            <label for=\"special-soup6\"><input type=\"radio\" name=\"special-soup\" id=\"special-soup6\" /><span>Chicken Manchov soup</span></label>\n" +
    "                            <label for=\"special-soup7\"><input type=\"radio\" name=\"special-soup\" id=\"special-soup7\" /><span>Damn it roll <span class=\"price-extra\">($1 extra)</span></span></label>\n" +
    "                            <label for=\"special-soup8\"><input type=\"radio\" name=\"special-soup\" id=\"special-soup8\" /><span>Corn soup</span></label>\n" +
    "                            <label for=\"special-soup9\"><input type=\"radio\" name=\"special-soup\" id=\"special-soup9\" /><span>Schezwan soup</span></label>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"special-tab-content\" id=\"special-noodles\">\n" +
    "                       <div class=\"special-choose-head\"><div class=\"choose-text\">CHOOSE <span>1 NOODLES</span> OF YOUR CHOICE</div> <span class=\"reset-special\"><i class=\"fa fa-repeat\"></i></span></div>\n" +
    "                        Noodles content comes here with label styling as in the above soup content.\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <button class=\"order-meal-btn\">ORDER THIS MEAL <i class=\"fa fa-arrow-right\"></i></button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- special item repeat ends -->\n" +
    "    <div ng-repeat=\"item in model.special_menu\">\n" +
    "    <div class=\"special-item-outer\" ng-class=\"{active:arrowClicked}\">\n" +
    "        <div class=\"special-item clearfix sp-veg sp-non-veg\">\n" +
    "            <div class=\"special-img-wrap\">\n" +
    "                <img src=\"assets/images/customer/order/combo2.png\" alt=\"\" />                                        \n" +
    "            </div>\n" +
    "            <div class=\"special-basic-wrap\">\n" +
    "                <h3>{{item.special_name}}</h3>\n" +
    "                <div class=\"special-item-price\">{{item.special_cost}}</div>\n" +
    "                <p class=\"special-item-para\">{{item.special_caption}}</p>\n" +
    "            </div>\n" +
    "            <div class=\"special-extra-trigger\" ng-class=\"{active:arrowClicked}\" ng-click=\"arrowClicked=true && arrowClicked?false:true\" ><i class=\"fa fa-angle-down\"></i></div>\n" +
    "        </div>\n" +
    "        <div class=\"special-extra-wrap\">\n" +
    "            <div class=\"special-extra-inner\">\n" +
    "                <div class=\"special-ul-wrapper\">\n" +
    "                    <ul class=\"clearfix\">\n" +
    "                        <!-- done class is to be added to the li tag if the meal doesnt give the option to custom add items to the meal. -->\n" +
    "                        <li class=\"special-tab-item done\">\n" +
    "                            <div><span class=\"check-circle\"><i class=\"fa fa-check\"></i></span></div>\n" +
    "                            <i class=\"fish\"></i>\n" +
    "                            <div class=\"special-tab-name\">Fish milto</div>\n" +
    "                        </li>\n" +
    "                        <li class=\"special-tab-item done\">\n" +
    "                            <div><span class=\"check-circle\"><i class=\"fa fa-check\"></i></span></div>\n" +
    "                            <i class=\"bacon\"></i>\n" +
    "                            <div class=\"special-tab-name\">bacon strip</div>\n" +
    "                        </li>\n" +
    "                        <li class=\"special-tab-item done\">\n" +
    "                            <div><span class=\"check-circle\"><i class=\"fa fa-check\"></i></span></div>\n" +
    "                            <i class=\"wine\"></i>\n" +
    "                            <div class=\"special-tab-name\">red wine</div>\n" +
    "                        </li>\n" +
    "                        <li class=\"special-tab-item done\">\n" +
    "                            <div><span class=\"check-circle\"><i class=\"fa fa-check\"></i></span></div>\n" +
    "                            <i class=\"donout\"></i>\n" +
    "                            <div class=\"special-tab-name\">Donouts</div>\n" +
    "                        </li>\n" +
    "                        <!-- active class is to added to the first element which can be customizable to the meal -->\n" +
    "                        <li class=\"special-tab-item active\" data-id=\"special-soup\">\n" +
    "                            <div><span class=\"special-tab-name-top\">Soups</span></div>\n" +
    "                            <i class=\"soup\"></i>\n" +
    "                            <div>\n" +
    "                                <div class=\"special-added-item\">Veg tamrmairigan</div>\n" +
    "                            </div>\n" +
    "                            <div class=\"special-add\">Choose 1 more</div>\n" +
    "                        </li>\n" +
    "                        <li class=\"special-tab-item\" data-id=\"special-noodles\">\n" +
    "                            <div><span class=\"special-tab-name-top\">Noodles</span></div>\n" +
    "                            <i class=\"noodles\"></i>\n" +
    "                            <div></div>\n" +
    "                            <div class=\"special-add\">Choose1</div>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "                <div class=\"special-content-wrapper\">\n" +
    "                    <div class=\"special-tab-content active\" id=\"special-soup\">\n" +
    "                        <div class=\"special-choose-head\"><div class=\"choose-text\">CHOOSE ANY <span>2 SOUPS</span> OF YOUR CHOICE</div> <span class=\"reset-special\"><i class=\"fa fa-repeat\"></i></span></div><!-- on click of this reset the checked items inside this tab -->\n" +
    "                        <div class=\"clearfix special-selection-options\">\n" +
    "                            <label for=\"special-soup1\"><input type=\"radio\" name=\"special-soup\" id=\"special-soup1\" /><span>Chicken soup</span></label>\n" +
    "                            <label for=\"special-soup2\"><input type=\"radio\" name=\"special-soup\" id=\"special-soup2\" /><span>Veg manchov soup</span></label>\n" +
    "                            <label for=\"special-soup3\"><input type=\"radio\" name=\"special-soup\" id=\"special-soup3\" checked /><span>Veg tamrmairigan</span></label>\n" +
    "                            <label for=\"special-soup4\"><input type=\"radio\" name=\"special-soup\" id=\"special-soup4\" /><span>Kalisi soup</span></label>\n" +
    "                            <label for=\"special-soup5\"><input type=\"radio\" name=\"special-soup\" id=\"special-soup5\" /><span>Knorr soup</span></label>\n" +
    "                            <label for=\"special-soup6\"><input type=\"radio\" name=\"special-soup\" id=\"special-soup6\" /><span>Chicken Manchov soup</span></label>\n" +
    "                            <label for=\"special-soup7\"><input type=\"radio\" name=\"special-soup\" id=\"special-soup7\" /><span>Damn it roll <span class=\"price-extra\">($1 extra)</span></span></label>\n" +
    "                            <label for=\"special-soup8\"><input type=\"radio\" name=\"special-soup\" id=\"special-soup8\" /><span>Corn soup</span></label>\n" +
    "                            <label for=\"special-soup9\"><input type=\"radio\" name=\"special-soup\" id=\"special-soup9\" /><span>Schezwan soup</span></label>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"special-tab-content\" id=\"special-noodles\">\n" +
    "                        <div class=\"special-choose-head\"><div class=\"choose-text\">CHOOSE <span>1 NOODLES</span> OF YOUR CHOICE</div> <span class=\"reset-special\"><i class=\"fa fa-repeat\"></i></span></div>\n" +
    "                        Noodles content comes here with label styling as in the above soup content.\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <button class=\"order-meal-btn\">ORDER THIS MEAL <i class=\"fa fa-arrow-right\"></i></button>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>    </div>\n" +
    "    </div>\n" +
    "    <div class=\"special-item-outer\">\n" +
    "        <div class=\"special-item clearfix sp-veg\">\n" +
    "            <div class=\"special-img-wrap\">\n" +
    "                <img src=\"assets/images/customer/order/combo3.png\" alt=\"\" />                                        \n" +
    "            </div>\n" +
    "            <div class=\"special-basic-wrap\">\n" +
    "                <h3>Skazi Lunch</h3>\n" +
    "                <div class=\"special-item-price\">$ 14.00</div>\n" +
    "                <p class=\"special-item-para\">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>\n" +
    "            </div>\n" +
    "            <div class=\"special-extra-trigger\"><i class=\"fa fa-angle-down\"></i></div>\n" +
    "        </div>\n" +
    "        <div class=\"special-extra-wrap\">\n" +
    "            The content inside special-extra-wrap class in the first item comes inside this.\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("customer/restaurants/views/cusines.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("customer/restaurants/views/cusines.view.tpl.html",
    "<div class=\"filter-bar\">\n" +
    "    <div class=\"max-content\">\n" +
    "        <div class=\"filters-wrap clearfix\">\n" +
    "            <div class=\"filters-web-wrap\">\n" +
    "                <div class=\"available-wrap clearfix\">\n" +
    "                    <label for=\"\">AVAILABLE FOR</label>\n" +
    "                    <dropdown model=\"model.availableDropdown\" class=\"available-dropdown\" ></dropdown>\n" +
    "                </div>\n" +
    "                <div class=\"sort-wrap clearfix\">\n" +
    "                    <label for=\"\">SORT BY</label>\n" +
    "                    <div class=\"dropdown-wrap  clearfix\">\n" +
    "                        <!--                        <dropdown model=\"model.sortByDropdown\" class=\"sort-trigger pull-left\" ng-model=\"sortTest\"></dropdown>-->\n" +
    "                        <dropdown model=\"model.sortByDropdown\"  class=\"sort-trigger sort-dropdown pull-left\" ng-model=\"sortTest\"></dropdown>\n" +
    "                        <div class=\"sort-caret caret-up\">\n" +
    "                            <div class=\"caret-up active\"><i class=\"fa fa-caret-up\"></i></div>\n" +
    "                            <div class=\"caret-down\"><i class=\"fa fa-caret-down\"></i></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <!--<div class=\"filters-touch-wrap\">\n" +
    "                <div class=\"available-wrap\">\n" +
    "                    <div class=\"select-wrap\">\n" +
    "                        <select name=\"\" id=\"\" class=\"filter-dropdown\">\n" +
    "\n" +
    "\n" +
    "                        </select>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "&lt;!&ndash;                <sort-By></sort-By>&ndash;&gt;\n" +
    "                <div class=\"sort-wrap\">\n" +
    "                    <div class=\"select-wrap\">\n" +
    "                        <select name=\"\" id=\"\" class=\"filter-dropdown\">\n" +
    "\n" +
    "\n" +
    "                          </select>\n" +
    "                    </div>\n" +
    "                    <div class=\"sort-caret caret-up\">\n" +
    "                        <div class=\"caret-up active\"><i class=\"fa fa-caret-up\"></i></div>\n" +
    "                        <div class=\"caret-down\"><i class=\"fa fa-caret-down\"></i></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>-->\n" +
    "            <div class=\"search-wrap clearfix\">\n" +
    "                <label for=\"\">SEARCH BY AREA</label>\n" +
    "                <div class=\"search-bar\">\n" +
    "                    <input type=\"text\" class=\"form-control\" placeholder=\"Type your locality/Address\">\n" +
    "                    <i class=\"fa fa-map-marker\"></i>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<section class=\"container tests-block\">\n" +
    "    <div ng-if=\"!loading\">\n" +
    "    <div  ng-click=\"getRestaurants(cusines.restaurants,cusines.cuisine)\" class=\"test-item\" ng-repeat=\"cusines in model.cusinesList\">\n" +
    "        <a href=\"\"><span><strong>{{cusines.cuisine}}</strong></span><br></a>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "    <div ng-if=\"loading\">\n" +
    "        <span>Loading...............</span>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "</section>");
}]);

angular.module("customer/restaurants/views/meals.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("customer/restaurants/views/meals.view.tpl.html",
    "<div class=\"filter-bar\">\n" +
    "    <div class=\"max-content\">\n" +
    "        <div class=\"filters-wrap clearfix\">\n" +
    "            <div class=\"filters-web-wrap\">\n" +
    "                <div class=\"available-wrap clearfix\">\n" +
    "                    <label for=\"\">AVAILABLE FOR</label>\n" +
    "                    <dropdown model=\"filterModel.availableDropdown\" class=\"available-dropdown\" ng-click=\"filterChange()\"></dropdown>\n" +
    "                </div>\n" +
    "                <div class=\"sort-wrap clearfix\">\n" +
    "                    <label for=\"\">SORT BY</label>\n" +
    "                    <div class=\"dropdown-wrap  clearfix\">\n" +
    "                        <!--                        <dropdown model=\"model.sortByDropdown\" class=\"sort-trigger pull-left\" ng-model=\"sortTest\"></dropdown>-->\n" +
    "                        <dropdown model=\"filterModel.sortByDropdown\" ng-click=\"generateUrl()\" class=\"sort-trigger sort-dropdown pull-left\" ng-model=\"sortTest\"></dropdown>\n" +
    "                        <div class=\"sort-caret caret-up\">\n" +
    "                            <div class=\"caret-up active\"><i class=\"fa fa-caret-up\"></i></div>\n" +
    "                            <div class=\"caret-down\"><i class=\"fa fa-caret-down\"></i></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <!--<div class=\"filters-touch-wrap\">\n" +
    "                <div class=\"available-wrap\">\n" +
    "                    <div class=\"select-wrap\">\n" +
    "                        <select name=\"\" id=\"\" class=\"filter-dropdown\">\n" +
    "\n" +
    "\n" +
    "                        </select>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "&lt;!&ndash;                <sort-By></sort-By>&ndash;&gt;\n" +
    "                <div class=\"sort-wrap\">\n" +
    "                    <div class=\"select-wrap\">\n" +
    "                        <select name=\"\" id=\"\" class=\"filter-dropdown\">\n" +
    "\n" +
    "\n" +
    "                          </select>\n" +
    "                    </div>\n" +
    "                    <div class=\"sort-caret caret-up\">\n" +
    "                        <div class=\"caret-up active\"><i class=\"fa fa-caret-up\"></i></div>\n" +
    "                        <div class=\"caret-down\"><i class=\"fa fa-caret-down\"></i></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>-->\n" +
    "            <div class=\"search-wrap clearfix\">\n" +
    "                <label for=\"\">SEARCH BY AREA</label>\n" +
    "                <div class=\"search-bar\">\n" +
    "                    <input type=\"text\" class=\"form-control\" placeholder=\"Type your locality/Address\">\n" +
    "                    <i class=\"fa fa-map-marker\"></i>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"main clearfix\">\n" +
    "    <div class=\"max-content\">\n" +
    "\n" +
    "    <div class=\"cuisine-block\">\n" +
    "    <div class=\"cuisine-head\">Choose your cuisines here <i class=\"fa fa-plus-square\" id=\"cuisine-toggle\"></i></div>\n" +
    "\n" +
    "    <div class=\"cuisine-options clearfix\">\n" +
    "        <label class=\"cuisine-type\" ng-repeat=\"item in cusinesData\" >\n" +
    "            <input type=\"checkbox\" value=\"{{item.cuisine}}\">\n" +
    "            <span><i class=\"fa fa-check\"></i></span>\n" +
    "            {{item.cuisine}}\n" +
    "        </label>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "        <div class=\"main-content clearfix\">\n" +
    "        <div class=\"meals-block\" >\n" +
    "            <div class=\"special-item clearfix sp-veg sp-non-veg\">\n" +
    "                <div class=\"special-img-wrap\">\n" +
    "                    <img src=\"assets/images/customer/restaurants/meals1.png\" alt=\"\" />\n" +
    "                    <div class=\"img-overlay\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"special-right-wrap\">\n" +
    "                    <div class=\"special-basic-wrap\">\n" +
    "                        <h3>Sushi Lunch</h3>\n" +
    "                        <div class=\"special-item-price\">$ 14.00</div>\n" +
    "                        <p class=\"special-item-para\">Sushi Lunch is a a customisable traditional Japanesse lunch with Spinach, Non veg</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"meals-rest-block\">\n" +
    "                        <span class=\"rest-name\">Galangal Indian Restaurant</span>\n" +
    "                        <div class=\"pull-right meal-rest-details\">\n" +
    "                            <span class=\"time\"><i class=\"fa fa-clock-o\"></i> 45 mins</span>\n" +
    "                            <span class=\"money\"><i class=\"fa fa-money\"></i> $20.00</span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <a href=\"#\" class=\"meals-customize\">CUSTOMIZE</a>\n" +
    "            </div>\n" +
    "            <div class=\"special-item clearfix sp-veg sp-non-veg\">\n" +
    "                <div class=\"special-img-wrap\">\n" +
    "                    <img src=\"assets/images/customer/restaurants/meals1.png\" alt=\"\" />\n" +
    "                    <div class=\"img-overlay\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"special-right-wrap\">\n" +
    "                    <div class=\"special-basic-wrap\">\n" +
    "                        <h3>North Indian Thali</h3>\n" +
    "                        <div class=\"special-item-price\">$ 10.00</div>\n" +
    "                        <p class=\"special-item-para\">Thali is a a customisable traditional Japanesse lunch with Spinach, Non veg</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"meals-rest-block\">\n" +
    "                        <span class=\"rest-name\">Batinda Junction</span>\n" +
    "                        <div class=\"pull-right meal-rest-details\">\n" +
    "                            <span class=\"time\"><i class=\"fa fa-clock-o\"></i> 15 mins</span>\n" +
    "                            <span class=\"money\"><i class=\"fa fa-money\"></i> $10.00</span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <a href=\"#\" class=\"meals-customize\">CUSTOMIZE</a>\n" +
    "            </div>\n" +
    "            <div class=\"special-item clearfix sp-veg sp-non-veg\" ng-repeat=\"meal in model.mealObj\">\n" +
    "                <div class=\"special-img-wrap\">\n" +
    "                    <img src=\"assets/images/customer/restaurants/meals1.png\" alt=\"\" />\n" +
    "                    <div class=\"img-overlay\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"special-right-wrap\">\n" +
    "                    <div class=\"special-basic-wrap\">\n" +
    "                        <h3>{{meal.restaurant_name}}</h3>\n" +
    "                        <div class=\"special-item-price\">$ 10.00</div>\n" +
    "                        <p class=\"special-item-para\">Thali is a a customisable traditional Japanesse lunch with Spinach, Non veg</p>\n" +
    "                    </div>\n" +
    "                    <div class=\"meals-rest-block\">\n" +
    "                        <span class=\"rest-name\">Batinda Junction</span>\n" +
    "                        <div class=\"pull-right meal-rest-details\">\n" +
    "                            <span class=\"time\"><i class=\"fa fa-clock-o\"></i> 15 mins</span>\n" +
    "                            <span class=\"money\"><i class=\"fa fa-money\"></i> $10.00</span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <a href=\"#\" class=\"meals-customize\">CUSTOMIZE</a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
    "    <!-- repeat this element -->\n" +
    "    <!-- adding nonveg(sp-non-veg) and veg(sp-veg) classes same as in specials tab -->\n" +
    "  <!--  -->\n" +
    "\n" +
    "");
}]);

angular.module("customer/restaurants/views/restaurant-list.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("customer/restaurants/views/restaurant-list.view.tpl.html",
    "<div class=\"filter-bar\">\n" +
    "    <div class=\"max-content\">\n" +
    "        <div class=\"filters-wrap clearfix\">\n" +
    "            <div class=\"filters-web-wrap\">\n" +
    "                <div class=\"available-wrap clearfix\">\n" +
    "                    <label for=\"\">AVAILABLE FOR</label>\n" +
    "                    <dropdown model=\"filterModel.availableDropdown\" class=\"available-dropdown\" ></dropdown>\n" +
    "                </div>\n" +
    "                <div class=\"sort-wrap clearfix\">\n" +
    "                    <label for=\"\">SORT BY</label>\n" +
    "                    <div class=\"dropdown-wrap  clearfix\">\n" +
    "                        <!--                        <dropdown model=\"model.sortByDropdown\" class=\"sort-trigger pull-left\" ng-model=\"sortTest\"></dropdown>-->\n" +
    "                        <dropdown model=\"filterModel.sortByDropdown\"  class=\"sort-trigger sort-dropdown pull-left\" ></dropdown>\n" +
    "                        <div class=\"sort-caret caret-up\">\n" +
    "                            <div class=\"caret-up active\"><i class=\"fa fa-caret-up\"></i></div>\n" +
    "                            <div class=\"caret-down\"><i class=\"fa fa-caret-down\"></i></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <!--<div class=\"filters-touch-wrap\">\n" +
    "                <div class=\"available-wrap\">\n" +
    "                    <div class=\"select-wrap\">\n" +
    "                        <select name=\"\" id=\"\" class=\"filter-dropdown\">\n" +
    "\n" +
    "\n" +
    "                        </select>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "&lt;!&ndash;                <sort-By></sort-By>&ndash;&gt;\n" +
    "                <div class=\"sort-wrap\">\n" +
    "                    <div class=\"select-wrap\">\n" +
    "                        <select name=\"\" id=\"\" class=\"filter-dropdown\">\n" +
    "\n" +
    "\n" +
    "                          </select>\n" +
    "                    </div>\n" +
    "                    <div class=\"sort-caret caret-up\">\n" +
    "                        <div class=\"caret-up active\"><i class=\"fa fa-caret-up\"></i></div>\n" +
    "                        <div class=\"caret-down\"><i class=\"fa fa-caret-down\"></i></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>-->\n" +
    "            <div class=\"search-wrap clearfix\">\n" +
    "                <label for=\"\">SEARCH BY AREA</label>\n" +
    "                <div class=\"search-bar\">\n" +
    "                    <input type=\"text\" class=\"form-control\" placeholder=\"Type your locality/Address\">\n" +
    "                    <i class=\"fa fa-map-marker\"></i>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"main clearfix\">\n" +
    "    <div class=\"max-content\">\n" +
    "        <div class=\"cuisine-block\">\n" +
    "            <div class=\"cuisine-head\">Choose your cuisines here <i class=\"fa fa-plus-square\" id=\"cuisine-toggle\"></i></div>\n" +
    "\n" +
    "            <div class=\"cuisine-options clearfix\">\n" +
    "                <label class=\"cuisine-type\" ng-repeat=\"item in cusinesData\" ng-click=\"generateUrl('',false,true)\">\n" +
    "                    <input type=\"checkbox\" value=\"{{item.cuisine}}\">\n" +
    "                    <span><i class=\"fa fa-check\"></i></span>\n" +
    "                    {{item.cuisine}}\n" +
    "                </label>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"main-content clearfix\">\n" +
    "            <div class=\"restaurant-block\">\n" +
    "\n" +
    "                <div class=\"restaurant-content\">\n" +
    "<!--                    &lt;!&ndash; repetetive elements starts&ndash;&gt;-->\n" +
    "                    <!--<div class=\"list-item clearfix\">\n" +
    "                        <div class=\"item-logo\"><img src=\"assets/images/customer/core/Restaurant_Logo1.png\" alt=\"\"></div>\n" +
    "                        <div class=\"content-block\">\n" +
    "                            <div class=\"basic-details\">\n" +
    "                                <div class=\"list-head clearfix\">\n" +
    "                                    <h1>Galangal Supreme Restaurant</h1>\n" +
    "                                    <h2 class=\"list-tag\">Thai and Japanese</h2>\n" +
    "                                </div>\n" +
    "                                <div class=\"list-address\">140 Jerrico Turnpike Syosset,NY,11791</div>\n" +
    "                                <div class=\"specific-details\">\n" +
    "                                    <div class=\"specific-item\">\n" +
    "                                        <label for=\"\">Minimum delivery</label>\n" +
    "                                        <span class=\"fa fa-money\"></span>\n" +
    "                                        <div class=\"specific-value\">\n" +
    "                                            $20.00\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"specific-item\">\n" +
    "                                        <label for=\"\">Delivery time estimated</label>\n" +
    "                                        <span class=\"fa fa-clock-o\"></span>\n" +
    "                                        <div class=\"specific-value\">\n" +
    "                                            20 <span>min</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"specific-item\">\n" +
    "                                        <label for=\"\">Distance</label>\n" +
    "                                        <span class=\"fa fa-expand\"></span>\n" +
    "                                        <div class=\"specific-value\">\n" +
    "                                            3.2 <span>miles</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"specific-item\">\n" +
    "                                        <label for=\"\">Average pricing[<span>?</span>]</label>\n" +
    "                                        <span class=\"fa fa-dollar\"></span>\n" +
    "                                        <div class=\"specific-value\">\n" +
    "                                            <i class=\"fa fa-dollar active\"></i>\n" +
    "                                            <i class=\"fa fa-dollar active\"></i>\n" +
    "                                            <i class=\"fa fa-dollar active\"></i>\n" +
    "                                            <i class=\"fa fa-dollar\"></i>\n" +
    "                                            <i class=\"fa fa-dollar\"></i>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"specific-item review-item\">\n" +
    "                                        <div class=\"review-heart\">4.5</div>\n" +
    "                                        <span class=\"fa fa-heart\">4.5</span>\n" +
    "                                        <div class=\"review-label\">13 reviews</div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"coupon-details clearfix\">\n" +
    "                                    <div class=\"coupon-wrap\">\n" +
    "                                        <div class=\"coupon-green clearfix\">\n" +
    "                                            <div class=\"discount\"><span class=\"num\">5</span><span class=\"per\">%</span> Discount</div>\n" +
    "                                            <div class=\"dine green-text\">\n" +
    "                                                <i class=\"fa fa-cutlery\"></i>\n" +
    "                                                <span>DINE IN</span>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"online green-text\">\n" +
    "                                                <i class=\"fa fa-wifi\"></i>\n" +
    "                                                <span>ONLINE ORDER</span>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"coupon-points\">40 points</div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"coupon-num\">2 <span>Coupons left</span><i class=\"fa fa-angle-right\"></i></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                          <div ng-include=customer/restaurants/views/specials.view.tpl.html></div>\n" +
    "                    </div>-->\n" +
    "<!--                    &lt;!&ndash; repetetive element ends&ndash;&gt;-->\n" +
    "                    <div ng-if=\"!loading\">\n" +
    "                    <div class=\"list-item clearfix\" ng-click=\"showMenu(restaurant.restaurant_id)\" ng-repeat=\"restaurant in model.restaurantObj\">\n" +
    "                        <div class=\"item-logo\"><img src=\"assets/images/customer/core/Restaurant_Logo1.png\" alt=\"\"></div>\n" +
    "                        <div class=\"content-block\">\n" +
    "                            <div class=\"basic-details\">\n" +
    "                                <div class=\"list-head clearfix\">\n" +
    "                                    <h1>{{restaurant.restaurant_name}}</h1>\n" +
    "                                    <h2 class=\"list-tag\">{{restaurant.restaurant_cuisines[0]}}</h2>\n" +
    "                                </div>\n" +
    "                                <div class=\"list-address\">{{restaurant.address1}} ,{{restaurant.state}},{{restaurant.zip}}</div>\n" +
    "                                <div class=\"specific-details\">\n" +
    "                                    <div class=\"specific-item\">\n" +
    "                                        <label for=\"\">Minimum delivery</label>\n" +
    "                                        <span class=\"fa fa-money\"></span>\n" +
    "                                        <div class=\"specific-value\">\n" +
    "                                            {{restaurant.minimum_delivery}}\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"specific-item\">\n" +
    "                                        <label for=\"\">Delivery time estimated</label>\n" +
    "                                        <span class=\"fa fa-clock-o\"></span>\n" +
    "                                        <div class=\"specific-value\">\n" +
    "                                           {{restaurant.del_time_est}} <span>min</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"specific-item\">\n" +
    "                                        <label for=\"\">Distance</label>\n" +
    "                                        <span class=\"fa fa-expand\"></span>\n" +
    "                                        <div class=\"specific-value\">\n" +
    "                                            3.2 <span>miles</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"specific-item\">\n" +
    "                                        <label for=\"\">Average pricing[<span>?</span>]</label>\n" +
    "                                        <span class=\"fa fa-dollar\"></span>\n" +
    "                                        <div class=\"specific-value\">\n" +
    "                                            <i class=\"fa fa-dollar active\"></i>\n" +
    "                                            <i class=\"fa fa-dollar active\"></i>\n" +
    "                                            <i class=\"fa fa-dollar active\"></i>\n" +
    "                                            <i class=\"fa fa-dollar\"></i>\n" +
    "                                            <i class=\"fa fa-dollar\"></i>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"specific-item review-item\">\n" +
    "                                        <div class=\"review-heart\">4.5</div>\n" +
    "                                        <span class=\"fa fa-heart\">{{restaurant.restaurant_rating}}</span>\n" +
    "                                        <div class=\"review-label\">{{restaurant.no_of_reviews}} reviews</div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"coupon-details clearfix\">\n" +
    "                                    <div class=\"coupon-wrap\">\n" +
    "                                        <div class=\"coupon-green clearfix\">\n" +
    "                                            <div class=\"discount\"><span class=\"num\">5</span><span class=\"per\">%</span> Discount</div>\n" +
    "                                            <div class=\"dine green-text\">\n" +
    "                                                <i class=\"fa fa-cutlery\"></i>\n" +
    "                                                <span>DINE IN</span>\n" +
    "                                            </div>\n" +
    "                                            <div class=\"online green-text\">\n" +
    "                                                <i class=\"fa fa-wifi\"></i>\n" +
    "                                                <span>ONLINE ORDER</span>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"coupon-points\">{{restaurant.coupon_points}} points</div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"coupon-num\">{{restaurant.coupons_left}} <span>Coupons left</span><i class=\"fa fa-angle-right\"></i></div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "<!--                        &lt;!&ndash;UI View for specials&ndash;&gt;-->\n" +
    "\n" +
    "                        <div ng-include=\"'customer/restaurants/views/specials.view.tpl.html'\"></div>\n" +
    "                    </div>\n" +
    "                    <div class=\"list-item clearfix\">\n" +
    "\n" +
    "                    </div>\n" +
    "                    </div>\n" +
    "                    <div ng-if=\"loading\">\n" +
    "                        Loading ..........\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "<!--    <div class=\"main-content clearfix\">\n" +
    "            <div class=\"restaurant-content\" style=\"display: none\">\n" +
    "                &lt;!&ndash; repetetive elements starts&ndash;&gt;\n" +
    "                <div class=\"list-item clearfix\">\n" +
    "                    <div class=\"item-logo\"><img src=\"assets/images/customer/core/Restaurant_Logo1.png\" alt=\"\"></div>\n" +
    "                    <div class=\"content-block\">\n" +
    "                        <div class=\"basic-details\">\n" +
    "                            <div class=\"list-head clearfix\">\n" +
    "                                <h1>Galangal Supreme Restaurant</h1>\n" +
    "                                <h2 class=\"list-tag\">Thai and Japanese</h2>\n" +
    "                            </div>\n" +
    "                            <div class=\"list-address\">140 Jerrico Turnpike Syosset,NY,11791</div>\n" +
    "                            <div class=\"specific-details\">\n" +
    "                                <div class=\"specific-item\">\n" +
    "                                    <label for=\"\">Minimum delivery</label>\n" +
    "                                    <span class=\"fa fa-money\"></span>\n" +
    "                                    <div class=\"specific-value\">\n" +
    "                                        $20.00\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"specific-item\">\n" +
    "                                    <label for=\"\">Delivery time estimated</label>\n" +
    "                                    <span class=\"fa fa-clock-o\"></span>\n" +
    "                                    <div class=\"specific-value\">\n" +
    "                                        20 <span>min</span>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"specific-item\">\n" +
    "                                    <label for=\"\">Distance</label>\n" +
    "                                    <span class=\"fa fa-expand\"></span>\n" +
    "                                    <div class=\"specific-value\">\n" +
    "                                        3.2 <span>miles</span>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"specific-item\">\n" +
    "                                    <label for=\"\">Average pricing[<span>?</span>]</label>\n" +
    "                                    <span class=\"fa fa-dollar\"></span>\n" +
    "                                    <div class=\"specific-value\">\n" +
    "                                        <i class=\"fa fa-dollar active\"></i>\n" +
    "                                        <i class=\"fa fa-dollar active\"></i>\n" +
    "                                        <i class=\"fa fa-dollar active\"></i>\n" +
    "                                        <i class=\"fa fa-dollar\"></i>\n" +
    "                                        <i class=\"fa fa-dollar\"></i>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"specific-item review-item\">\n" +
    "                                    <div class=\"review-heart\">4.5</div>\n" +
    "                                    <span class=\"fa fa-heart\">4.5</span>\n" +
    "                                    <div class=\"review-label\">13 reviews</div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"coupon-details clearfix\">\n" +
    "                                <div class=\"coupon-wrap\">\n" +
    "                                    <div class=\"coupon-green clearfix\">\n" +
    "                                        <div class=\"discount\"><span class=\"num\">5</span><span class=\"per\">%</span> Discount</div>\n" +
    "                                        <div class=\"dine green-text\">\n" +
    "                                            <i class=\"fa fa-cutlery\"></i>\n" +
    "                                            <span>DINE IN</span>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"online green-text\">\n" +
    "                                            <i class=\"fa fa-wifi\"></i>\n" +
    "                                            <span>ONLINE ORDER</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"coupon-points\">40 points</div>\n" +
    "                                </div>\n" +
    "                                <div class=\"coupon-num\">2 <span>Coupons left</span><i class=\"fa fa-angle-right\"></i></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                  &lt;!&ndash;  <div ng-include=\"'customer/restaurants/views/specials.view.tpl.html'\"></div>&ndash;&gt;\n" +
    "                </div>\n" +
    "                &lt;!&ndash; repetetive element ends&ndash;&gt;\n" +
    "                <div class=\"list-item clearfix\">\n" +
    "                    <div class=\"item-logo\"><img src=\"assets/images/customer/core/Restaurant_Logo1.png\" alt=\"\"></div>\n" +
    "                    <div class=\"content-block\">\n" +
    "                        <div class=\"basic-details\">\n" +
    "                            <div class=\"list-head clearfix\">\n" +
    "                                <h1>Galangal Supreme Restaurant</h1>\n" +
    "                                <h2 class=\"list-tag\">Thai and Japanese</h2>\n" +
    "                            </div>\n" +
    "                            <div class=\"list-address\">140 Jerrico Turnpike Syosset,NY,11791</div>\n" +
    "                            <div class=\"specific-details\">\n" +
    "                                <div class=\"specific-item\">\n" +
    "                                    <label for=\"\">Minimum delivery</label>\n" +
    "                                    <span class=\"fa fa-money\"></span>\n" +
    "                                    <div class=\"specific-value\">\n" +
    "                                        $20.00\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"specific-item\">\n" +
    "                                    <label for=\"\">Delivery time estimated</label>\n" +
    "                                    <span class=\"fa fa-clock-o\"></span>\n" +
    "                                    <div class=\"specific-value\">\n" +
    "                                        20 <span>min</span>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"specific-item\">\n" +
    "                                    <label for=\"\">Distance</label>\n" +
    "                                    <span class=\"fa fa-expand\"></span>\n" +
    "                                    <div class=\"specific-value\">\n" +
    "                                        3.2 <span>miles</span>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"specific-item\">\n" +
    "                                    <label for=\"\">Average pricing[<span>?</span>]</label>\n" +
    "                                    <span class=\"fa fa-dollar\"></span>\n" +
    "                                    <div class=\"specific-value\">\n" +
    "                                        <i class=\"fa fa-dollar active\"></i>\n" +
    "                                        <i class=\"fa fa-dollar active\"></i>\n" +
    "                                        <i class=\"fa fa-dollar active\"></i>\n" +
    "                                        <i class=\"fa fa-dollar\"></i>\n" +
    "                                        <i class=\"fa fa-dollar\"></i>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"specific-item review-item\">\n" +
    "                                    <div class=\"review-heart\">4.5</div>\n" +
    "                                    <span class=\"fa fa-heart\">4.5</span>\n" +
    "                                    <div class=\"review-label\">13 reviews</div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"coupon-details clearfix\">\n" +
    "                                <div class=\"coupon-wrap\">\n" +
    "                                    <div class=\"coupon-green clearfix\">\n" +
    "                                        <div class=\"discount\"><span class=\"num\">5</span><span class=\"per\">%</span> Discount</div>\n" +
    "                                        <div class=\"dine green-text\">\n" +
    "                                            <i class=\"fa fa-cutlery\"></i>\n" +
    "                                            <span>DINE IN</span>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"online green-text\">\n" +
    "                                            <i class=\"fa fa-wifi\"></i>\n" +
    "                                            <span>ONLINE ORDER</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"coupon-points\">40 points</div>\n" +
    "                                </div>\n" +
    "                                <div class=\"coupon-num\">2 <span>Coupons left</span><i class=\"fa fa-angle-right\"></i></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    &lt;!&ndash;UI View for specials&ndash;&gt;\n" +
    "\n" +
    "                    &lt;!&ndash;<div ng-include=\"'customer/restaurants/views/specials.view.tpl.html'\"></div>&ndash;&gt;\n" +
    "                </div>\n" +
    "                <div class=\"list-item clearfix\">\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "        </div>-->\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("customer/restaurants/views/restaurants.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("customer/restaurants/views/restaurants.view.tpl.html",
    "<div ng-if=\"!loadingRest\">\n" +
    "<section class='intro-block'>\n" +
    "    <h2>Sevola la setore</h2>\n" +
    "    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>\n" +
    "</section>\n" +
    "<div class=\"page-tabs\">\n" +
    "    <div class=\"max-content\">\n" +
    "        <div class=\"tabs-container clearfix\">\n" +
    "            <div class=\"tab-item\" ><a href=\"#/cusines\" ui-sref=\"customer.restaurants.cusines\">Cuisine</a>    </div>\n" +
    "            <div class=\"tab-item\" ><a href=\"#/restaurant-list\" ui-sref=\"customer.restaurants.restaurant_list\">Restaurants</a></div>\n" +
    "            <div class=\"tab-item active\" ><a href=\"#/meals\" ui-sref=\"customer.restaurants.meals\">Meals</a></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!--\n" +
    "<div class=\"filter-bar\">\n" +
    "    <div class=\"max-content\">\n" +
    "        <div class=\"filters-wrap clearfix\">\n" +
    "            <div class=\"filters-web-wrap\">\n" +
    "                <div class=\"available-wrap clearfix\">\n" +
    "                    <label for=\"\">AVAILABLE FOR</label>\n" +
    "                    <dropdown model=\"model.availableDropdown\" class=\"available-dropdown\" ng-click=\"generateUrl()\"></dropdown>\n" +
    "                </div>\n" +
    "                <div class=\"sort-wrap clearfix\">\n" +
    "                    <label for=\"\">SORT BY</label>\n" +
    "                    <div class=\"dropdown-wrap  clearfix\">\n" +
    "&lt;!&ndash;                        <dropdown model=\"model.sortByDropdown\" class=\"sort-trigger pull-left\" ng-model=\"sortTest\"></dropdown>&ndash;&gt;\n" +
    "                        <dropdown model=\"model.sortByDropdown\" ng-click=\"generateUrl()\" class=\"sort-trigger sort-dropdown pull-left\" ng-model=\"sortTest\"></dropdown>\n" +
    "                        <div class=\"sort-caret caret-up\">\n" +
    "                            <div class=\"caret-up active\"><i class=\"fa fa-caret-up\"></i></div>\n" +
    "                            <div class=\"caret-down\"><i class=\"fa fa-caret-down\"></i></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            &lt;!&ndash;<div class=\"filters-touch-wrap\">\n" +
    "                <div class=\"available-wrap\">\n" +
    "                    <div class=\"select-wrap\">\n" +
    "                        <select name=\"\" id=\"\" class=\"filter-dropdown\">\n" +
    "\n" +
    "\n" +
    "                        </select>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "&lt;!&ndash;                <sort-By></sort-By>&ndash;&gt;\n" +
    "                <div class=\"sort-wrap\">\n" +
    "                    <div class=\"select-wrap\">\n" +
    "                        <select name=\"\" id=\"\" class=\"filter-dropdown\">\n" +
    "\n" +
    "\n" +
    "                          </select>\n" +
    "                    </div>\n" +
    "                    <div class=\"sort-caret caret-up\">\n" +
    "                        <div class=\"caret-up active\"><i class=\"fa fa-caret-up\"></i></div>\n" +
    "                        <div class=\"caret-down\"><i class=\"fa fa-caret-down\"></i></div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>&ndash;&gt;\n" +
    "            <div class=\"search-wrap clearfix\">\n" +
    "                <label for=\"\">SEARCH BY AREA</label>\n" +
    "                <div class=\"search-bar\">\n" +
    "                    <input type=\"text\" class=\"form-control\" placeholder=\"Type your locality/Address\">\n" +
    "                    <i class=\"fa fa-map-marker\"></i>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "-->\n" +
    "\n" +
    "\n" +
    "<div  ui-view=\"body\"></div>\n" +
    "        <!--<div class=\"main clearfix\">\n" +
    "    <div class=\"max-content\">\n" +
    "        <div class=\"cuisine-block\">\n" +
    "            <div class=\"cuisine-head\">Choose your cuisines here <i class=\"fa fa-plus-square\" id=\"cuisine-toggle\"></i></div>\n" +
    "            <div class=\"cuisine-options clearfix\">\n" +
    "                <label class=\"cuisine-type\">\n" +
    "                    <input type=\"checkbox\" >\n" +
    "                    <span><i class=\"fa fa-check\"></i></span>\n" +
    "                    Indian\n" +
    "                </label>\n" +
    "                <label class=\"cuisine-type\">\n" +
    "                    <input type=\"checkbox\" >\n" +
    "                    <span><i class=\"fa fa-check\"></i></span>\n" +
    "                    Chinese\n" +
    "                </label>\n" +
    "                <label class=\"cuisine-type\">\n" +
    "                    <input type=\"checkbox\" >\n" +
    "                    <span><i class=\"fa fa-check\"></i></span>\n" +
    "                    American\n" +
    "                </label>\n" +
    "                <label class=\"cuisine-type\">\n" +
    "                    <input type=\"checkbox\" >\n" +
    "                    <span><i class=\"fa fa-check\"></i></span>\n" +
    "                    Italian\n" +
    "                </label>\n" +
    "                <label class=\"cuisine-type\">\n" +
    "                    <input type=\"checkbox\" >\n" +
    "                    <span><i class=\"fa fa-check\"></i></span>\n" +
    "                    Mexican\n" +
    "                </label>\n" +
    "                <label class=\"cuisine-type\">\n" +
    "                    <input type=\"checkbox\" >\n" +
    "                    <span><i class=\"fa fa-check\"></i></span>\n" +
    "                    Thai\n" +
    "                </label>\n" +
    "                <label class=\"cuisine-type\">\n" +
    "                    <input type=\"checkbox\" >\n" +
    "                    <span><i class=\"fa fa-check\"></i></span>\n" +
    "                    Custom\n" +
    "                </label>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "       <div class=\"main-content clearfix\">\n" +
    "            <div class=\"restaurant-content\" style=\"display: none\">\n" +
    "                &lt;!&ndash; repetetive elements starts&ndash;&gt;\n" +
    "                <div class=\"list-item clearfix\">\n" +
    "                    <div class=\"item-logo\"><img src=\"assets/images/customer/core/Restaurant_Logo1.png\" alt=\"\"></div>\n" +
    "                    <div class=\"content-block\">\n" +
    "                        <div class=\"basic-details\">\n" +
    "                            <div class=\"list-head clearfix\">\n" +
    "                                <h1>Galangal Supreme Restaurant</h1>\n" +
    "                                <h2 class=\"list-tag\">Thai and Japanese</h2>\n" +
    "                            </div>\n" +
    "                            <div class=\"list-address\">140 Jerrico Turnpike Syosset,NY,11791</div>\n" +
    "                            <div class=\"specific-details\">\n" +
    "                                <div class=\"specific-item\">\n" +
    "                                    <label for=\"\">Minimum delivery</label>\n" +
    "                                    <span class=\"fa fa-money\"></span>\n" +
    "                                    <div class=\"specific-value\">\n" +
    "                                        $20.00\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"specific-item\">\n" +
    "                                    <label for=\"\">Delivery time estimated</label>\n" +
    "                                    <span class=\"fa fa-clock-o\"></span>\n" +
    "                                    <div class=\"specific-value\">\n" +
    "                                        20 <span>min</span>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"specific-item\">\n" +
    "                                    <label for=\"\">Distance</label>\n" +
    "                                    <span class=\"fa fa-expand\"></span>\n" +
    "                                    <div class=\"specific-value\">\n" +
    "                                        3.2 <span>miles</span>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"specific-item\">\n" +
    "                                    <label for=\"\">Average pricing[<span>?</span>]</label>\n" +
    "                                    <span class=\"fa fa-dollar\"></span>\n" +
    "                                    <div class=\"specific-value\">\n" +
    "                                        <i class=\"fa fa-dollar active\"></i>\n" +
    "                                        <i class=\"fa fa-dollar active\"></i>\n" +
    "                                        <i class=\"fa fa-dollar active\"></i>\n" +
    "                                        <i class=\"fa fa-dollar\"></i>\n" +
    "                                        <i class=\"fa fa-dollar\"></i>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"specific-item review-item\">\n" +
    "                                    <div class=\"review-heart\">4.5</div>\n" +
    "                                    <span class=\"fa fa-heart\">4.5</span>\n" +
    "                                    <div class=\"review-label\">13 reviews</div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"coupon-details clearfix\">\n" +
    "                                <div class=\"coupon-wrap\">\n" +
    "                                    <div class=\"coupon-green clearfix\">\n" +
    "                                        <div class=\"discount\"><span class=\"num\">5</span><span class=\"per\">%</span> Discount</div>\n" +
    "                                        <div class=\"dine green-text\">\n" +
    "                                            <i class=\"fa fa-cutlery\"></i>\n" +
    "                                            <span>DINE IN</span>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"online green-text\">\n" +
    "                                            <i class=\"fa fa-wifi\"></i>\n" +
    "                                            <span>ONLINE ORDER</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"coupon-points\">40 points</div>\n" +
    "                                </div>\n" +
    "                                <div class=\"coupon-num\">2 <span>Coupons left</span><i class=\"fa fa-angle-right\"></i></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div ng-include=\"'customer/restaurants/views/specials.view.tpl.html'\"></div>\n" +
    "                </div>\n" +
    "                &lt;!&ndash; repetetive element ends&ndash;&gt;\n" +
    "                <div class=\"list-item clearfix\">\n" +
    "                    <div class=\"item-logo\"><img src=\"assets/images/customer/core/Restaurant_Logo1.png\" alt=\"\"></div>\n" +
    "                    <div class=\"content-block\">\n" +
    "                        <div class=\"basic-details\">\n" +
    "                            <div class=\"list-head clearfix\">\n" +
    "                                <h1>Galangal Supreme Restaurant</h1>\n" +
    "                                <h2 class=\"list-tag\">Thai and Japanese</h2>\n" +
    "                            </div>\n" +
    "                            <div class=\"list-address\">140 Jerrico Turnpike Syosset,NY,11791</div>\n" +
    "                            <div class=\"specific-details\">\n" +
    "                                <div class=\"specific-item\">\n" +
    "                                    <label for=\"\">Minimum delivery</label>\n" +
    "                                    <span class=\"fa fa-money\"></span>\n" +
    "                                    <div class=\"specific-value\">\n" +
    "                                        $20.00\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"specific-item\">\n" +
    "                                    <label for=\"\">Delivery time estimated</label>\n" +
    "                                    <span class=\"fa fa-clock-o\"></span>\n" +
    "                                    <div class=\"specific-value\">\n" +
    "                                        20 <span>min</span>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"specific-item\">\n" +
    "                                    <label for=\"\">Distance</label>\n" +
    "                                    <span class=\"fa fa-expand\"></span>\n" +
    "                                    <div class=\"specific-value\">\n" +
    "                                        3.2 <span>miles</span>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"specific-item\">\n" +
    "                                    <label for=\"\">Average pricing[<span>?</span>]</label>\n" +
    "                                    <span class=\"fa fa-dollar\"></span>\n" +
    "                                    <div class=\"specific-value\">\n" +
    "                                        <i class=\"fa fa-dollar active\"></i>\n" +
    "                                        <i class=\"fa fa-dollar active\"></i>\n" +
    "                                        <i class=\"fa fa-dollar active\"></i>\n" +
    "                                        <i class=\"fa fa-dollar\"></i>\n" +
    "                                        <i class=\"fa fa-dollar\"></i>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                                <div class=\"specific-item review-item\">\n" +
    "                                    <div class=\"review-heart\">4.5</div>\n" +
    "                                    <span class=\"fa fa-heart\">4.5</span>\n" +
    "                                    <div class=\"review-label\">13 reviews</div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"coupon-details clearfix\">\n" +
    "                                <div class=\"coupon-wrap\">\n" +
    "                                    <div class=\"coupon-green clearfix\">\n" +
    "                                        <div class=\"discount\"><span class=\"num\">5</span><span class=\"per\">%</span> Discount</div>\n" +
    "                                        <div class=\"dine green-text\">\n" +
    "                                            <i class=\"fa fa-cutlery\"></i>\n" +
    "                                            <span>DINE IN</span>\n" +
    "                                        </div>\n" +
    "                                        <div class=\"online green-text\">\n" +
    "                                            <i class=\"fa fa-wifi\"></i>\n" +
    "                                            <span>ONLINE ORDER</span>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"coupon-points\">40 points</div>\n" +
    "                                </div>\n" +
    "                                <div class=\"coupon-num\">2 <span>Coupons left</span><i class=\"fa fa-angle-right\"></i></div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    &lt;!&ndash;UI View for specials&ndash;&gt;\n" +
    "\n" +
    "                    <div ng-include=\"'customer/restaurants/views/specials.view.tpl.html'\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"list-item clearfix\">\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>-->\n" +
    "</div>\n" +
    "<div ng-if=\"loadingRest\">\n" +
    "    Loading.........................\n" +
    "</div>\n" +
    "");
}]);

angular.module("customer/restaurants/views/specials.view.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("customer/restaurants/views/specials.view.tpl.html",
    "<section class=\"photos-block\" ng-controller=\"Customer.Restaurants.Specials.CTRL\">\n" +
    "    <div class=\"banner\">Today's specials</div>\n" +
    "    <carousel interval=\"myInterval\" class=\"specials-carousel\">\n" +
    "        <slide ng-repeat=\"slide in slides\" active=\"slide.active\">\n" +
    "            <img ng-src=\"{{slide.image}}\">\n" +
    "            <div class=\"carousel-caption\">\n" +
    "                <h4>{{slide.head}}</h4>\n" +
    "            </div>\n" +
    "        </slide>\n" +
    "    </carousel>\n" +
    "</section>");
}]);
