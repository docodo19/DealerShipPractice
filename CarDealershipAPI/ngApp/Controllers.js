var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        //list cars
        var ListCarsController = (function () {
            function ListCarsController(carService, $modal) {
                this.carService = carService;
                this.$modal = $modal;
                this.cars = carService.listCars();
                this.makes = carService.listMakes();
                this.cars.push({ carMakeId: "", name: "All Cars" });
                console.log(this.cars);
            }
            ListCarsController.prototype.getCars = function () {
            };
            ListCarsController.prototype.removeCarModal = function (id) {
                this.$modal.open({
                    templateUrl: "/ngViews/delete.html",
                    controller: DialogController,
                    controllerAs: 'vm',
                    resolve: {
                        carId: function () { return id; }
                    }
                });
            };
            return ListCarsController;
        })();
        Controllers.ListCarsController = ListCarsController;
        //edit cars
        var EditCarController = (function () {
            function EditCarController($routeParams, carService, $location) {
                this.$routeParams = $routeParams;
                this.carService = carService;
                this.$location = $location;
                this.carToEdit = this.carService.getCar(this.$routeParams['id']);
            }
            EditCarController.prototype.editCar = function () {
                var _this = this;
                this.carService.save(this.carToEdit).then(function () {
                    _this.$location.path('/');
                });
            };
            return EditCarController;
        })();
        Controllers.EditCarController = EditCarController;
        //add cars
        var AddCarController = (function () {
            function AddCarController(carService, $location) {
                this.carService = carService;
                this.$location = $location;
                this.makes = carService.listMakes();
            }
            AddCarController.prototype.addCar = function () {
                var _this = this;
                this.carToAdd.carMakeId = this.selectedMake.id;
                this.carService.save(this.carToAdd)
                    .then(function () {
                    _this.$location.path('/');
                });
            };
            ;
            return AddCarController;
        })();
        Controllers.AddCarController = AddCarController;
        //delete cars
        var DeleteCarController = (function () {
            function DeleteCarController(carService, $location, $routeParams) {
                this.carService = carService;
                this.$location = $location;
                this.$routeParams = $routeParams;
                this.carToDelete = carService.getCar($routeParams['id']);
            }
            DeleteCarController.prototype.deleteCar = function () {
                var _this = this;
                this.carService.deleteCar(this.carToDelete.id)
                    .then(function () {
                    _this.$location.path('/');
                });
            };
            DeleteCarController.prototype.cancelDelete = function () {
                this.$location.path('/');
            };
            return DeleteCarController;
        })();
        Controllers.DeleteCarController = DeleteCarController;
        var DialogController = (function () {
            function DialogController(carService, $location, carId, $routeParams) {
                this.carService = carService;
                this.$location = $location;
                this.carId = carId;
                this.$routeParams = $routeParams;
                this.carToDelete = carService.getCar($routeParams['id']);
            }
            DialogController.prototype.deleteCar = function () {
                var _this = this;
                this.carService.deleteCar(this.carToDelete.id)
                    .then(function () {
                    _this.$location.path('/');
                });
            };
            DialogController.prototype.cancelDelete = function () {
                this.$location.path('/');
            };
            return DialogController;
        })();
        Controllers.DialogController = DialogController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {})); //Thanks Dan
//# sourceMappingURL=Controllers.js.map