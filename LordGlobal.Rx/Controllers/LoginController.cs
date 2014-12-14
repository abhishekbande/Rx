using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using LordGlobal.Rx.Models;
using LordGlobal.Rx.BC;

namespace LordGlobal.Rx.Controllers
{
    public class LoginController : Controller
    {
        //
        // GET: /Login/
        #region Object Initialization
        BusinessContext _objBusiness = new BusinessContext();
        #endregion

        [HttpGet]
        public ActionResult LoginPage()
        {          
            return View(new Login());
        }

        [HttpPost]
        public ActionResult LoginPage(Login loginData)
        {
            bool isLoginSuccess = false;
            //if Valid login data then proceed to check for authentication.
            if (ModelState.IsValid)
            {
                isLoginSuccess = _objBusiness.GetLoginDetails(loginData);
                //if Authentication is successful
                if (isLoginSuccess)
                {

                }
                // if Authentication failed
                else
                {
                    ViewBag.errMsg = "Invalid Credentials. Please try with correct credentials.";
                    return View(loginData);
                }
                return View();
            }
            //if invalid data then redirect to login page
            else
            {
                return View(loginData);
            }            
        }

    }
}
