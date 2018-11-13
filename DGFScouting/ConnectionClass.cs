﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Configuration;
using System.Data;
using System.Diagnostics;

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
            cn = new SqlConnection(@"Data Source = THEGWYNS-PC\SQLEXPRESS; Initial Catalog = Puckager; Integrated Security = True; Connect Timeout = 30; Encrypt = False; TrustServerCertificate = False; ApplicationIntent = ReadWrite; MultiSubnetFailover = False");
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

        // AddRecruit() takes thirteen arguments, connects to the database, attempts to enter new record into Recruit table and returns bool
        public static bool AddRecruit(string firstName, string lastName, string contactNumber, string emailAddress, int birthyear, int graduationYear, string currentTeam, int jerseyNumber, string position, string mothersName, string fathersName, string recruitStatus, string dateAdded)
        {
            string query = string.Format(@"Insert into Recruit (FirstName, LastName, ContactNumber, EmailAddress, BirthYear, GraduationYear, CurrentTeam, JerseyNumber, Position, MothersName, FathersName, Status, DateAdded)
                                        VALUES ('{0}', '{1}', '{2}', '{3}', '{4}', '{5}', '{6}', '{7}', '{8}', '{9}', '{10}', '{11}', '{12}')", firstName, lastName, contactNumber, emailAddress, birthyear, graduationYear, currentTeam, jerseyNumber, position, mothersName, fathersName, recruitStatus, dateAdded);

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

        // 11/08/18_Heeyeong Kim
        // SearchRecruits() takes three argument, connects to the database, retrieves search results and return DataTable object
        public static DataTable SearchRecruits(string name, int birthYear, string position)
        {
           
            try
            {
                string query = "SELECT * FROM Recruit";
                if (!name.Equals("") || birthYear != 0 || !position.Equals("--Select--"))
                {
                     query = "SELECT * FROM Recruit WHERE";

                    if (!name.Equals(""))
                    {
                        query += " CONCAT(FirstName, LastName) LIKE '%" + name + "%'";
                    }
                    if (birthYear != 0)
                    {
                        if (!name.Equals(""))
                        {
                            query += " AND ";
                        }
                        query += " BirthYear=" + birthYear;
                    }
                    if (!position.Equals("--Select--"))
                    {
                        if (!name.Equals("") || birthYear != 0)
                        {
                            query += " AND ";
                        }
                        query += " Position='" + position + "'";
                    }
                }

                SqlDataAdapter sda = new SqlDataAdapter(query, cn);
                DataTable dt = new DataTable();

                sda.Fill(dt);

                return dt;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }


        // 11/11/18_Yayun Yang (Kim)
        // EditRecruit() takes 14 arguments, connects to the database, attempts to update existed record and returns bool
        public static bool EditRecruit(int id,string firstName, string lastName, string contactNumber, string emailAddress, int birthyear, int graduationYear, string currentTeam, int jerseyNumber, string position, string mothersName, string fathersName, string recruitStatus, string dateAdded)
        {
            string query = string.Format(@"Update Recruit SET FirstName='{1}', LastName='{2}', ContactNumber='{3}', EmailAddress='{4}', BirthYear='{5}', GraduationYear='{6}', CurrentTeam='{7}', 
                                            JerseyNumber='{8}', Position='{9}', MothersName='{10}', FathersName='{11}', Status='{12}', DateAdded='{13}' WHERE RecruitID = {0}", 
                                        id, firstName, lastName, contactNumber, emailAddress, birthyear, graduationYear, currentTeam, jerseyNumber, position, mothersName, fathersName, recruitStatus, dateAdded);

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

        // 11/11/18_Yayun Yang (Kim)
        //DisplayRecruit() takes 1 arguement, connects to the database, retrieves 1 row of Recruit table of selected RecruitID, and returns RecruitClass object.
        public static RecruitClass DisplayRecruit(int id)
        {
            RecruitClass recruit = new RecruitClass();
            string query = string.Format(@"SELECT * FROM Recruit WHERE RecruitID=" + id);

            cmd = new SqlCommand(query, cn);
            try
            {
                cn.Open();
                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    recruit.FirstName = reader[1].ToString();
                    recruit.LastName = reader[2].ToString();
                    recruit.ContactNumber = reader[3].ToString();
                    recruit.EmailAddress = reader[4].ToString();
                    recruit.Birthyear= Convert.ToInt32(reader[5]);
                    recruit.GraduationYear = Convert.ToInt32(reader[6]);
                    recruit.CurrentTeam = reader[7].ToString();
                    recruit.JerseyNumber = Convert.ToInt32(reader[8]);
                    recruit.Position = reader[9].ToString();
                    recruit.MothersName = reader[10].ToString();
                    recruit.FathersName  = reader[11].ToString();
                    recruit.Status = reader[12].ToString();
                    recruit.DateAdded = Convert.ToDateTime(reader[13]);
                }
                reader.Close();
            }
            catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }
            finally
            {
                cn.Close();
            }
            return recruit;
        }
    }
}