﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Diagnostics;
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

            // 11/08/18_Heeyeong Kim
            dropdownBirthYear.Items.Add(new ListItem("--Select--"));
            // Add items in DropdownList
            for (int i = 1990; i <= 2018; i++)
            {
                dropdownBirthYear.Items.Add(new ListItem(i.ToString()));
            }

            lblSearchRecruitError.Visible = false;
            lblExceptionError.Visible = false;
            // Create variable to store ListView object, call DisplayRecruits and use listViewRecruits as argument
            var listViewRecruits = ListViewRecruits;
            ConnectionClass.DisplayRecruits(listViewRecruits);            
        }

        // 11/08/18_Heeyeong Kim
        protected void btnSearch_Click(object sender, EventArgs e)
        {

            if (Page.IsValid)
            {
                var listViewRecruit = ListViewRecruits;

                // Retrieve data entered by the user into the form inputs
                var name = txtBoxName.Text.Trim();
                var birthYear = dropdownBirthYear.SelectedItem.Text.Trim();
                var position = dropdownPosition.SelectedItem.Text.Trim();

                if (birthYear.Equals("--Select--")) birthYear = null;
                int birth = Convert.ToInt32(birthYear);

                // Call SearchRecruits and retrieve data from database
                DataTable dt = ConnectionClass.SearchRecruits(name, birth, position);

                // If there is no result, error message shows up
                if (dt != null)
                {
                    listViewRecruit.DataSource = dt;
                    listViewRecruit.DataBind();
                }
                else
                {
                    lblSearchRecruitError.Text = "Recruit Not Found";
                    lblSearchRecruitError.Visible = true;
                }
            }
        }
    }
}