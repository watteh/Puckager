using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DGFScouting
{
    public partial class ViewRecruit : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["username"] == null)
            {
                Response.Redirect("Default.aspx");
            }

            lblLoggedInUser.Text = "Welcome, " + Session["username"];
            int id = Convert.ToInt32(Request.QueryString["id"]);
            int accountType = Convert.ToInt32(Session["accountType"]);

            //load selected recruit information as the hint of the textboxes through a RecruitClass object.
            RecruitClass recruit = ConnectionClass.DisplayRecruit(id);
            DisplayReportList(id, recruit.Position);

            lblRecruitFirstName.Attributes.Add("Text", recruit.FirstName);
            lblRecruitLastName.Attributes.Add("Text", recruit.LastName);
            lblRecruitPhoneNumber.Attributes.Add("Text", recruit.ContactNumber);
            lblRecruitEmailAddress.Attributes.Add("Text", recruit.EmailAddress);
            lblRecruitBirthYear.Attributes.Add("Text", recruit.Birthyear.ToString());
            lblRecruitGradYear.Attributes.Add("Text", recruit.GraduationYear.ToString());
            lblRecruitCurrentTeam.Attributes.Add("Text", recruit.CurrentTeam);
            lblRecruitJerseyNumber.Attributes.Add("Text", recruit.JerseyNumber.ToString());
            lblRecruitPosition.Attributes.Add("Text", recruit.Position.ToString());
            lblRecruitMothersName.Attributes.Add("Text", recruit.MothersName);
            lblRecruitFathersName.Attributes.Add("Text", recruit.FathersName);
            lblRecruitStatus.Attributes.Add("Text", recruit.Status.ToString());
        }

        protected void BtnBack_Click(object sender, EventArgs e)
        {
            Response.Redirect("Recruits.aspx");
        }

        // 11/22/18_HeeyeongKim
        // Multiview Index
        // 0: Empty
        // 1: Goalie Report
        // 2: Player Report
        protected void DisplayReportList(int id, string position)
        {
            var listview = ListViewGoalieReport;
            string tableName;

            if (position.Equals("Goalie"))
            {
                tableName = "GoalieScoutingReport";
                reportView.ActiveViewIndex = 1;
            }
            else
            {
                listview = ListViewPlayerReport;
                tableName = "PlayerScoutingReport";
                reportView.ActiveViewIndex = 2;
            }

            DataTable dt = ConnectionClass.DisplayReport(listview, id, tableName);
            if (dt.Rows.Count == 0)
            {
                reportView.ActiveViewIndex = 0;
            }
            else
            {
                listview.DataSource = dt;
                listview.DataBind();
            }
        }
    }
}