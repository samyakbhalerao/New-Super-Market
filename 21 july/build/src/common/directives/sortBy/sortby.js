/**
 * Created by Samyak on 07/06/2015.
 */
(function(){
    "use strict";
    ApplicationConfiguration.registerModule('all-directives',[]);
    angular.module("all-directives").directive('sortBy',function(){
        var directive={};
        directive.restrict='E';
        directive.templateUrl='directives/sortBy/sortby.template.tpl.html';
        return directive;
    });
})();