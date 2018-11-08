using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;

namespace DGFScouting
{
    public partial class AddRecruit : System.Web.UI.Page
    {
        // Checks to see is user is logged in, if not returns them to login page, otherwise displays welcome label to the user
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["username"] == null)
            {
                Response.Redirect("Default.aspx");
            }

            lblLoggedInUser.Text = "Welcome, " + Session["username"];
            lblAddRecruitError.Visible = false;
        }

        // Attempt to add a recruit into tblRecruit
        protected void btnAddRecruit_Click(object sender, EventArgs e)
        {
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
                    var position = dropdownPosition.SelectedItem.Text.Trim();
                    var mothersName = txtBoxMothersName.Text.Trim();
                    var fathersName = txtBoxFathersName.Text.Trim();
                    var recruitStatus = dropdownStatus.SelectedItem.Text.Trim();
                    var dateAdded = Convert.ToString(DateTime.Today);

                    // Attempt to add a recruit to the database from the data entered by the user into the form
                    var addRecruit = ConnectionClass.AddRecruit(firstName, lastName, contactNumber, emailAddress, birthYear, graduationYear, currentTeam, position, mothersName, fathersName, recruitStatus, dateAdded);

                    // Display different messages to the user to let them know whether the recruit was added to the database successfully
                    if (addRecruit)
                    {
                        lblAddRecruitError.Text = "Recruit Added Successfuly!";
                        lblAddRecruitError.Visible = true;
                    }

                    else
                    {
                        lblAddRecruitError.Visible = true;
                    }
                }

                lblAddRecruitError.Visible = true;
            }

            catch (Exception ex)
            {
                lblAddRecruitError.Text = ex.Message;
                lblAddRecruitError.Visible = true;
            }     
        }
    }
}