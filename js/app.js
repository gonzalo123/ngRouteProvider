'use strict'

angular.module('App', ['ui.router', 'Routing'])

    .config(function ($stateProvider, $urlRouterProvider, routerProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html'
            });

        $urlRouterProvider.otherwise('/home');

        routerProvider.setCollectionUrl('js/routeCollection.json');
    })

    .controller('MainController', function ($scope, router) {
        $scope.reload = function() {
            router.setUpRoutes();
        };
    })
;