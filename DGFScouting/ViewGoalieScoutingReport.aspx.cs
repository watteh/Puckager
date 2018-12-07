using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DGFScouting
{
    public partial class ViewGoalieScoutingReport : System.Web.UI.Page
    {
    
        protected void Page_Load(object sender, EventArgs e)
        {
            // get recruitId from url param
            string reportId = Request.QueryString["id"];

            // check username, reportId and accountType valid
            if (Session["username"] == null || String.IsNullOrEmpty(reportId))
            {
                Response.Redirect("Recruits.aspx");
            }

            lblLoggedInUser.Text = "Welcome, " + Session["username"];

            GoalieReport goalie = ConnectionClass.DisplayGoalieReport(reportId);
            RecruitClass recruit = ConnectionClass.DisplayRecruit(goalie.RecruitId);

            lblRecruitIDData.Text = goalie.RecruitId.ToString();
            lblFirstNameData.Text = recruit.FirstName;
            lblLastNameData.Text = recruit.LastName;
            lblSkatingData.Text = goalie.Skating.ToString();
            lblAgilitySpeedData.Text = goalie.AgilitySpeed.ToString();
            lblTrafficReboundControlData.Text = goalie.TrafficReboundControl.ToString();
            lblHockeySenseData.Text = goalie.HockeySense.ToString();
            lblStrengthFitnessData.Text = goalie.StrengthFitness.ToString();
            lblMentalToughnessData.Text = goalie.MentalToughness.ToString();
            lblBattleMentalityData.Text = goalie.BattleMentality.ToString();
            lblOverallRankingData.Text = goalie.OverallRanking.ToString();
            lblNotesData.Text = goalie.Notes;
            lblCreateDateData.Text = goalie.ScoutingReportDate.ToShortDateString() + " " + goalie.ScoutingReportDate.ToShortTimeString();

        }

        protected void BtnBack_Click(object sender, EventArgs e)
        {
            string url = "ViewRecruit.aspx?id=" + lblRecruitIDData.Text;
            Response.Redirect(url);
        }
    }
}