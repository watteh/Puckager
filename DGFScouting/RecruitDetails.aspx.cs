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
    public partial class RecruitDetails : System.Web.UI.Page
    {
        // Private instance variables for both SQLConnection and SQLCommand
        private static SqlConnection cn;
        private static SqlCommand cmd;



        // ConnectionClass() contains database connection to local SQLExpress database
        public static void connection()
        {
            cn = new SqlConnection(@"Data Source=DESKTOP-7TNBVBD;Initial Catalog=Puckager;Integrated Security=True");
            cn.Open();

        }

        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["username"] == null)
            {
                Response.Redirect("Default.aspx");
            }

            lblLoggedInUser.Text = "Welcome, " + Session["username"];

            ListView1.Visible = false;
            hideEditTextboxes();
            updateButton.Visible = false;
            cancelButton.Visible = false;

            if (!IsPostBack)
            {
                recruits_bind();
            }
        }

        protected void recruits_bind()
        {


            string query = "Select * from Recruit where RecruitID like'" + searchText.Text + "%'";
            DataTable rd = new DataTable();
            connection();
            SqlDataAdapter ad = new SqlDataAdapter(query, cn);
            //GridView1.DataSource = rd;
            ad.Fill(rd);
            //GridView1.DataBind();
            if (rd.Rows.Count > 0)
            {
                ListView1.DataSource = rd;
                ListView1.DataBind();
            }

            cn.Close();
        }

        // Search button function to search by ID
        protected void Button1_Click(object sender, EventArgs e)
        {
            connection();
            string query = "Select * from Recruit where RecruitID like'" + searchText.Text + "%'";
            SqlCommand com = new SqlCommand(query, cn);

            SqlDataReader rds;
            rds = com.ExecuteReader();

            if (rds.HasRows)
            {
                rds.Read();

                recruits_bind();
                ListView1.Visible = true;

                searchText.Text = "";
                noRecord.Text = "";

            }
            else
            {
                ListView1.Visible = false;
                noRecord.Text = "ID not in our records";

            }


        }


        // Edit button function to edit a recruit information       
        protected void updateButton_Click(object sender, EventArgs e)
        {

            delete();
            enableEditTextboxes();

            connection();
            string query = "Select * from Recruit where RecruitID like'" + searchText.Text + "%'";
            SqlCommand com = new SqlCommand(query, cn);

            SqlDataReader rds;
            rds = com.ExecuteReader();

            if (rds.HasRows)
            {
                rds.Read();
                ListView1.Visible = true;

                firstName.Text = rds["FirstName"].ToString();
                lastName.Text = rds["LastName"].ToString();
                phoneNum.Text = rds["PhoneNumber"].ToString();
                emailAddy.Text = rds["EmailAddress"].ToString();
                birthYear.Text = rds["BirthYear"].ToString();
                gradYear.Text = rds["GraduationYear"].ToString();
                posText.Text = rds["Position"].ToString();
                recruitRate.Text = rds["RecruitRating"].ToString();
                notesText.Text = rds["Notes"].ToString();




            }
            cn.Close();
        }

        protected void hideEditTextboxes()
        {
            recruitIdLabel.Visible = false;
            recruitIDText.Visible = false;

            firstNameLabel.Visible = false;
            firstName.Visible = false;

            lastNameLabel.Visible = false;
            lastName.Visible = false;

            phoneNumLabel.Visible = false;
            phoneNum.Visible = false;

            emailLabel.Visible = false;
            emailAddy.Visible = false;

            birthYearLabel.Visible = false;
            birthYear.Visible = false;

            gradYearLabel.Visible = false;
            gradYear.Visible = false;

            posLabel.Visible = false;
            posText.Visible = false;

            recruitLabel.Visible = false;
            recruitRate.Visible = false;

            notesLabel.Visible = false;
            notesText.Visible = false;
        }

        protected void enableEditTextboxes()
        {

            firstNameLabel.Visible = true;
            firstName.Visible = true;
            lastNameLabel.Visible = true;
            lastName.Visible = true;
            phoneNumLabel.Visible = true;
            phoneNum.Visible = true;
            emailLabel.Visible = true;
            emailAddy.Visible = true;
            birthYearLabel.Visible = true;
            birthYear.Visible = true;
            gradYearLabel.Visible = true;
            gradYear.Visible = true;
            posLabel.Visible = true;
            posText.Visible = true;
            recruitLabel.Visible = true;
            recruitRate.Visible = true;
            notesLabel.Visible = true;
            notesText.Visible = true;
        }

        void delete()
        {
            recruitIDText.Text = string.Empty;
            firstName.Text = string.Empty;
            lastName.Text = string.Empty;
            phoneNum.Text = string.Empty;
            emailAddy.Text = string.Empty;
            birthYear.Text = string.Empty;
            gradYear.Text = string.Empty;
            posText.Text = string.Empty;
            recruitRate.Text = string.Empty;
            notesText.Text = string.Empty;

        }



        //Delete a recruit from the database
        public void eraseRecruit(int recruitID)
        {
            connection();

            string query = "Delete from Recruit where RecruitID=@RecruitID";
            SqlCommand com = new SqlCommand(query, cn);

            com.Parameters.AddWithValue("@RecruitID", recruitID);

            com.ExecuteNonQuery();

            cn.Close();

            recruits_bind();
        }

        // Edit a recruit in the database
        public void editRecruitInfo(int recruitID)
        {
            enableEditTextboxes();
            connection();

            string query = "Select * from Recruit where RecruitID=@RecruitID";
            SqlCommand com = new SqlCommand(query, cn);

            com.Parameters.AddWithValue("@RecruitID", recruitID);

            SqlDataReader rds;
            rds = com.ExecuteReader();

            if (rds.HasRows)
            {
                rds.Read();
                ListView1.Visible = true;
                recruitIDText.Text = rds["RecruitID"].ToString();
                firstName.Text = rds["FirstName"].ToString();
                lastName.Text = rds["LastName"].ToString();
                phoneNum.Text = rds["PhoneNumber"].ToString();
                emailAddy.Text = rds["EmailAddress"].ToString();
                birthYear.Text = rds["BirthYear"].ToString();
                gradYear.Text = rds["GraduationYear"].ToString();
                posText.Text = rds["Position"].ToString();
                recruitRate.Text = rds["RecruitRating"].ToString();
                notesText.Text = rds["Notes"].ToString();

                updateButton.Visible = true;
                cancelButton.Visible = true;


            }
            cn.Close();

        }

        protected void ListView1_ItemCommand(object sender, ListViewCommandEventArgs e)
        {
            if (e.CommandName == "Change")
            {
                int recID = Convert.ToInt32(e.CommandArgument);
                editRecruitInfo(recID);
            }
            else if (e.CommandName == "Erase")
            {
                int recID = Convert.ToInt32(e.CommandArgument);
                eraseRecruit(recID);
            }
        }

        // Button to update a recruit information in the database
        protected void updateButton_Click1(object sender, EventArgs e)
        {
            connection();

            string query = "Update Recruit set FirstName=@FirstName, LastName=@LastName, PhoneNumber=@PhoneNumber, EmailAddress=@EmailAddress, BirthYear=@BirthYear, GraduationYear=@GraduationYear, Position=@Position, RecruitRating=@RecruitRating, Notes=@Notes where RecruitID=@RecruitID";
            SqlCommand com = new SqlCommand(query, cn);

            com.Parameters.AddWithValue("@FirstName", firstName.Text);
            com.Parameters.AddWithValue("@LastName", lastName.Text);
            com.Parameters.AddWithValue("@PhoneNumber", phoneNum.Text);
            com.Parameters.AddWithValue("@EmailAddress", emailAddy.Text);
            com.Parameters.AddWithValue("@BirthYear", Convert.ToInt32(birthYear.Text));
            com.Parameters.AddWithValue("@GraduationYear", Convert.ToInt32(gradYear.Text));
            com.Parameters.AddWithValue("@Position", posText.Text);
            com.Parameters.AddWithValue("@RecruitRating", Convert.ToDecimal(recruitRate.Text));
            com.Parameters.AddWithValue("@Notes", notesText.Text);

            com.Parameters.AddWithValue("@RecruitID", Convert.ToInt32(recruitIDText.Text));

            com.ExecuteNonQuery();

            cn.Close();

            delete();

            recruits_bind();

            hideEditTextboxes();


        }

        protected void cancelButton_Click(object sender, EventArgs e)
        {
            delete();

        }
    }
}