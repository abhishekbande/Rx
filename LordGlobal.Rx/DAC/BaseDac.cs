using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Configuration;
using System.Data.SqlClient;
using MySql.Data.MySqlClient;
namespace LordGlobal.Rx.DAC
{
    public class BaseDac
    {
        private string connectionString = ConfigurationManager.ConnectionStrings["Rx_DB"].ToString();

        public MySqlConnection GetConnection()
        {
            MySqlConnection con = null;
            try
            {
                con = new MySqlConnection(connectionString);
            }
            catch (System.Exception ex)
            {
                throw new Exception("Error while establishing connection with database.");
            }
            return con;
        }
        public MySqlCommand getCommand(string sql, MySqlConnection con)
        {
            MySqlCommand command = null;
            command = new MySqlCommand(sql, con);
            return command;
        }
    }
}