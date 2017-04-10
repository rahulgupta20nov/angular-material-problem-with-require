require.config({
    waitSeconds: 600,
    paths: {
        /*Java Script Independent Library*/
        // 'jquery': '../libs/jquery/dist/jquery.min',
        /*Angular Dependency*/
        'jquery': '../libs/jquery/dist/jquery.min',
        'angular': 'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular.min',
        'ui-router': 'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.4.2/angular-ui-router.min',
        "angular-aria": "https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular-aria.min",
        "angular-animate": "https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular-animate.min",
        "angular-message": "https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.5/angular-messages.min",
        "angular-material": "https://cdnjs.cloudflare.com/ajax/libs/angular-material/1.1.3/angular-material.min",
            /*Angular couch-potato*/
        'angular-couch-potato': '../project-libs/angular-dynamic-load.min',
        /*load the module*/
        /*Load Essential Controller*/
        'base-modules': 'modules/base-modules',
        'SuperCtrl': 'controllers/SuperCtrl'
    },
    priority: ['angular'],
    shim: {
        'angular': {
            deps: [],
            exports: 'angular'
        },
        'angular-aria': {
            deps: ['angular']
        },
        'angular-animate': {
            deps: ['angular']
        },
        'angular-message': {
            deps: ['angular']
        },
        'angular-material': {
            deps: ['angular-animate', 'angular-aria', 'angular-message']
        },
        'ui-router': {
            deps: ['angular-material'],
            exports: 'ui-router'
        }
    }
});
// run is required to force the app to run, not because we need to interact
// with it.  Anything required here will by default be combined/minified by
// r.js if you use it.
require(['angular', 'app', 'app-init'], function(angular, app) {
    angular.element(document).ready(function() {
        angular.bootstrap(document, [app.name, function() {
            // for good measure, put ng-app on the html element
            // studiously avoiding jQuery because angularjs.org says we shouldn't
            // use it.  In real life, there are a ton of reasons to use it.
            // karma likes to have ng-app on the html element when using requirejs.
            angular.element(document).find('html').addClass('ng-app');
        }]);
    });
});
