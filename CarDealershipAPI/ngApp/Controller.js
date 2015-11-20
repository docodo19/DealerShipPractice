var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        // List Cars
        var ListCarsController = (function () {
            function ListCarsController(carService, $routeParams, $uibModal) {
                this.$routeParams = $routeParams;
                this.$uibModal = $uibModal;
                this.makes = carService.listMakes();
                this.cars = carService.listCars();
                this.cars.push({ carMakeId: "", name: "All Cars" });
            }
            ListCarsController.prototype.getCars = function () {
            };
            ListCarsController.prototype.listCars = function (makeObj) {
                this.selectedMake = makeObj.id;
                //console.log(make.id);
            };
            ListCarsController.prototype.addCar = function (id) {
                this.$uibModal.open({
                    templateUrl: '/ngViews/add.html',
                    controller: DialogController,
                    controllerAs: 'vm',
                    size: 'lg'
                });
            };
            return ListCarsController;
        })();
        Controllers.ListCarsController = ListCarsController;
        //angular.module("MyApp").controller("ListCarsController", ListCarsController);
        // Modal Dialogs
        var DialogController = (function () {
            function DialogController(carService, $uibModalInstance, $location) {
                this.carService = carService;
                this.$uibModalInstance = $uibModalInstance;
                this.$location = $location;
            }
            DialogController.prototype.cancel = function () {
                this.$uibModalInstance.dismiss();
                this.$location.path('/');
            };
            return DialogController;
        })();
        Controllers.DialogController = DialogController;
        //angular.module("MyApp").controller("DialogController", DialogController);
        // Add Car
        var AddCarController = (function () {
            function AddCarController(carService, $uibModalInstance, $location) {
                this.carService = carService;
                this.$uibModalInstance = $uibModalInstance;
                this.$location = $location;
                this.makes = carService.listMakes();
            }
            AddCarController.prototype.setMake = function (makeObj) {
                this.selectedMake = makeObj.id;
                console.log(this.selectedMake);
            };
            AddCarController.prototype.addCar = function () {
                var _this = this;
                console.log(this.carToAdd);
                this.carService.save(this.carToAdd).then(function () {
                    console.log(_this.carToAdd);
                    _this.$uibModalInstance.dismiss();
                    _this.$location.path('/');
                    //this.guestbookService.listMessages();
                });
            };
            return AddCarController;
        })();
        Controllers.AddCarController = AddCarController;
        // Edit Car
        var EditCarController = (function () {
            function EditCarController() {
            }
            return EditCarController;
        })();
        Controllers.EditCarController = EditCarController;
        // Delete Car
        var DeleteCarController = (function () {
            function DeleteCarController() {
            }
            return DeleteCarController;
        })();
        Controllers.DeleteCarController = DeleteCarController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
