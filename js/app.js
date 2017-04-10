/*For routing API call is not require to mention full URL path
 * Its add automatically
 * Like your API is:- "api/quoteAPI.php/fetchAllQuote"
 * not require to mention full path*/

var gUser = "";
var gAccessToken = "";

define(['angular', 'angular-couch-potato', 'ui-router'],
    function(angular, dynamicLoad) {
        /*Angular Setter*/
        var app = angular.module('myApp', ['ui.router', 'dynamic-ng-load', 'ngMaterial']);
        /*Angular Setter*/

        /*Config for html5mode enable*/
        // app.config(["$locationProvider", function($locationProvider) {
        //   if (device_value == 'other')
        //     $locationProvider.html5Mode(true);
        // }]);

        /*For Lazy loading configure jacktrade app in dynamicLoad Lib*/
        dynamicLoad.configureApp(app);

        /*Return Getter to all Controllers, Services, directives, filters, constants, values, providers, decorators, etc.
         * Very Important Statement*/
        app.controller('AppController', function() {

        });
        app.controller('RightCtrl', function($scope, $timeout, $mdSidenav, $log) {
            $scope.close = function() {
                $mdSidenav('right').close()
                    .then();
            };
            var sidenavHeight = $(window).height();
            $scope.contentHeight = sidenavHeight - 275;

            $scope.demoValue = [{
                name: 'Demo value 1',
                content: 'value1'
            }, {
                name: 'Demo value 2',
                content: 'value2'
            }, {
                name: 'Demo value 3',
                content: 'value3'
            }];
        });
        return app;
    }
);
