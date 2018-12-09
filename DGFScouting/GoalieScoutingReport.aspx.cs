using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DGFScouting
{
    public partial class GoalieScoutingReport : System.Web.UI.Page
    {
        // 11/23/18 Minseok Choi
        protected void Page_Load(object sender, EventArgs e)
        {
            // get recruitId from url param
            string recruitId = Request.QueryString["id"];

            // check username, recruitId and accountType valid
            if (Session["username"] == null || String.IsNullOrEmpty(recruitId) ||
                Session["accountType"] == null 
                || !(Session["accountType"].ToString() == AccountType.Coach.ToString() 
                || Session["accountType"].ToString() == AccountType.Scout.ToString()))
            {
                Response.Redirect("Recruits.aspx");
            }

            lblLoggedInUser.Text = "Welcome, " + Session["username"];
            lblAddScoutingReportError.Visible = false;

            // set values in the name labels
            ConnectionClass.GetRecruitName(recruitId, out string firstName, out string lastName);
            lblRecruitIDData.Text = recruitId;
            lblFirstNameData.Text = firstName;
            lblLastNameData.Text = lastName;
        }

        // Added by Ryan Watson 11/28/2018
        protected void btnBack_Click(object sender, EventArgs e)
        {
            Response.Redirect("Recruits.aspx");
        }

        // 11/23/18 Minseok Choi
        // retrieve user inputs for adding a scouting report and add a new report in the database
        protected void btnAddScoutingReport_Click(object sender, EventArgs e)
        {
            try
            {
                // Check to make sure form passes all validation checks
                if (Page.IsValid)
                {
                    // get values from session
                    string recruitId = Request.QueryString["id"];
                    string accountId = Session["userId"].ToString();

                    // Retrieve user inputs
                    string skating = dropdownSkating.SelectedValue;
                    string agilitySpeed = dropdownAgilitySpeed.SelectedValue;
                    string trafficReboundControl = dropdownTrafficReboundControl.SelectedValue;
                    string hockeySense = dropdownHockeySense.SelectedValue;
                    string strengthFitness = dropdownStrengthFitness.SelectedValue;
                    string mentalToughness = dropdownMentalToughness.SelectedValue;
                    string battleMentality = dropdownBattleMentality.SelectedValue;
                    string overallRanking = dropdownOverallRanking.Text.Trim();
                    string notes = txtNotes.Text.Trim();

                    // Connect to the database and attempt to add new scouting report
                    bool addGoalieScoutingReport = ConnectionClass.AddGoalieScoutingReport(
                        recruitId, accountId, skating, agilitySpeed, trafficReboundControl, hockeySense, strengthFitness,
                        mentalToughness, battleMentality, overallRanking, notes);

                    // If adding a scouting report is successful redirect user to the account list page
                    if (addGoalieScoutingReport)
                    {
                        Response.Redirect("Recruits.aspx");     // todo change temporal url
                    }
                    // If adding an scouting report is not successful display failed message to the suer
                    else
                    {
                        lblAddScoutingReportError.Visible = true;
                    }
                }
            }
            catch (Exception ex)
            {
                lblAddScoutingReportError.Visible = true;
                lblAddScoutingReportError.Text = ex.Message;
            }
        }
    }
}