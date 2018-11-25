using System;
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
            cn = new SqlConnection(@"Data Source=DESKTOP-0E9HL0F\SQLEXPRESS2017;Initial Catalog=PuckagerDB;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
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
            // if there's the same username in DB, throw an exception
            if (CheckUserNameDuplicate(username))
            {
                throw new Exception("The same user name already exists");
            }

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

        // 11/11/18 Minseok Choi
        /// <summary>
        /// DisplayAccounts() takes 1 argument, connects to the database, retrieves Recruit table and fills the ListView object
        /// </summary>
        /// <param name="listView"></param>
        public static void DisplayAccounts(System.Web.UI.WebControls.ListView listView)
        {
            try
            {
                string query = "Select * from Account";
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


        // 11/11/18 Minseok Choi
        /// <summary>
        /// GetAccount() takes 5 arguments, connects to the database, attempts to return the specified account properties through out string params
        /// </summary>
        /// <param name="accountID"></param>
        /// <param name="username"></param>
        /// <param name="password"></param>
        /// <param name="emailAddress"></param>
        /// <param name="accountType"></param>
        /// <returns></returns>
        public static bool GetAccount(string accountID, out string username, out string password, out string emailAddress, out string accountType)
        {
            bool isSucceeded = false;
            username = "";
            password = "";
            emailAddress = "";
            accountType = "";

            string query = string.Format(@"SELECT * FROM Account WHERE AccountID = '{0}'", accountID);
            cmd = new SqlCommand(query, cn);

            cn.Open();
            SqlDataReader sda;
            sda = cmd.ExecuteReader();

            try
            {
                if (sda.Read())
                {
                    username = sda[1].ToString();
                    password = sda[2].ToString();
                    emailAddress = sda[3].ToString();
                    accountType = sda[4].ToString();
                }
            }
            finally
            {
                sda.Close();
                cn.Close();
            }

            return isSucceeded;
        }

        // 11/11/18 Minseok Choi
        /// <summary>
        /// AddAccount() takes 4 arguments, connects to the database, attempts to enter new record into Account table and returns bool
        /// </summary>
        /// <param name="username"></param>
        /// <param name="password"></param>
        /// <param name="emailaddress"></param>
        /// <param name="accountType"></param>
        /// <returns></returns>
        public static bool AddAccount(string username, string password, string emailaddress, AccountType accountType)
        {
            // if there's the same username in DB, throw an exception
            if (CheckUserNameDuplicate(username))
            {
                throw new Exception("The same user name already exists");
            }

            string addQuery = string.Format(@"Insert into Account (Username, Password, EmailAddress, AccountType)
                VALUES ('{0}', '{1}', '{2}', '{3}')", username, password, emailaddress, (int)accountType);
            cmd = new SqlCommand(addQuery, cn);

            bool isSucceeded = false;

            try
            {
                cn.Open();
                cmd.ExecuteNonQuery();
                isSucceeded = true;
            }
            catch (Exception e)
            {
                throw e;
            }
            finally
            {
                cn.Close();
            }
            return isSucceeded;
        }

        // 11/11/18 Minseok Choi
        // Update an Account in DB
        /// <summary>
        /// UpdateAccount() takes 5 argument, connects to the database, update an existing account with the given params
        /// </summary>
        /// <param name="accountId"></param>
        /// <param name="username"></param>
        /// <param name="password"></param>
        /// <param name="emailaddress"></param>
        /// <param name="accountType"></param>
        /// <returns></returns>
        public static bool UpdateAccount(string accountId, string username, string password, string emailaddress, AccountType accountType)
        {
            // if there's the same username in DB, throw an exception
            if (CheckUserNameDuplicate(username))
            {
                string crtUserName = "";
                string currentUsernameQuery = string.Format(@"SELECT UserName FROM Account WHERE AccountID = '{0}'", accountId);
                cmd = new SqlCommand(currentUsernameQuery, cn);
                try
                {
                    cn.Open();
                    crtUserName = cmd.ExecuteScalar().ToString();
                }
                finally
                {
                    cn.Close();
                }

                // check whether username will not be changed
                if (crtUserName != username)
                {
                    throw new Exception("The same user name already exists");
                }
            }

            string updateQuery = string.Format(@"UPDATE Account SET UserName = '{0}',
                Password = '{1}', EmailAddress = '{2}', AccountType = '{3}' WHERE AccountID = '{4}'",
                username, password, emailaddress, (int)accountType, accountId);
            cmd = new SqlCommand(updateQuery, cn);

            bool isSuccess = false;

            try
            {
                cn.Open();
                cmd.ExecuteNonQuery();
                isSuccess = true;
            }
            catch (Exception e)
            {
                throw e;
            }
            finally
            {
                cn.Close();
            }
            return isSuccess;
        }

        // 11/11/18 Minseok Choi
        // Delete an Account in DB
        /// <summary>
        /// DeleteAccount() takes 1 string type argument for an AccountID
        /// </summary>
        /// <param name="accountID"></param>
        /// <returns></returns>
        public static bool DeleteAccount(string accountID)
        {
            string deleteQuery = string.Format(@"DELETE Account WHERE AccountID = {0}", accountID);
            cmd = new SqlCommand(deleteQuery, cn);

            bool isSucceeded = false;

            try
            {
                cn.Open();
                cmd.ExecuteNonQuery();
                isSucceeded = true;
            }
            finally
            {
                cn.Close();
            }
            return isSucceeded;
        }

        // 11/11/18 Minseok Choi
        /// <summary>
        /// If the username exists in DB, return true, otherwise return false
        /// </summary>
        /// <param name="username"></param>
        /// <returns></returns>
        public static bool CheckUserNameDuplicate(string username)
        {
            // find duplicate username
            string foundUserName = null;
            string findSameUserName = string.Format(@"SELECT * FROM Account WHERE UserName = '{0}'", username);
            cmd = new SqlCommand(findSameUserName, cn);

            cn.Open();
            SqlDataReader sameUserNameReader;
            sameUserNameReader = cmd.ExecuteReader();

            try
            {
                if (sameUserNameReader.Read())
                {
                    foundUserName = Convert.ToString(sameUserNameReader[0]);
                }
            }
            finally
            {
                sameUserNameReader.Close();
            }

            cn.Close();

            if (foundUserName != null)
                return true;
            else
                return false;
        }

        // 11/24/18 Minseok Choi
        public static bool GetUserIdAndAccountType(string userName, string password, out string userId, out string accountType)
        {
            bool isSucceeded = false;
            userId = "";
            accountType = ""; // default


            string query = "SELECT AccountID, AccountType FROM Account WHERE username=@username AND password=@password";
            cmd = new SqlCommand(query, cn);

            try
            {
                cn.Open();
                cmd.Parameters.AddWithValue("@username", userName);
                cmd.Parameters.AddWithValue("@password", password);

                SqlDataReader reader = cmd.ExecuteReader();
                if (reader.Read())
                {
                    userId = reader[0].ToString();
                    accountType = reader[1].ToString();
                    isSucceeded = true;
                }
            }
            finally
            {
                cn.Close();
            }
            return isSucceeded;
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

        // 11/22/18_Heeyeong Kim
        public static DataTable DisplayReport(System.Web.UI.WebControls.ListView listView, int id, string table)
        {
            try
            {
                string query = string.Format(@"SELECT * FROM " + table + " WHERE RecruitID=" + id);
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
        public static bool EditRecruit(int id, string firstName, string lastName, string contactNumber, string emailAddress, int birthyear, int graduationYear, 
            string currentTeam, int jerseyNumber, string position, string mothersName, string fathersName, string recruitStatus, string dateAdded)
        {
            string query = string.Format(@"Update Recruit SET FirstName='{1}', LastName='{2}', ContactNumber='{3}', EmailAddress='{4}', 
                                            BirthYear='{5}', GraduationYear='{6}', CurrentTeam='{7}', JerseyNumber='{8}', Position='{9}', 
                                            MothersName='{10}', FathersName='{11}', Status='{12}', DateAdded='{13}' WHERE RecruitID = {0}",
                                        id, firstName, lastName, contactNumber, emailAddress, birthyear, graduationYear, currentTeam, jerseyNumber, 
                                        position, mothersName, fathersName, recruitStatus, dateAdded);

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
            string query = "SELECT * FROM Recruit WHERE RecruitID=@Id";
            //SqlDataAdapter sda = new SqlDataAdapter(query, cn);
            cmd = new SqlCommand(query, cn);
            try
            {
                cn.Open();
                cmd.Parameters.AddWithValue("@Id", id);

                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    recruit.FirstName = reader[1].ToString();
                    recruit.LastName = reader[2].ToString();
                    recruit.ContactNumber = reader[3].ToString();
                    recruit.EmailAddress = reader[4].ToString();
                    recruit.Birthyear = Convert.ToInt32(reader[5]);
                    recruit.GraduationYear = Convert.ToInt32(reader[6]);
                    recruit.CurrentTeam = reader[7].ToString();
                    recruit.JerseyNumber = Convert.ToInt32(reader[8]);
                    recruit.Position = reader[9].ToString();
                    recruit.MothersName = reader[10].ToString();
                    recruit.FathersName = reader[11].ToString();
                    recruit.Status = reader[12].ToString();
                    recruit.DateAdded = Convert.ToDateTime(reader[13]);
                }
                reader.Close();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
            finally
            {
                cn.Close();
            }
            return recruit;
        }

        // 11/23/2018
        /// <summary>
        /// get a recruit's firstName and lastName with their recruitId
        /// </summary>
        /// <param name="recruitId"></param>
        /// <param name="firstName"></param>
        /// <param name="lastName"></param>
        /// <returns></returns>
        public static bool GetRecruitName(string recruitId, out string firstName, out string lastName)
        {
            bool isSucceeded = false;
            firstName = "";
            lastName = "";

            string query = string.Format(@"SELECT * FROM Recruit WHERE RecruitID = '{0}'", recruitId);
            cmd = new SqlCommand(query, cn);

            cn.Open();
            SqlDataReader sda;
            sda = cmd.ExecuteReader();

            try
            {
                if (sda.Read())
                {
                    firstName = sda[1].ToString();
                    lastName = sda[2].ToString();
                }
            }
            finally
            {
                sda.Close();
            }

            cn.Close();

            return isSucceeded;
        }


        // 11/11/23 Minseok Choi
        /// <summary>
        /// AddGoalieScoutingReport() takes 12 arguments, connects to the database, attempts to enter new record into PlayerScoutingReport table and returns bool
        /// </summary>
        /// <param name="recruitId"></param>
        /// <param name="accountId"></param>
        /// <param name="skating"></param>
        /// <param name="individualOffensiveSkills"></param>
        /// <param name="individualDefensiveSkills"></param>
        /// <param name="offensiveTeamPlay"></param>
        /// <param name="defensiveTeamPlay"></param>
        /// <param name="hockeySense"></param>
        /// <param name="strengthPower"></param>
        /// <param name="workEthic"></param>
        /// <param name="overallRanking"></param>
        /// <param name="notes"></param>
        /// <returns></returns>
        public static bool AddPlayerScoutingReport(string recruitId, string accountId, string skating, string individualOffensiveSkills,
            string individualDefensiveSkills, string offensiveTeamPlay, string defensiveTeamPlay, string hockeySense, string strengthPower,
            string workEthic, string overallRanking, string notes)
        {
            string addQuery = string.Format(@"INSERT INTO PlayerScoutingReport (
                RecruitID, AccountID, Skating, IndividualOffensiveSkills, IndividualDefensiveSkills, OffensiveTeamPlay,
                DefensiveTeamPlay, HockeySense, StrengthPower, WorkEthic, OverallRanking, Notes, ScoutingReportDate) 
                VALUES ('{0}', '{1}', '{2}', '{3}', '{4}', '{5}', '{6}', '{7}', '{8}', '{9}', '{10}', '{11}', '{12}');",
                recruitId, accountId, skating, individualOffensiveSkills, individualDefensiveSkills, offensiveTeamPlay,
                defensiveTeamPlay, hockeySense, strengthPower, workEthic, overallRanking, notes, DateTime.Today);

            cmd = new SqlCommand(addQuery, cn);
            bool isSucceeded = false;

            try
            {
                cn.Open();
                cmd.ExecuteNonQuery();
                isSucceeded = true;
            }
            catch (Exception e)
            {
                throw e;
            }
            finally
            {
                cn.Close();
            }
            return isSucceeded;
        }

        /// <summary>
        /// AddGoalieScoutingReport() takes 12 arguments, connects to the database, attempts to enter new record into GoalieScoutingReport table and returns bool
        /// </summary>
        /// <param name="recruitId"></param>
        /// <param name="accountId"></param>
        /// <param name="skating"></param>
        /// <param name="agilitySpeed"></param>
        /// <param name="trafficReboundControl"></param>
        /// <param name="hockeySense"></param>
        /// <param name="strengthFitness"></param>
        /// <param name="mentalToughness"></param>
        /// <param name="battleMentality"></param>
        /// <param name="overallRanking"></param>
        /// <param name="notes"></param>
        /// <returns></returns>
        public static bool AddGoalieScoutingReport(string recruitId, string accountId, string skating, string agilitySpeed,
            string trafficReboundControl, string hockeySense, string strengthFitness, string mentalToughness,
            string battleMentality, string overallRanking, string notes)
        {
            string addQuery = string.Format(@"INSERT INTO GoalieScoutingReport (
                RecruitID, AccountID, Skating, AgilitySpeed, TrafficReboundControl, HockeySense, StrengthFitness,
                MentalToughness, BattleMentality, OverallRanking, Notes, ScoutingReportDate) 
                VALUES ('{0}', '{1}', '{2}', '{3}', '{4}', '{5}', '{6}', '{7}', '{8}', '{9}', '{10}', '{11}');",
                recruitId, accountId, skating, agilitySpeed, trafficReboundControl, hockeySense, strengthFitness,
                mentalToughness, battleMentality, overallRanking, notes, DateTime.Today);

            cmd = new SqlCommand(addQuery, cn);
            bool isSucceeded = false;

            try
            {
                cn.Open();
                cmd.ExecuteNonQuery();
                isSucceeded = true;
            }
            catch (Exception e)
            {
                throw e;
            }
            finally
            {
                cn.Close();
            }
            return isSucceeded;
        }

        // 11/25/18_Yayun Yang (Kim)
        //DisplayGoalieReport takes one argument - the goalie report id, and connects to the database, retrieves 1 row  of GoalieScoutingReport table, 
        //returns an GoalieReport obejct
        public static GoalieReport DisplayGoalieReport(string reportId)
        {
            GoalieReport goalieReport = new GoalieReport();
            string query = "SELECT * FROM GoalieScoutingReport WHERE GoalieScoutingReportID=@id";
            cmd = new SqlCommand(query, cn);

            try
            {
                cmd.Parameters.AddWithValue("@id", reportId);
                cn.Open();

                SqlDataReader reader = cmd.ExecuteReader();

                while (reader.Read())
                {
                    goalieReport.RecruitId = Convert.ToInt32(reader[1]);
                    goalieReport.AccountId = Convert.ToInt32(reader[2]);
                    goalieReport.Skating = Convert.ToInt32(reader[3]);
                    goalieReport.AgilitySpeed = Convert.ToInt32(reader[4]);
                    goalieReport.TrafficReboundControl = Convert.ToInt32(reader[5]);
                    goalieReport.HockeySense = Convert.ToInt32(reader[6]);
                    goalieReport.StrengthFitness = Convert.ToInt32(reader[7]);
                    goalieReport.MentalToughness = Convert.ToInt32(reader[8]);
                    goalieReport.BattleMentality = Convert.ToInt32(reader[9]);
                    goalieReport.OverallRanking = Convert.ToInt32(reader[10]);
                    goalieReport.Notes = reader[11].ToString();
                    goalieReport.ScoutingReportDate = Convert.ToDateTime(reader[12]);

                }
                reader.Close();

            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
            finally
            {
                cn.Close();
            }

            return goalieReport;
        }

        // 11/25/18_Yayun Yang (Kim)
        //DisplayGoalieReport takes one argument - the player report id, and connects to the database, retrieves 1 row  of PlayerScoutingReport table, 
        //returns an GoalieReport obejct
        public static PlayerReport DisplayPlayerReport(string reportId)
        {
            PlayerReport player = new PlayerReport();

            string query = "SELECT * FROM PlayerScoutingReport WHERE PlayerScoutingReportID=@id";
            cmd = new SqlCommand(query, cn);

            try
            {
                cmd.Parameters.AddWithValue("@id", reportId);
                cn.Open();

                SqlDataReader reader = cmd.ExecuteReader();

                while (reader.Read())
                {
                    player.RecruitId = Convert.ToInt32(reader[1]);
                    player.AccountId = Convert.ToInt32(reader[2]);
                    player.Skating = Convert.ToInt32(reader[3]);
                    player.IndividualOffensiveSkills = Convert.ToInt32(reader[4]);
                    player.IndividualDefensiveSkills = Convert.ToInt32(reader[5]);
                    player.OffensiveTeamPlay = Convert.ToInt32(reader[6]);
                    player.DefensiveTeamPlay = Convert.ToInt32(reader[7]);
                    player.HockeySense = Convert.ToInt32(reader[8]);
                    player.StrengthPower = Convert.ToInt32(reader[9]);
                    player.WorkEthic = Convert.ToInt32(reader[10]);
                    player.OverallRanking = Convert.ToInt32(reader[11]);
                    player.Notes = reader[12].ToString();
                    player.ScoutingReportDate = Convert.ToDateTime(reader[13]);

                }
                reader.Close();

            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
            finally
            {
                cn.Close();
            }

            return player;
        }

        // 11/25/18_Yayun Yang (Kim)
        //EditGoalieReport takes 10 argument, and connects to the database, updates 1 row  of GoalieScoutingReport table
        //returns a bool
        public static bool EditGoalieReport(string reportId, string skating, string agilitySpeed, string trafficReboundControl, string hockeySense, 
                                            string strengthFitness, string mentalToughness, string battleMentality, string overallRanking, string notes)
        {
            bool isSucceeded = false;
            string addQuery = string.Format(@"UPDATE GoalieScoutingReport SET Skating = '{0}', AgilitySpeed = '{1}', 
                                            TrafficReboundControl = '{2}', HockeySense = '{3}', StrengthFitness = '{4}', MentalToughness = '{5}', 
                                            BattleMentality = '{6}', OverallRanking = '{7}', Notes =  '{8}', ScoutingReportDate = '{9}' 
                                            WHERE GoalieScoutingReportID = '{10}'",
                                        skating, agilitySpeed, trafficReboundControl, hockeySense, strengthFitness, mentalToughness, 
                                        battleMentality, overallRanking, notes, DateTime.Today,reportId);

            cmd = new SqlCommand(addQuery, cn);

            try
            {
                cn.Open();
                cmd.ExecuteNonQuery();
                isSucceeded = true;
            }
            catch (Exception e)
            {
                throw e;
            }
            finally
            {
                cn.Close();
            }

            return isSucceeded;
        }


        // 11/25/18_Yayun Yang (Kim)
        //EditGoalieReport takes 10 argument, and connects to the database, updates 1 row  of GoalieScoutingReport table
        //returns a bool
        public static bool EditPlayerScoutingReport(string reportId, string skating, string individualOffensiveSkills,
           string individualDefensiveSkills, string offensiveTeamPlay, string defensiveTeamPlay, string hockeySense, string strengthPower,
           string workEthic, string overallRanking, string notes)
        {
            string addQuery = string.Format(@"UPDATE PlayerScoutingReport SET Skating = '{0}', IndividualOffensiveSkills = '{1}', IndividualDefensiveSkills = '{2}', 
                                            OffensiveTeamPlay = '{2}', DefensiveTeamPlay = '{4}', HockeySense = '{5}', StrengthPower = '{6}', WorkEthic = '{7}', 
                                            OverallRanking = '{8}', Notes =  '{9}', ScoutingReportDate = '{10}' WHERE PlayerScoutingReportID = '{11}'",
                                        skating, individualOffensiveSkills, individualDefensiveSkills, offensiveTeamPlay, defensiveTeamPlay,
                                        hockeySense, strengthPower, workEthic, overallRanking, notes, DateTime.Today,reportId);

            cmd = new SqlCommand(addQuery, cn);
            bool isSucceeded = false;

            try
            {
                cn.Open();
                cmd.ExecuteNonQuery();
                isSucceeded = true;
            }
            catch (Exception e)
            {
                throw e;
            }
            finally
            {
                cn.Close();
            }
            return isSucceeded;
        }
    }

}
