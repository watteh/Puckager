using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace DGFScouting
{
    public partial class ListAccounts : System.Web.UI.Page
    {
        // Check if the logged in user is admin, if not it redirects to default page, otherwise displays account list.
        protected void Page_Load(object sender, EventArgs e)
        {
            // Only work when the page is initialized
            if (!IsPostBack)
            {
                //checks and updates accountType every initialization
                ConnectionClass.GetAccountType(Convert.ToString(Session["userID"]), out string accountType);
                Session["accountType"] = Utility.ConvertStringToAccountType(accountType).ToString();

                // only Admin allowed
                if (Session["accountType"] == null || Session["accountType"].ToString() != AccountType.Admin.ToString())
                {
                    Response.Redirect("Default.aspx");
                }

                // Create variable to store ListView object, call DisplayRecruits and use listViewRecruits as argument
                var listViewAccounts = ListViewAccounts;
                ConnectionClass.DisplayAccounts(listViewAccounts);
            }
        }
        
        protected void ListViewAccounts_ItemCommand(object sender, ListViewCommandEventArgs e)
        {
            string accountID = e.CommandArgument.ToString();

            if (e.CommandName == "updateAccount")
            {
                Session["accountID"] = accountID;
                Response.Redirect("UpdateAccount.aspx");
            }
            else if (e.CommandName == "deleteAccount")
            {
                ConnectionClass.DeleteAccount(accountID);
                Page.Response.Redirect(Page.Request.Url.ToString(), true);
            }
        }

    }
}