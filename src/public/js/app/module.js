angular.module('lok_web', ['ui.router']);

var app = angular.module('lok_web');
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/home');
    $locationProvider.html5Mode(true);

    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'Homepage/home.html',
            controller: 'HomepageController',
            controllerAs: 'ctrl'
        })

        .state('products', {
            url: '/products',
            templateUrl: 'products.html'
        })

        .state('services', {
            url: '/services',
            templateUrl: 'services.html'
        });
    }
]);