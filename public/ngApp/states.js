angular.module('myApp', ['ui.router', 'ngRoute', 'ngResource'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
    .state('Home', {
        url: '/',
        templateUrl: '/ngApp/views/home.html',
        controller: 'HomeController'
    })
    .state('Users', {
        url: '/user',
        templateUrl: '/ngApp/views/user.html',
        controller: 'UserController'
    })
    .state('Widgets', {
        url: '/widget',
        templateUrl: '/ngApp/views/widget.html',
        controller: 'WidgetController'
    })
    .state('UserDetails', {
        url: '/user/:id',
        templateUrl: '/ngApp/views/userDetails.html',
        controller: 'UDetailController'
    })
    .state('WidgetDetails', {
        url: '/widget/:id',
        templateUrl: '/ngApp/views/widgetDetails.html',
        controller: 'WDetailController'
    })
    .state('Edit', {
        url: '/edit/:id',
        templateUrl: '/ngApp/views/edit.html',
        controller: 'EditController'
    });
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
}]);
