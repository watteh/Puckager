using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Data;

namespace DGFScouting
{
    public partial class Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            lblLoginError.Visible = false;
        }

        protected void btnLogin_Click(object sender, EventArgs e)
        {
            try
            {
                var username = txtBoxLoginUserName.Text.Trim();
                var password = txtBoxLoginPassword.Text.Trim();

                var verifyCredentials = ConnectionClass.ValidateUser(username, password);
                var accountType = ConnectionClass.GetUserAccountType(username, password);

                if (verifyCredentials == 1)
                {
                    Session["username"] = txtBoxLoginUserName.Text.Trim();
                    Session["accountType"] = accountType;

                    Response.Redirect("Recruits.aspx");
                }

                else
                {
                    lblLoginError.Visible = true;
                }
            }

            catch (Exception ex)
            {
                lblLoginError.Text = ex.Message;
                lblLoginError.Visible = true;                
            }
        }
    }
}