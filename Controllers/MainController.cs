using Newtonsoft.Json;
using PCS_Dashboard.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Objects;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PCS_Dashboard.Controllers
{
    public class MainController : Controller
    {
        // GET: Main
        public Entities dbEntities = new Entities();
        public ActionResult Index()
        {
            return View();
        }


        #region API Calls
        public string main_Result(string date2)
        {

            try
            {
                // var mainDashboardCount = dbEntities.PCS_Dashboard_1_Main(DateTime.Parse( date1), DateTime.Parse(date2)).ToList();
                var mainDashboardCount = dbEntities.PCS_Cummulative_Report(DateTime.Parse(date2)).ToList();



                return JsonConvert.SerializeObject(mainDashboardCount);
            }
            catch (Exception ex)
            {

                throw ex;
            }

        }
        public string MonthlySummary()
        {

            try
            {
                var mainDashboardCount = dbEntities.PCS_Dashboard_1_Main_Monthly().ToList();



                return JsonConvert.SerializeObject(mainDashboardCount);
            }
            catch (Exception ex)
            {

                throw ex;
            }

        }
        public string WeeklyReport(string date1, string date2)
        {

            try
            {
                var mainDashboardCount = dbEntities.PCS_Data_Weekly_Report_1(DateTime.Parse(date1), DateTime.Parse(date2)).ToList();



                return JsonConvert.SerializeObject(mainDashboardCount);
            }
            catch (Exception ex)
            {

                throw ex;
            }

        }
        public string Queries(string date1, string date2)
        {

            try
            {
                var mainDashboardCount = dbEntities.DataCleaningList(DateTime.Parse(date1), DateTime.Parse(date2)).ToList();



                return JsonConvert.SerializeObject(mainDashboardCount);
            }
            catch (Exception ex)
            {

                throw ex;
            }

        }

        public string DataCleaningIndicators(string date1, string date2)
        {

            try
            {
                var mainDashboardCount = dbEntities.DataCleaningIndicators(DateTime.Parse(date1), DateTime.Parse(date2)).ToList();



                return JsonConvert.SerializeObject(mainDashboardCount);
            }
            catch (Exception ex)
            {

                throw ex;
            }

        }

        public string Cluster(string cluster)
        {

            try
            {
                var mainDashboardCount = dbEntities.ViewByCluster(cluster).ToList();



                return JsonConvert.SerializeObject(mainDashboardCount);
            }
            catch (Exception ex)
            {

                throw ex;
            }

        }
        public string OverSelectedCluster()
        {

            try
            {
                var mainDashboardCount = dbEntities.OverSelectedCluster().ToList();



                return JsonConvert.SerializeObject(mainDashboardCount);
            }
            catch (Exception ex)
            {

                throw ex;
            }

        }

        public string SocialContactView(string date)
        {
            try
            {
                var mainSocial = dbEntities.PCS_SocialContactCheck(DateTime.Parse(date)).ToList();

                return JsonConvert.SerializeObject(mainSocial);
            }
            catch (Exception ex)
            {

                throw ex;
            }
            #endregion

        }
    }
}