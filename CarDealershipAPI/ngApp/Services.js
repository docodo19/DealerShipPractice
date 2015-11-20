var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var CarService = (function () {
            function CarService($resource) {
<<<<<<< HEAD
                // id, name
                this.makes = $resource('/api/makes');
                // id, carmakeid, imageurl, shortdescription, fulldescription, price
                this.cars = $resource('/api/cars/:id');
            }
            // List Car Makes
            CarService.prototype.listMakes = function () {
                return this.makes.query();
            };
            // List Car Models
            CarService.prototype.listCars = function () {
                return this.cars.query();
            };
            // Save (Add / Edit) Car
            CarService.prototype.save = function (car) {
                return this.cars.save(car).$promise;
            };
            // Get Car Model - to edit
            CarService.prototype.getCar = function (id) {
                return this.cars.get({ id: id });
            };
            // Delete Car Model - to delete
            CarService.prototype.deleteCar = function (id) {
                return this.cars.get({ id: id }).$promise;
=======
                this.carsResource = $resource('/api/cars/:id');
                this.makes = $resource('/api/makes');
            }
            CarService.prototype.listCars = function () {
                return this.carsResource.query();
            };
            CarService.prototype.listMakes = function () {
                return this.makes.query();
            };
            CarService.prototype.save = function (cars) {
                return this.carsResource.save(cars).$promise;
            };
            CarService.prototype.getCar = function (id) {
                return this.carsResource.get({ id: id });
            };
            CarService.prototype.deleteCar = function (id) {
                return this.carsResource.delete({ id: id }).$promise;
>>>>>>> d13f471b7b4417ed517cde658ec1fd9c2d140d41
            };
            return CarService;
        })();
        Services.CarService = CarService;
        angular.module("MyApp").service("carService", CarService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
<<<<<<< HEAD
=======
//# sourceMappingURL=Services.js.map
>>>>>>> d13f471b7b4417ed517cde658ec1fd9c2d140d41
