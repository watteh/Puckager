using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DGFScouting
{
    public partial class Recruit : System.Web.UI.Page
    {
        // Checks to see is user is logged in, if not returns them to login page, otherwise displays welcome label to the user
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack) //(G) Required to tell page this isn't the first run, else throws an Event Validation error
            {
                if (Session["username"] == null)
                {
                    Response.Redirect("Default.aspx");
                }

                lblLoggedInUser.Text = "Welcome, " + Session["username"];

                // 11/08/18_Heeyeong Kim
                dropdownBirthYear.Items.Add(new ListItem("--Select--"));
                // Add items in DropdownList
                for (int i = 1990; i <= 2018; i++)
                {
                    dropdownBirthYear.Items.Add(new ListItem(i.ToString()));
                }

                lblSearchRecruitError.Visible = false;
                lblExceptionError.Visible = false;
                // Create variable to store ListView object, call DisplayRecruits and use listViewRecruits as argument
                var listViewRecruits = ListViewRecruits;
                ConnectionClass.DisplayRecruits(listViewRecruits);
            }
        }

        // 11/08/18_Heeyeong Kim
        protected void btnSearch_Click(object sender, EventArgs e)
        {

            if (Page.IsValid)
            {
                var listViewRecruit = ListViewRecruits;

                // Retrieve data entered by the user into the form inputs
                var name = txtBoxName.Text.Trim();
                var birthYear = dropdownBirthYear.SelectedItem.Text.Trim();
                var position = dropdownPosition.SelectedItem.Text.Trim();

                if (birthYear.Equals("--Select--")) birthYear = null;
                int birth = Convert.ToInt32(birthYear);

                if (!name.Equals("") && !Regex.IsMatch(name, @"^[a-zA-Z]+$"))
                {
                    lblSearchRecruitError.Text = "Uppercase and lowercase letters only";
                    lblSearchRecruitError.Visible = true;
                    listViewRecruit.DataSource = null;
                    listViewRecruit.DataBind();
                    return;
                }

                // Call SearchRecruits and retrieve data from database
                DataTable dt = ConnectionClass.SearchRecruits(name, birth, position);

                // If there is no result, error message shows up
                if (dt != null)
                {
                    if (dt.Rows.Count == 0)
                    {
                        lblSearchRecruitError.Text = "Recruit Not Found";
                        lblSearchRecruitError.Visible = true;
                    }

                    listViewRecruit.DataSource = dt;
                    listViewRecruit.DataBind();
                }
            }
        }

        // 11/23/18_Minseok Choi
        // Return url upto a recruit's position and add recruitId as param to the url
        protected string GetAddScoutingReportPostBackUrl(string recruitId, string position)
        {
            if (position == "Goalie")
            {
                return "GoalieScoutingReport.aspx?id=" + recruitId;
            }
            else
            {
                return "PlayerScoutingReport.aspx?id=" + recruitId;
            }
        }


        // 25/11/18 Gabriele //Updated to master
        //UPDATE: Gabriele 4/12/18 - to also delete scouting reports for all recruits when applicable
        protected void ListViewRecruits_deleteRecruit(object sender, ListViewCommandEventArgs e)
        {
            string recruitID = e.CommandArgument.ToString();
            RecruitClass recruit = ConnectionClass.GetRecruit(Convert.ToInt32(recruitID));
            string position = recruit.Position;


            try
            {
                ConnectionClass.DeleteReport(recruitID, position);
            }
            catch (Exception ex)
            {
                throw;
            }
            finally
            {
                if (e.CommandName == "deleteRecruit")
                {
                    ConnectionClass.DeleteRecruit(recruitID);
                    Page.Response.Redirect(Page.Request.Url.ToString(), true);
                }
            }
        }

    }
}