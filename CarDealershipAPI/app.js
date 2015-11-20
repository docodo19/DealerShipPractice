var MyApp;
(function (MyApp) {
    angular.module("MyApp", ["ngRoute", "ngResource", "ui.bootstrap"])
        .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
            templateUrl: '/ngViews/list.html',
            controller: MyApp.Controllers.ListCarsController,
            controllerAs: 'vm'
        })
            .when("/add", {
            templateUrl: '/ngViews/add.html',
            controller: MyApp.Controllers.AddCarController,
            controllerAs: 'vm' })
            .when("/edit/:id", {
            templateUrl: '/ngViews/edit.html',
            controller: MyApp.Controllers.EditCarController,
            controllerAs: 'vm' })
            .when("/delete/:id", {
            templateUrl: '/ngViews/delete.html',
            controller: MyApp.Controllers.DeleteCarController,
            controllerAs: 'vm' })
            .otherwise("/");
        $locationProvider.html5Mode(true);
    });
})(MyApp || (MyApp = {}));
//# sourceMappingURL=app.js.map