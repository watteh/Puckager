using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DGFScouting
{
    public partial class EditRecruits : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["username"] == null)
            {
                Response.Redirect("Default.aspx");
            }

            lblLoggedInUser.Text = "Welcome, " + Session["username"];
            lblEditRecruitError.Visible = false;
            int id = Convert.ToInt32(Request.QueryString["id"]);

            //load selected recruit information as the hint of the textboxes through a RecruitClass object.
            RecruitClass recruit = ConnectionClass.DisplayRecruit(id);

            txtBoxFirstName.Attributes.Add("placeholder",recruit.FirstName);
            txtBoxLastName.Attributes.Add("placeholder", recruit.LastName);
            txtBoxPhoneNumber.Attributes.Add("placeholder", recruit.ContactNumber);
            txtBoxEmailAddress.Attributes.Add("placeholder", recruit.EmailAddress);
            txtBoxBirthYear.Attributes.Add("placeholder", recruit.Birthyear.ToString());
            txtBoxGradYear.Attributes.Add("placeholder", recruit.GraduationYear.ToString());
            txtBoxCurrentTeam.Attributes.Add("placeholder", recruit.CurrentTeam);
            txtBoxJerseyNumber.Attributes.Add("placeholder", recruit.JerseyNumber.ToString());
            txtBoxMothersName.Attributes.Add("placeholder", recruit.MothersName);
            txtBoxFathersName.Attributes.Add("placeholder", recruit.FathersName);
        }

        protected void BtnCancel_Click(object sender, EventArgs e)
        {
            Response.Redirect("Recruits.aspx");
        }

        protected void BtnEditRecruit_Click(object sender, EventArgs e)
        {
            int id = Convert.ToInt32(Request.QueryString["id"]);
            try
            {
                if (Page.IsValid)
                {
                    // Retrieve data entered by the user into the form inputs
                    var firstName = txtBoxFirstName.Text.Trim();
                    var lastName = txtBoxLastName.Text.Trim();
                    var contactNumber = txtBoxPhoneNumber.Text.Trim();
                    var emailAddress = txtBoxEmailAddress.Text.Trim();
                    var birthYear = Convert.ToInt32(txtBoxBirthYear.Text.Trim());
                    var graduationYear = Convert.ToInt32(txtBoxGradYear.Text.Trim());
                    var currentTeam = txtBoxCurrentTeam.Text.Trim();
                    var jerseyNumber = Convert.ToInt32(txtBoxJerseyNumber.Text.Trim());
                    var position = dropdownPosition.SelectedItem.Text.Trim();
                    var mothersName = txtBoxMothersName.Text.Trim();
                    var fathersName = txtBoxFathersName.Text.Trim();
                    var recruitStatus = dropdownStatus.SelectedItem.Text.Trim();
                    var dateAdded = Convert.ToString(DateTime.Today);

                    // Attempt to update a recruit row to the database from the data entered by the user into the form
                    var editRecruit = ConnectionClass.EditRecruit(id,firstName, lastName, contactNumber, emailAddress, birthYear, graduationYear, currentTeam, jerseyNumber, position, mothersName, fathersName, recruitStatus, dateAdded);

                    // Display different messages to the user to let them know whether the recruit was updated to the database successfully
                    if (editRecruit)
                    {
                        lblEditRecruitError.Text = "Recruit Edited Successfuly!";
                        lblEditRecruitError.Visible = true;
                    }

                    else
                    {
                        lblEditRecruitError.Visible = true;
                    }
                }

                lblEditRecruitError.Visible = true;
            }

            catch (Exception ex)
            {
                lblEditRecruitError.Text = ex.Message;
                lblEditRecruitError.Visible = true;
            }
        }
    }
}