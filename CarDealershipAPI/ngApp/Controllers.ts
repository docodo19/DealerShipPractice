namespace MyApp.Controllers {
    //list cars
    export class ListCarsController {
        public cars;
        public makes;
        public selectedMake;

        constructor(private carService: MyApp.Services.CarService,
            private $modal: angular.ui.bootstrap.IModalService) {
            this.cars = carService.listCars();
            this.makes = carService.listMakes();
            this.cars.push({ carMakeId: "", name: "All Cars" });

            console.log(this.cars);
        }
        public getCars() {
        }
        public removeCarModal(id) {
            this.$modal.open({
                templateUrl: "/ngViews/delete.html", 
                controller: DialogController,
                controllerAs: 'vm', //WHOHOOO!  :) 
                resolve: {
                    carId: () => id
                }
            });
        }
    }
    //edit cars
    export class EditCarController {
        public carToEdit;
        constructor(private $routeParams: ng.route.IRouteParamsService,
            private carService: MyApp.Services.CarService,
            private $location: ng.ILocationService) {
            this.carToEdit = this.carService.getCar(this.$routeParams['id']);
        }
        public editCar() {
            this.carService.save(this.carToEdit).then(() => {
                this.$location.path('/');
            });
        }
    }
    //add cars
    export class AddCarController {
        public carToAdd;
        public makes;
        public selectedMake;
        constructor(private carService: MyApp.Services.CarService,
            private $location: ng.ILocationService) {
            this.makes = carService.listMakes();
        }
        public addCar() {
            this.carToAdd.carMakeId = this.selectedMake.id;
            this.carService.save(this.carToAdd)
                .then(() => {
                    this.$location.path('/');
                });
        };
    }

    //delete cars
    export class DeleteCarController {
        public carToDelete;
        constructor(private carService: MyApp.Services.CarService,
            private $location: ng.ILocationService,
            private $routeParams: ng.route.IRouteParamsService) {
            this.carToDelete = carService.getCar($routeParams['id']);

        }
        public deleteCar() {
            this.carService.deleteCar(this.carToDelete.id)
                .then(() => {
                    this.$location.path('/');
                });
        }
        public cancelDelete() {
            this.$location.path('/');
        }
    }
    export class DialogController {
        public carToDelete;
        constructor(private carService: MyApp.Services.CarService,
            private $location: ng.ILocationService,
            public carId, 
            private $routeParams: ng.route.IRouteParamsService) {
            this.carToDelete = carService.getCar($routeParams['id']);

        }
        public deleteCar() {
            this.carService.deleteCar(this.carToDelete.id)
                .then(() => {
                    this.$location.path('/');
                });
        }
        public cancelDelete() {
            this.$location.path('/');
        }
    }
}//Thanks Dan