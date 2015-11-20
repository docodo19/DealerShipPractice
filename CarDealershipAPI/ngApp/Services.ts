namespace MyApp.Services {

<<<<<<< HEAD
	export class CarService {

		private makes;
		private cars;

		constructor($resource: ng.resource.IResourceService) {

			// id, name
			this.makes = $resource('/api/makes');

			// id, carmakeid, imageurl, shortdescription, fulldescription, price
			this.cars = $resource('/api/cars/:id');
		}

		// List Car Makes
		public listMakes() {
			return this.makes.query();
		}

		// List Car Models
		public listCars() {
			return this.cars.query();
		}

		// Save (Add / Edit) Car
		public save(car) {
			return this.cars.save(car).$promise;
		}
		
		// Get Car Model - to edit
		public getCar(id) {
			return this.cars.get({ id: id });
		}

		// Delete Car Model - to delete
		public deleteCar(id) {
			return this.cars.get({ id: id }).$promise;
		}

	}

	angular.module("MyApp").service("carService", CarService);
=======
    export class CarService {
        public carsResource;
        public makes;

        constructor($resource: ng.resource.IResourceService) {
            this.carsResource = $resource('/api/cars/:id');
            this.makes = $resource('/api/makes');
        } 
        public listCars() {
            return this.carsResource.query();
        }

        public listMakes() {
            return this.makes.query();
        }

        

        public save(cars) {
            return this.carsResource.save(cars).$promise;
        }

        public getCar(id) {
            return this.carsResource.get({ id: id });
        }

        public deleteCar(id: number) {
            return this.carsResource.delete({ id: id }).$promise;
        }





    }
    angular.module("MyApp").service("carService", CarService);
>>>>>>> d13f471b7b4417ed517cde658ec1fd9c2d140d41

}