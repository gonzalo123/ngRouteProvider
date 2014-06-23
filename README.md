loading states according to json file

A simple angular application with one state 'home'
```js
angular.module('App', ['ui.router'])

    .config(function ($stateProvider, $urlRouterProvider, routerProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html'
            });

        $urlRouterProvider.otherwise('/home');
    })

    .controller('MainController', function ($scope, router) {
        $scope.reload = function() {
            router.setUpRoutes();
        };
    })
;
```

We define more states within a json file

```json
{
    "xxx": {
        "url": "/xxx",
        "templateUrl": "templates/xxx.html"
    },

    "yyy": {
        "url": "/yyy",
        "templateUrl": "templates/yyy.html"
    },

    "zzz": {
        "url": "/zzz",
        "templateUrl": "templates/zzz.html"
    }
}
```

and we load them using "Routing"
```js
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
```