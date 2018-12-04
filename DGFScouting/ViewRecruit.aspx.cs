using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DGFScouting
{
    // Coded by Ryan Watson 11-22-18
    public partial class ViewRecruit : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                if (Session["username"] == null)
                {
                    Response.Redirect("Default.aspx");
                }

                lblLoggedInUser.Text = "Welcome, " + Session["username"];
                int id = Convert.ToInt32(Request.QueryString["id"]);
                //int accountType = Convert.ToInt32(Session["accountType"]);

                //load selected recruit information as the hint of the textboxes through a RecruitClass object.
                RecruitClass recruit = ConnectionClass.DisplayRecruit(id);
                DisplayReportList(id, recruit.Position);


                lblRecruitFirstName.Text = recruit.FirstName;
                lblRecruitLastName.Text = recruit.LastName;
                lblRecruitPhoneNumber.Text = recruit.ContactNumber;
                lblRecruitEmailAddress.Text = recruit.EmailAddress;
                lblRecruitBirthYear.Text = recruit.Birthyear.ToString();
                lblRecruitGradYear.Text = recruit.GraduationYear.ToString();
                lblRecruitCurrentTeam.Text = recruit.CurrentTeam;
                lblRecruitJerseyNumber.Text = recruit.JerseyNumber.ToString();
                lblRecruitPosition.Text = recruit.Position.ToString();
                lblRecruitMothersName.Text = recruit.MothersName;
                lblRecruitFathersName.Text = recruit.FathersName;
                lblRecruitStatus.Text = recruit.Status.ToString();
                //lblRecruitFirstName.DataBind();
                //lblRecruitFirstName.Attributes["Text"] = recruit.FirstName.ToString();
            }
        }

        protected void BtnBack_Click(object sender, EventArgs e)
        {
            Response.Redirect("Recruits.aspx");
        }
        //Gabriele 25/11/18
        //UPDATE: Gabriele 4/12/18 - to also delete scouting reports for all recruits when applicable
        protected void BtnDelete_Click(object sender, EventArgs e)
        {
            string recruitID = Request.QueryString["id"];
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
                ConnectionClass.DeleteRecruit(recruitID);
                Response.Redirect("Recruits.aspx");
            }
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