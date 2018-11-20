using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DGFScouting
{
    public partial class Master_DGFScouting : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            // display accounts menu when the logged in user type is admin
            if (Session["accountType"].ToString() == AccountType.Admin.ToString())
            {
                menuAccounts.Visible = true;
            }
        }
    }
}