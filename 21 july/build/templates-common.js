angular.module('templates-common', ['directives/availableFor/availablefor.template.tpl.html', 'directives/cart/cart.template.tpl.html', 'directives/dropdown/template.tpl.html', 'directives/redeem/template.tpl.html', 'directives/searchbox/searchbar.template.tpl.html', 'directives/sortBy/sortby.template.tpl.html']);

angular.module("directives/availableFor/availablefor.template.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("directives/availableFor/availablefor.template.tpl.html",
    "<div>This is availablefor Filter</div>");
}]);

angular.module("directives/cart/cart.template.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("directives/cart/cart.template.tpl.html",
    "<div>This is cart summary</div>");
}]);

angular.module("directives/dropdown/template.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("directives/dropdown/template.tpl.html",
    "<div class=\"dropdown-wrap clearfix\" ng-class=\"{'active': model.isOpen}\">\n" +
    "    <div class=\"filter-dropdown\" ng-click=\"model.isOpen = !model.isOpen\">\n" +
    "        <span  >{{model.selectedOption.text}}</span>\n" +
    "\n" +
    "        <i class=\"fa fa-angle-down pull-right\"></i>\n" +
    "    </div>\n" +
    "    <ul class=\"available-menu\">\n" +
    "        <li ng-repeat=\"option in model.options\" ng-click=\"onOptionClicked(option)\">{{option.text}}</li>\n" +
    "    </ul>\n" +
    "</div>");
}]);

angular.module("directives/redeem/template.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("directives/redeem/template.tpl.html",
    "<div class=\"modal-window redeem-modal\">\n" +
    "    <div class=\"modal-wrap\">\n" +
    "        <div class=\"modal-close\"><i class=\"fa fa-times\"></i></div>\n" +
    "        <div class=\"redeem-head\">\n" +
    "            <div class=\"head-text\">Confirm redeem your points</div>\n" +
    "            <p>We have selected the best coupon available for your online order</p>\n" +
    "        </div>\n" +
    "        <div class=\"redeem-body\">\n" +
    "            <div class=\"redeem-body-inner\">\n" +
    "                <div class=\"rest-head\">\n" +
    "                    <span class=\"name\">Galangal Restaurant</span> Thai and Japanese, 140 Jerrico Turnpike Syosset,NY,11791\n" +
    "                </div>\n" +
    "                <div class=\"redeem-coupons-wrap\">\n" +
    "                    <div class=\"discount-coupon\">\n" +
    "                        <div class=\"coupon-wrap\">\n" +
    "                            <div class=\"discount\">\n" +
    "                                <span class=\"num\">15</span><span class=\"per\">%</span> Discount\n" +
    "                            </div>\n" +
    "                            <div class=\"rest-type\">\n" +
    "                                <div class=\"dine-in\">\n" +
    "                                    <i class=\"fa fa-cutlery\"></i> DINE IN\n" +
    "                                </div>\n" +
    "                                <div class=\"online\">\n" +
    "                                    <i class=\"fa fa-wifi\"></i> ONLINE ORDER                                                               </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <label class=\"md-radio-label\">\n" +
    "                            <input type=\"radio\" name=\"redeem-radio\" checked />\n" +
    "                            <span class=\"md-radio-style\"></span>\n" +
    "                        </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"discount-coupon\">\n" +
    "                        <div class=\"coupon-wrap\">\n" +
    "                            <div class=\"discount\">\n" +
    "                                <span class=\"num\">10</span><span class=\"per\">%</span> Discount\n" +
    "                            </div>\n" +
    "                            <div class=\"rest-type\">\n" +
    "                                <div class=\"online\">\n" +
    "                                    <i class=\"fa fa-wifi\"></i> ONLINE ORDER                                                               </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <label class=\"md-radio-label\">\n" +
    "                            <input type=\"radio\" name=\"redeem-radio\" />\n" +
    "                            <span class=\"md-radio-style\"></span>\n" +
    "                        </label>\n" +
    "                    </div>\n" +
    "                    <div class=\"discount-coupon\">\n" +
    "                        <div class=\"coupon-wrap\">\n" +
    "                            <div class=\"discount\">\n" +
    "                                <span class=\"num\">5</span><span class=\"per\">%</span> Discount\n" +
    "                            </div>\n" +
    "                            <div class=\"rest-type\">\n" +
    "                                <div class=\"dine-in\">\n" +
    "                                    <i class=\"fa fa-cutlery\"></i> DINE IN\n" +
    "                                </div>\n" +
    "                                <div class=\"online\">\n" +
    "                                    <i class=\"fa fa-wifi\"></i> ONLINE ORDER                                                               </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <label class=\"md-radio-label\">\n" +
    "                            <input type=\"radio\" name=\"redeem-radio\" />\n" +
    "                            <span class=\"md-radio-style\"></span>\n" +
    "                        </label>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"redeem-footer\">\n" +
    "            <div class=\"redeem-info\">\n" +
    "                <div class=\"head\">You are about to redeem your 40 points for this coupon</div>\n" +
    "                <div class=\"remaining\">Total points after this redemption = <span>120 </span>points</div>\n" +
    "                <div class=\"transaction-id\">\n" +
    "                    TRANSACTION ID <span>02328992398928</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <button class=\"redeem-btn\">REDEEM</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-overlay\"></div><!-- adding class open on this will open the overlay -->");
}]);

angular.module("directives/searchbox/searchbar.template.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("directives/searchbox/searchbar.template.tpl.html",
    "<div>This is searchbar</div>");
}]);

angular.module("directives/sortBy/sortby.template.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("directives/sortBy/sortby.template.tpl.html",
    "<div class=\"sort-wrap clearfix\">\n" +
    "    <label for=\"\">SORT BY</label>\n" +
    "    <div class=\"dropdown-wrap sort-dropdown clearfix\">\n" +
    "       <!-- <dropdown model=\"model.sortByDropdown\" class=\"sort-trigger pull-left\"></dropdown>-->\n" +
    "        <div class=\"sort-caret caret-up\">\n" +
    "            <div class=\"caret-up active\"><i class=\"fa fa-caret-up\"></i></div>\n" +
    "            <div class=\"caret-down\"><i class=\"fa fa-caret-down\"></i></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"filters-touch-wrap\">\n" +
    "<div class=\"sort-wrap\">\n" +
    "    <div class=\"select-wrap\">\n" +
    "        <select name=\"\" id=\"\" class=\"filter-dropdown\">\n" +
    "            <option value=\"\">Discount</option>\n" +
    "            <option value=\"\">Delivery time</option>\n" +
    "            <option value=\"\">Distance</option>\n" +
    "            <option value=\"\">Minimum order</option>\n" +
    "            <option value=\"\">Average pricing</option>\n" +
    "            <option value=\"\">Rating</option>\n" +
    "            <option value=\"\">Restaurant name</option>\n" +
    "        </select>\n" +
    "    </div>\n" +
    "    <div class=\"sort-caret caret-up\">\n" +
    "        <div class=\"caret-up active\"><i class=\"fa fa-caret-up\"></i></div>\n" +
    "        <div class=\"caret-down\"><i class=\"fa fa-caret-down\"></i></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "</div>");
}]);
