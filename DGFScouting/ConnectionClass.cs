using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Configuration;
using System.Data;

namespace DGFScouting
{
    public static class ConnectionClass
    {
        // Private instance variables for both SQLConnection and SQLCommand
        private static SqlConnection cn;
        private static SqlCommand cmd;

        // ConnectionClass() contains database connection to local SQL database
        static ConnectionClass()
        {
            // Update this string
            cn = new SqlConnection(@"Data Source=DESKTOP-P96N1IO\SQLEXPRESS;initial Catalog=Puckager;Integrated Security=true;");
        }

        // ValidateUser() takes two arguments, connects to the database, attempts to validate entered credentials in Account table and returns integer
        public static int ValidateUser(string userName, string password)
        {
            string query = "SELECT COUNT(1) FROM Account WHERE username=@username AND password=@password";
            cmd = new SqlCommand(query, cn);

            try
            {
                cn.Open();

                cmd.Parameters.AddWithValue("@username", userName);
                cmd.Parameters.AddWithValue("@password", password);

                int count = Convert.ToInt32(cmd.ExecuteScalar());
                return count;
            }

            catch
            {
                return 0;
            }

            finally
            {
                cn.Close();
            }
        }

        // RegisterUser() takes three arguments, connects to the database, attempts to enter new record into Account table and returns bool
        public static bool RegisterUser(string username, string password, string emailaddress)
        {

            string query = string.Format(@"Insert into Account (Username, Password, EmailAddress) VALUES ('{0}', '{1}', '{2}')", username, password, emailaddress);
            cmd = new SqlCommand(query, cn);

            try
            {
                cn.Open();
                cmd.ExecuteNonQuery();
                return true;
            }

            catch
            {
                return false;
            }

            finally
            {
                cn.Close();
            }
        }

        // DisplayRecruits() takes one argument, connects to the database, retrieves Recruit table and fills the ListView object
        public static void DisplayRecruits(System.Web.UI.WebControls.ListView listView)
        {
            try
            {
                string query = "Select * from Recruit";
                SqlDataAdapter sda = new SqlDataAdapter(query, cn);

                DataTable dt = new DataTable();
                listView.DataSource = dt;
                sda.Fill(dt);
                listView.DataBind();
            }

            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
            
        }


        // AddRecruit() takes elevem arguments, connects to the database, attempts to enter new record into Recruit table and returns bool
        public static bool AddRecruit(string firstName, string lastName, string contactNumber, string emailAddress, int birthyear, int graduationYear, string currentTeam, string position, string mothersName, string fathersName, string recruitStatus, string dateAdded)
        {
            string query = string.Format(@"Insert into Recruit (FirstName, LastName, ContactNumber, EmailAddress, BirthYear, GraduationYear, CurrentTeam, JerseyNumber, Position, MothersName, FathersName, Status, DateAdded)
                                        VALUES ('{0}', '{1}', '{2}', '{3}', '{4}', '{5}', '{6}', '{7}', '{8}', '{9}', '{10}', '{11}', '{12}' )", firstName, lastName, contactNumber, emailAddress, birthyear, graduationYear, currentTeam, position, mothersName, fathersName, recruitStatus, dateAdded);

            cmd = new SqlCommand(query, cn);

            try
            {
                cn.Open();
                cmd.ExecuteNonQuery();
                return true;
            }

            catch
            {
                return false;
            }

            finally
            {
                cn.Close();
            }
        }
    }}