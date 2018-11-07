using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DGFScouting
{
    public partial class Recruit : System.Web.UI.Page
    {
        // Checks to see is user is logged in, if not returns them to login page, otherwise displays welcome label to the user
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["username"] == null)
            {
                Response.Redirect("Default.aspx");
            }

            lblLoggedInUser.Text = "Welcome, " + Session["username"];

            // Create variable to store ListView object, call DisplayRecruits and use listViewRecruits as argument
            var listViewRecruits = ListViewRecruits;
            ConnectionClass.DisplayRecruits(listViewRecruits);            
        }
    }
}