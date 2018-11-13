using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DGFScouting
{
    public partial class AddAccount : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            // Only work when the page is initialized
            if (!IsPostBack)
            {
                // only Admin allowed
                if (Session["accountType"] == null || Session["accountType"].ToString() != AccountType.Admin.ToString())
                {
                    Response.Redirect("Default.aspx");
                }
            }
        }

        protected void btnAddAccount_Click(object sender, EventArgs e)
        {
            try
            {
                // Check to make sure form passes all validation checks
                if (Page.IsValid)
                {
                    // Retrieve user inputs from username, password, and email address textboxes
                    var username = txtUsername.Text.Trim();
                    var password = txtPassword.Text.Trim();
                    var emailAddress = txtEmailAddress.Text.Trim();
                    var sAccountType = ddlAccountType.SelectedValue;
                    AccountType accountType = Utility.ConvertStringToAccountType(sAccountType);

                    // Connect to the database and attempt to add new user to the tblStaffAccount
                    var addAccount = ConnectionClass.AddAccount(username, password, emailAddress, accountType);

                    // If adding an account is successful redirect user to the account list page
                    if (addAccount)
                    {
                        Response.Redirect("Accounts.aspx");
                    }

                    // If adding an account is not successful display failed message to the suer
                    else
                    {
                        lblAddAccountError.Visible = true;
                    }
                }
            }
            catch (Exception ex)
            {
                lblAddAccountError.Visible = true;
                lblAddAccountError.Text = ex.Message;
            }
        }
    }
}