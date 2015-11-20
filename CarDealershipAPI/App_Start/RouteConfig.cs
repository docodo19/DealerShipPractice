using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace CarDealershipAPI
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

<<<<<<< HEAD
			//routes.MapRoute(
			//    name: "Default",
			//    url: "{controller}/{action}/{id}",
			//    defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
			//);

			routes.MapRoute(
							 name: "Application",
							 url: "{*url}",
							 defaults: new { controller = "Home", action = "Index" }
					 );
		}
=======
            routes.MapRoute(
                name: "Default",
                url: "{*url}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
>>>>>>> d13f471b7b4417ed517cde658ec1fd9c2d140d41
    }
}
