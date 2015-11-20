namespace MyApp.Controllers {
	
	// List Cars
	export class ListCarsController {

		public makes;
		public cars;
		public selectedMake;

		constructor(carService: MyApp.Services.CarService,
			private $routeParams: ng.route.IRouteParamsService,
			private $uibModal: angular.ui.bootstrap.IModalService) {
			this.makes = carService.listMakes();
			this.cars = carService.listCars();

			this.cars.push({ carMakeId: "", name: "All Cars" });
		}

		public getCars() {
			
		}

		public listCars(makeObj) {
			this.selectedMake = makeObj.id;
			//console.log(make.id);
		}

		public addCar(id) {
			this.$uibModal.open({
				templateUrl: '/ngViews/add.html',
				controller: DialogController,
				controllerAs: 'vm',
				size: 'lg'
			});
		}

		//public deleteCar(id) {
		//	this.$uibModal.open({
		//		templateUrl: '/ngViews/delete.html',
		//		controller: DialogController,
		//		controllerAs: 'vm',
		//		resolve: {
		//			carID: () => id
		//		},
		//		size: 'lg'
		//	});
		//}

	}

	//angular.module("MyApp").controller("ListCarsController", ListCarsController);

	// Modal Dialogs
	export class DialogController {
		public carToDelete;

		constructor(private carService: MyApp.Services.CarService,
			private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance,
			private $location: ng.ILocationService) {
			
		}

		public cancel() {
			this.$uibModalInstance.dismiss();
			this.$location.path('/');
		}

	}

	//angular.module("MyApp").controller("DialogController", DialogController);

	// Add Car
	export class AddCarController {
		public carToAdd;
		public selectedMake;
		public makes;

		constructor(private carService: MyApp.Services.CarService,
			private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance,
			private $location: ng.ILocationService) {	
				this.makes = carService.listMakes();
		}

		public setMake(makeObj) {
			this.selectedMake = makeObj.id;
			console.log(this.selectedMake);
		}

		public addCar() {
			console.log(this.carToAdd);
			this.carService.save(this.carToAdd).then(() => {
				console.log(this.carToAdd);
				this.$uibModalInstance.dismiss();
				this.$location.path('/');
				//this.guestbookService.listMessages();
			});
		}

	}

	// Edit Car
	export class EditCarController {

	}

	// Delete Car
	export class DeleteCarController {

	}

}