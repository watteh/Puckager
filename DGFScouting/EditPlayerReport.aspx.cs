using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DGFScouting
{
    public partial class EditPlayerReport : System.Web.UI.Page
    {
        PlayerReport player;
        RecruitClass recruit;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["username"] == null)
            {
                Response.Redirect("Default.aspx");
            }

            lblLoggedInUser.Text = "Welcome, " + Session["username"];

            lblEditReportError.Visible = false;
            lblEditReportError.CssClass = "alert alert-danger small font-weight-bold text-center";
            string reportId = Request.QueryString["id"];


            player = ConnectionClass.DisplayPlayerReport(reportId);
            recruit = ConnectionClass.DisplayRecruit(player.RecruitId);

            //pollute control with recruit information
            lblRecruitIDData.Text = player.RecruitId.ToString();
            lblFirstNameData.Text = recruit.FirstName;
            lblLastNameData.Text = recruit.LastName;
            dropdownSkating.SelectedValue = player.Skating.ToString();
            dropdownIndividualOffesiveSkills.SelectedValue = player.IndividualOffensiveSkills.ToString();
            dropdownIndividualDefensiveSkills.SelectedValue = player.IndividualDefensiveSkills.ToString();
            dropdownOffensiveTeamPlay.SelectedValue = player.OffensiveTeamPlay.ToString();
            dropdownDefensiveTeamPlay.SelectedValue = player.DefensiveTeamPlay.ToString();
            dropdownHockeySense.SelectedValue = player.HockeySense.ToString();
            dropdownStrengthPower.SelectedValue = player.StrengthPower.ToString();
            dropdownWorkEthic.SelectedValue = player.WorkEthic.ToString();
            dropdownOverallRanking.SelectedValue = player.OverallRanking.ToString();
            txtNotes.Text = player.Notes;
        }

        protected void BtnEditReport_Click(object sender, EventArgs e)
        {
            try
            {
                if (Page.IsValid)
                {
                    string reportId = Request.QueryString["id"];


                    // Retrieve user inputs
                    string skating = dropdownSkating.SelectedValue;
                    string individualOffesiveSkills = dropdownIndividualOffesiveSkills.SelectedValue;
                    string individualDefensiveSkills = dropdownIndividualDefensiveSkills.SelectedValue;
                    string offensiveTeamPlay = dropdownOffensiveTeamPlay.SelectedValue;
                    string defensiveTeamPlay = dropdownDefensiveTeamPlay.SelectedValue;
                    string hockeySense = dropdownHockeySense.SelectedValue;
                    string strengthPower = dropdownStrengthPower.SelectedValue;
                    string workEthic = dropdownWorkEthic.Text.Trim();
                    string overallRanking = dropdownOverallRanking.Text.Trim();
                    string notes = txtNotes.Text.Trim();

                    bool editPlayerScoutingReport = ConnectionClass.EditPlayerScoutingReport(
                        reportId, skating, individualOffesiveSkills, individualDefensiveSkills, offensiveTeamPlay,
                        defensiveTeamPlay, hockeySense, strengthPower, workEthic, overallRanking, notes);

                    if (editPlayerScoutingReport)
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
            catch(Exception ex)
            {
                lblEditReportError.Text += "\n" + ex.Message;
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