'use strict'

angular.module('Routing', ['ui.router'])
    .provider('router', function ($stateProvider) {

        var urlCollection;

        this.$get = function ($http, $state) {
            return {
                setUpRoutes: function () {
                    $http.get(urlCollection).success(function (collection) {
                        for (var routeName in collection) {
                            if (!$state.get(routeName)) {
                                $stateProvider.state(routeName, collection[routeName]);
                            }
                        }
                    });
                }
            }
        };

        this.setCollectionUrl = function (url) {
            urlCollection = url;
        }
    })

    .run(function (router) {
        router.setUpRoutes();
    });