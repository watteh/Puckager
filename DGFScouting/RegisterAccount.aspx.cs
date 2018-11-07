using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DGFScouting
{
    public partial class RegisterAccount : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            lblRegistrationError.Visible = false;
        }

        protected void btnRegister_Click(object sender, EventArgs e)
        {
            try
            {
                // Check to make sure form passes all validation checks
                if (Page.IsValid)
                {
                    // Retrieve user inputs from username, password, and email address textboxes
                    var username = txtBoxRegisterUsername.Text.Trim();
                    var password = txtBoxRegisterPassword.Text.Trim();
                    var emailAddress = txtBoxRegisterEmailAddress.Text.Trim();

                    // Connect to the database and attempt to add new user to the tblStaffAccount
                    var registerUser = ConnectionClass.RegisterUser(username, password, emailAddress);

                    // If registration is successful redirect user to the login page
                    if (registerUser)
                    {
                        Response.Redirect("Default.aspx");
                    }

                    // If registration is not successful display failed message to the suer
                    else
                    {
                        lblRegistrationError.Visible = true;
                    }
                }
            }

            catch (Exception ex)
            {
                lblRegistrationError.Visible = true;
                lblRegistrationError.Text = ex.Message;
            }            
        }
    }
}