using PCS_Dashboard.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Objects;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PCS_Dashboard.Controllers
{
    public class HomeController : Controller
    {

        public Entities dbEntities = new Entities();
        public ActionResult Index()
        {
         
            

            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Report()
        {



            return View();
        }
        public ActionResult Queries()
        {
            return View();
        }
        public ActionResult Clusters()
        {
            return View();
        }
        public ActionResult DataCleaningIndicators()
        {
            return View();
        } public ActionResult OverSelectedCluster()
        {
            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult SocialContact()
        {
            return View();
        }


    }
}