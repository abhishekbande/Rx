using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MySql.Data.MySqlClient;
using LordGlobal.Rx.DAC;
using LordGlobal.Rx.DAC.Query;
using LordGlobal.Rx.Models;

namespace LordGlobal.Rx
{
    public class DataAccess
    {
        #region variables
        BaseDac baseDac = new BaseDac();
        #endregion

        #region Connections
        public MySqlConnection con = null;
        public MySqlCommand cmd = null;
        #endregion

        #region constructor
        /// <summary>
        /// DataAccess- This method is used to initialize the database connection object.
        /// </summary>
        public DataAccess()
        {
            con = baseDac.GetConnection();
        }
        #endregion

        #region Public Methods
        /// <summary>
        /// GetLoginDetails - This method is used to get the login details
        /// </summary>
        /// <param name="loginData">loginData</param>
        /// <returns>true/false</returns>
        public bool GetLoginDetails(Login loginDetails)
        {
            bool isSuccess = false;
            string query = Query.GET_LOGIN_DETAILS.ToString();

            try
            {
                con.Open();
                using (cmd = baseDac.getCommand(query, con))
                {
                    cmd.Parameters.Add("userName", MySqlDbType.String).Value = loginDetails.UserName;
                    var data = cmd.ExecuteReader();
                    if (data.Read())
                    {
                        //if user name and pasword are valid then fetch all the details from the database table
                        if (data["user_name"].ToString().ToUpper().Equals(loginDetails.UserName.ToUpper()) && data["password"].Equals(loginDetails.Password))
                        {
                            loginDetails.UserId = Convert.ToInt64(data["user_id"]);
                            loginDetails.UserRole = Convert.ToString(data["user_role"]);
                            loginDetails.LastLoginDateTime = Convert.ToDateTime(data["last_login_dt_tm"]);
                            loginDetails.MemberCreationDateTime = Convert.ToDateTime(data["member_creation_dt_tm"]);
                            loginDetails.Status = Convert.ToString(data["status"]);
                            isSuccess = true;                            
                        }
                    }
                    data.Close();
                }
            }
            catch (Exception ex)
            {
                throw new Exception("RX00001: Process failed while retrieving data from database.:", ex);
            }
            finally
            {
                con.Close();
            }
            return isSuccess;
        }
        #endregion
    }
}