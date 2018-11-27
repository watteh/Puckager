using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DGFScouting
{
    public partial class ViewPlayerScoutingReport : System.Web.UI.Page
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

            PlayerReport player = ConnectionClass.DisplayPlayerReport(reportId);
            RecruitClass recruit = ConnectionClass.DisplayRecruit(player.RecruitId);

            lblRecruitIDData.Text = player.RecruitId.ToString();
            lblFirstNameData.Text = recruit.FirstName;
            lblLastNameData.Text = recruit.LastName;
            lblSkatingData.Text = player.Skating.ToString();
            lblIndividualOffesiveSkillsData.Text = player.IndividualOffensiveSkills.ToString();
            lblIndividualDefensiveSkillsData.Text = player.IndividualDefensiveSkills.ToString();
            lblOffensiveTeamPlayData.Text = player.OffensiveTeamPlay.ToString();
            lblDefensiveTeamPlay.Text = player.DefensiveTeamPlay.ToString();
            lblHockeySenseData.Text = player.HockeySense.ToString();
            lblStrengthPowerData.Text = player.StrengthPower.ToString();
            lblWorkEthicData.Text = player.WorkEthic.ToString();
            lblOverallRankingData.Text = player.OverallRanking.ToString();
            lblNotesData.Text = player.Notes;
            lblCreateDateData.Text = player.ScoutingReportDate.ToShortDateString() + " " + player.ScoutingReportDate.ToShortTimeString();


        }

        protected void BtnBack_Click(object sender, EventArgs e)
        {
            string url = "ViewRecruit.aspx?id=" + lblRecruitIDData.Text;
            Response.Redirect(url);
        }
    }
}