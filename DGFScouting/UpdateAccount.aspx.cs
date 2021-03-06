﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DGFScouting
{
    public partial class UpdateAccount : System.Web.UI.Page
    {

        protected void Page_Load(object sender, EventArgs e)
        {
            // Only work when the page is initialized
            if (!IsPostBack)
            {
                isAdmin();

                // accountID required
                if (Session["accountID"] != null)
                {
                    var accountID = Session["accountID"].ToString();
                    Session.Remove("accountID");

                    // set textboxes values as the original account values
                    string username, password, emailAddress, accountType;
                    ConnectionClass.GetAccount(accountID, out username, out password, out emailAddress, out accountType);

                    lblAccountID.Text = accountID;
                    txtUsername.Text = username;
                    txtPassword.Text = password;
                    txtEmailAddress.Text = emailAddress;
                    ddlAccountType.SelectedIndex = (int) Utility.ConvertStringToAccountType(accountType);

                }
            }
        }

        protected void btnUpdateAccount_Click(object sender, EventArgs e)
        {
            try
            {
                // Check to make sure form passes all validation checks
                if (Page.IsValid)
                {
                    isAdmin();
                    // Retrieve user inputs from username, password, and email address textboxes
                    var accountID = lblAccountID.Text.Trim();
                    var username = txtUsername.Text.Trim();
                    var password = txtPassword.Text.Trim();
                    var emailAddress = txtEmailAddress.Text.Trim();
                    var sAccountType = ddlAccountType.SelectedValue;
                    AccountType accountType = Utility.ConvertStringToAccountType(sAccountType);

                    // Connect to the database and attempt to add new user to the tblStaffAccount
                    var updateAccount = ConnectionClass.UpdateAccount(accountID, username, password, emailAddress, accountType);

                    // If adding an account is successful redirect user to the account list page
                    if (updateAccount)
                    {
                        Response.Redirect("Accounts.aspx");
                    }
                    // If adding an account is not successful display failed message to the suer
                    else
                    {
                        lblUpdateAccountError.Visible = true;
                    }
                }
            }
            catch (Exception ex)
            {
                lblUpdateAccountError.Visible = true;
                lblUpdateAccountError.Text = ex.Message;
            }
        }
        protected void btnCancel_Click(object sender, EventArgs e)
        {
            Response.Redirect("Accounts.aspx");
        }


        //Gabriele 04/12/18
        // Check if the logged in user is admin, if not it redirects to default page, otherwise displays account list.
        protected void isAdmin()
        {
            //checks and updates accountType every initialization
            ConnectionClass.GetAccountType(Convert.ToString(Session["userID"]), out string accountType);
            Session["accountType"] = Utility.ConvertStringToAccountType(accountType).ToString();

            // only Admin allowed
            if (Session["accountType"] == null || Session["accountType"].ToString() != AccountType.Admin.ToString())
            {
                Response.Redirect("Default.aspx");
            }
        }
    }
}