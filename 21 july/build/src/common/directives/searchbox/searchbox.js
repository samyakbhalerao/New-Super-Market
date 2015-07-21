/**
 * Created by Samyak on 26/05/2015.
 */

    (function(){
        "use strict";
        ApplicationConfiguration.registerModule('all-directives',[]);
        angular.module("all-directives").directive('searchBox',function(){
            var directive={};
            directive.restrict='E';
            directive.templateUrl='directives/searchbox/searchbar.template.tpl.html';
            return directive;
        });
    })();
