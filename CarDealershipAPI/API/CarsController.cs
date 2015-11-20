using CarDealershipAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CarDealershipAPI.API
{
    public class CarsController : ApiController
    {
        private ApplicationDbContext _db = new ApplicationDbContext();

        // GET: api/Cars
        public IEnumerable<Car> Get()
        {
            return _db.Cars.ToList();
        }

        // GET: api/Cars/5
        public Car Get(int id)
        {
            return _db.Cars.Find(id);
        }

<<<<<<< HEAD
=======
        public HttpResponseMessage Post(Car car)
        {
            if (ModelState.IsValid)
            {
                if (car.Id == 0)
                {
                    _db.Cars.Add(car);
                    _db.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.Created, car);
                }
                else
                {
                    var original = _db.Cars.Find(car.Id);
                    original.CarMakeId = car.CarMakeId;
                    original.FullDescription = car.FullDescription;
                    original.ImageUrl = car.ImageUrl;
                    original.Price = car.Price;
                    original.ShortDescription = car.ShortDescription;
                    
                    _db.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, car);
                }
            }
            return Request.CreateErrorResponse(HttpStatusCode.BadRequest, this.ModelState);
        }

        public HttpResponseMessage Delete(int id)
        {
            var car = _db.Cars.Find(id);
            if (car == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }
            _db.Cars.Remove(car);
            _db.SaveChanges();
            return Request.CreateResponse(HttpStatusCode.OK);
        }


>>>>>>> d13f471b7b4417ed517cde658ec1fd9c2d140d41
    }
}
