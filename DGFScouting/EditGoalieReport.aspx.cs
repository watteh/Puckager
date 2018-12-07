using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DGFScouting
{
    public partial class EditGoalieReport : System.Web.UI.Page
    {
        RecruitClass recruit;
        GoalieReport goalie;
        protected void Page_Load(object sender, EventArgs e)
        {
            // Only work when the page is initialized
            if (!IsPostBack)
            {
                if (Session["username"] == null)
                {
                    Response.Redirect("Default.aspx");
                }

                lblLoggedInUser.Text = "Welcome, " + Session["username"];

                lblEditReportError.Visible = false;
                lblEditReportError.CssClass = "alert alert-danger small font-weight-bold text-center";
                string reportId = Request.QueryString["id"];


                goalie = ConnectionClass.DisplayGoalieReport(reportId);
                recruit = ConnectionClass.DisplayRecruit(goalie.RecruitId);

                //pollute control with recruit information
                lblRecruitIDData.Text = goalie.RecruitId.ToString();
                lblFirstNameData.Text = recruit.FirstName;
                lblLastNameData.Text = recruit.LastName;
                dropdownSkating.SelectedValue = goalie.Skating.ToString();
                dropdownAgilitySpeed.SelectedValue = goalie.AgilitySpeed.ToString();
                dropdownTrafficReboundControl.SelectedValue = goalie.TrafficReboundControl.ToString();
                dropdownHockeySense.SelectedValue = goalie.HockeySense.ToString();
                dropdownStrengthFitness.SelectedValue = goalie.StrengthFitness.ToString();
                dropdownMentalToughness.SelectedValue = goalie.MentalToughness.ToString();
                dropdownBattleMentality.SelectedValue = goalie.BattleMentality.ToString();
                dropdownOverallRanking.SelectedValue = goalie.OverallRanking.ToString();
                txtNotes.Text = goalie.Notes;
            }
        }

        protected void BtnEditReport_Click(object sender, EventArgs e)
        {
            try
            {
                if (Page.IsValid)
                {
                    string reportId = Request.QueryString["id"];
                    // Retrieve user inputs
                    var skating = dropdownSkating.SelectedValue;
                    var agilitySpeed = dropdownAgilitySpeed.SelectedValue;
                    var trafficReboundControl = dropdownTrafficReboundControl.SelectedValue;
                    var hockeySense = dropdownHockeySense.SelectedValue;
                    var strengthFitness = dropdownStrengthFitness.SelectedValue;
                    var mentalToughness = dropdownMentalToughness.SelectedValue;
                    var battleMentality = dropdownBattleMentality.SelectedValue;
                    var overallRanking = dropdownOverallRanking.Text.Trim();
                    var notes = txtNotes.Text.Trim();

                    // Connect to the database and attempt to add new scouting report
                    bool editGoalieScoutingReport = ConnectionClass.EditGoalieReport(reportId,
                        skating, agilitySpeed, trafficReboundControl, hockeySense, strengthFitness,
                        mentalToughness, battleMentality, overallRanking, notes);

                    if (editGoalieScoutingReport)
                    {
                        lblEditReportError.CssClass = "alert alert-success";
                        lblEditReportError.Text = "Goalie Report Edited Successfully!";
                        lblEditReportError.Visible = true;
                    }
                    else
                    {
                        lblEditReportError.Visible = true;
                    }

                }

            }
            catch (Exception ex)
            {
                lblEditReportError.Text += ex.Message;
                lblEditReportError.Visible = true;
            }
        }

        protected void BtnCancel_Click(object sender, EventArgs e)
        {
            string url = "ViewRecruit.aspx?id=" + recruit.RecruitID;
            Response.Redirect(url);

        }
    }
}