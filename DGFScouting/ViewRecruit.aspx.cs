using System;
using System.Collections.Generic;
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
            if (Session["username"] == null)
            {
                Response.Redirect("Default.aspx");
            }

            lblLoggedInUser.Text = "Welcome, " + Session["username"];
            int id = Convert.ToInt32(Request.QueryString["id"]);

            //load selected recruit information as the hint of the textboxes through a RecruitClass object.
            RecruitClass recruit = ConnectionClass.DisplayRecruit(id);

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

        protected void BtnBack_Click(object sender, EventArgs e)
        {
            Response.Redirect("Recruits.aspx");
        }
    }
}