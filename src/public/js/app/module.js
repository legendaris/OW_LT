angular.module('lok_web', ['ui.router']);

var app = angular.module('lok_web');

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/home');
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    // RULES
    $urlRouterProvider.when('/guides/', '/guides/maps');

    // STATES
    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: '/Homepage/home.html',
            controller: 'HomepageController',
            controllerAs: 'ctrl'
        })

        // GUIDES STATES
        .state('guides', {
            url: '/guides',
            abstract: true,
            template: '<ui-view/>',
        })
        .state('guides.maps', {
            url: '/maps',
            templateUrl: '/Guides/maps.html',
            controller: 'MapsGuidesController',
            controllerAs: 'ctrl'
        });
}
]);