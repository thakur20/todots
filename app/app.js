var app;
(function (app) {
    var main = angular.module("myToDoApp", ['ngRoute', 'ngAnimate']);
    main.config(routeConfig);
    routeConfig.$inject = ["$routeProvider"];
    function routeConfig($routeProvider) {
        $routeProvider
            .when(" ", {
            templateUrl: 'app/items/itemsView.html',
            controller: 'ToDoListCtrl as todo'
        })
            .when("/items", {
            templateUrl: 'app/items/itemsView.html',
            controller: 'ToDoListCtrl as todo'
        })
            .when("/itemdetails", {
            templateUrl: '/app/items/itemDetailsView.html',
            controller: 'ToDoListCtrl as todo'
        })
            .otherwise("/items");
    }
})(app || (app = {}));
