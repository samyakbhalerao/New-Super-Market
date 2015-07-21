
angular.module('eTOe.customer.restaurants').controller('Customer.Restaurants.Meals.CTRL', ['$scope',function($scope) {
   console.log('meals controller loaded');
        $scope.model={};
    $scope.cusinesData=shareData.getSharedData();
        $scope.model.mealObj=[
            {
                'restaurant_name': 'OhmIndianRestaurant',
                'restaurant_id': 1,
                'delivery_options': [
                    'delivery',
                    'pickup'
                ],
                'latitude': 49.5134,
                'longitude': -72.58932,
                'restaurant_cuisines': [
                    'Indian'
                ],
                'cuisine_tags': [
                    'Tandoori',
                    'IndianRoll',
                    'Soups',
                    'SouthIndian',
                    'NorthIndian',
                    'Paratha'
                ],
                'address1': '15932ndAvenue',
                'city': 'NewYork',
                'state': 'NY',
                'zip': '10028',
                'phone_number': '(212)628-4500',
                'minimum_delivery': '$15',
                'del_time_est': '30-40minutes',
                'ready_time_est': '20-30minutes',
                'restaurant_rating': 4,
                'no_of_reviews': 13,
                'coupons_left': 5,
                'coupon_points': 40,
                'coupons_avalable': [
                    {
                        'coupon_logic_type': 'bucket_based',
                        'coupon_usage_type': [
                            'web',
                            'dinein'
                        ],
                        'dollar_value': '$5',
                        'coupons_left': 5,
                        'percentage_discount': '20%',
                        'coupon_points': 40,
                        'valid_for': 'anytime',
                        'marketingline': 'Get20%offon$25check',
                        'switch_limit': 25,
                        'preference': 1
                    },
                    {
                        'coupon_logic_type': 'default',
                        'coupon_usage_type': [
                            'web'
                        ],
                        'dollar_value': '',
                        'coupons_left': 'unlimited',
                        'percentage_discount': '10%',
                        'coupon_points': 40,
                        'valid_for': 'anytime',
                        'marketingline': 'Get10%offbydefault',
                        'switch_limit': 0,
                        'preference': 0
                    },
                    {
                        'coupon_logic_type': 'restaurant_based',
                        'coupon_usage_type': [
                            'dinein'
                        ],
                        'dollar_value': '',
                        'coupons_left': 'unlimited',
                        'percentage_discount': '20%',
                        'coupon_points': 45,
                        'valid_for': 'MondayandWednesdayDinner',
                        'marketingline': 'Get50%offonyourtotalcheck',
                        'switch_limit': 0,
                        'preference': 2
                    }
                ]
            },
            {
                'restaurant_name': 'OhmIndianRestaurant',
                'restaurant_id': 1,
                'delivery_options': [
                    'delivery',
                    'pickup'
                ],
                'latitude': 49.5134,
                'longitude': -72.58932,
                'restaurant_cuisines': [
                    'Indian'
                ],
                'cuisine_tags': [
                    'Tandoori',
                    'IndianRoll',
                    'Soups',
                    'SouthIndian',
                    'NorthIndian',
                    'Paratha'
                ],
                'address1': '15932ndAvenue',
                'city': 'NewYork',
                'state': 'NY',
                'zip': '10028',
                'phone_number': '(212)628-4500',
                'minimum_delivery': '$15',
                'del_time_est': '30-40minutes',
                'ready_time_est': '20-30minutes',
                'restaurant_rating': 4,
                'no_of_reviews': 13,
                'coupons_left': 5,
                'coupon_points': 40,
                'coupons_avalable': [
                    {
                        'coupon_logic_type': 'bucket_based',
                        'coupon_usage_type': [
                            'web',
                            'dinein'
                        ],
                        'dollar_value': '$5',
                        'coupons_left': 5,
                        'percentage_discount': '20%',
                        'coupon_points': 40,
                        'valid_for': 'anytime',
                        'marketingline': 'Get20%offon$25check',
                        'switch_limit': 25,
                        'preference': 1
                    },
                    {
                        'coupon_logic_type': 'default',
                        'coupon_usage_type': [
                            'web'
                        ],
                        'dollar_value': '',
                        'coupons_left': 'unlimited',
                        'percentage_discount': '10%',
                        'coupon_points': 40,
                        'valid_for': 'anytime',
                        'marketingline': 'Get10%offbydefault',
                        'switch_limit': 0,
                        'preference': 0
                    },
                    {
                        'coupon_logic_type': 'restaurant_based',
                        'coupon_usage_type': [
                            'dinein'
                        ],
                        'dollar_value': '',
                        'coupons_left': 'unlimited',
                        'percentage_discount': '20%',
                        'coupon_points': 45,
                        'valid_for': 'MondayandWednesdayDinner',
                        'marketingline': 'Get50%offonyourtotalcheck',
                        'switch_limit': 0,
                        'preference': 2
                    }
                ]
            },
            {
                'restaurant_name': 'OhmIndianRestaurant',
                'restaurant_id': 1,
                'delivery_options': [
                    'delivery',
                    'pickup'
                ],
                'latitude': 49.5134,
                'longitude': -72.58932,
                'restaurant_cuisines': [
                    'Indian'
                ],
                'cuisine_tags': [
                    'Tandoori',
                    'IndianRoll',
                    'Soups',
                    'SouthIndian',
                    'NorthIndian',
                    'Paratha'
                ],
                'address1': '15932ndAvenue',
                'city': 'NewYork',
                'state': 'NY',
                'zip': '10028',
                'phone_number': '(212)628-4500',
                'minimum_delivery': '$15',
                'del_time_est': '30-40minutes',
                'ready_time_est': '20-30minutes',
                'restaurant_rating': 4,
                'no_of_reviews': 13,
                'coupons_left': 5,
                'coupon_points': 40,
                'coupons_avalable': [
                    {
                        'coupon_logic_type': 'bucket_based',
                        'coupon_usage_type': [
                            'web',
                            'dinein'
                        ],
                        'dollar_value': '$5',
                        'coupons_left': 5,
                        'percentage_discount': '20%',
                        'coupon_points': 40,
                        'valid_for': 'anytime',
                        'marketingline': 'Get20%offon$25check',
                        'switch_limit': 25,
                        'preference': 1
                    },
                    {
                        'coupon_logic_type': 'default',
                        'coupon_usage_type': [
                            'web'
                        ],
                        'dollar_value': '',
                        'coupons_left': 'unlimited',
                        'percentage_discount': '10%',
                        'coupon_points': 40,
                        'valid_for': 'anytime',
                        'marketingline': 'Get10%offbydefault',
                        'switch_limit': 0,
                        'preference': 0
                    },
                    {
                        'coupon_logic_type': 'restaurant_based',
                        'coupon_usage_type': [
                            'dinein'
                        ],
                        'dollar_value': '',
                        'coupons_left': 'unlimited',
                        'percentage_discount': '20%',
                        'coupon_points': 45,
                        'valid_for': 'MondayandWednesdayDinner',
                        'marketingline': 'Get50%offonyourtotalcheck',
                        'switch_limit': 0,
                        'preference': 2
                    }
                ]
            }
        ];

    }
]);
