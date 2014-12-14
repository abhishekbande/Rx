using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;

namespace LordGlobal.Rx.Models
{
    public class Login
    {
        [Required(ErrorMessage="Please enter user name")]
        [StringLength(100, ErrorMessage = "The user name must be at least 6 characters long.", MinimumLength = 6)]
        public string UserName { get; set; }               

        [Required(ErrorMessage = "Please enter password")]
        public string Password { get; set; }

        public long UserId { get; set; }
        public DateTime LastLoginDateTime { get; set; }
        public DateTime MemberCreationDateTime { get; set; }
        public string Status{ get; set; }
        public string UserRole { get; set; }

    }
}