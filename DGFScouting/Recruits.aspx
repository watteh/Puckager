<%@ Page Title="" Language="C#" MasterPageFile="~/Master_DGFScouting.Master" AutoEventWireup="true" CodeBehind="Recruits.aspx.cs" Inherits="DGFScouting.Recruit" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <style type="text/css">
        .auto-style1 {
            width: 194px;
        }
        .auto-style2 {
            width: 166px;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="container-fluid">
        <asp:Label ID="lblLoggedInUser" runat="server" Text=""></asp:Label>
    </div>
<div class="container">
    <div class="row">
        <div class="col-md.12">
            <h4>Recruits</h4>
                <div class="table-responsive">
                    <table id="recruitTabe" class="table table-bordered table-striped">
                        <thead>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th class="auto-style1">Phone Number</th>
                            <th class="auto-style2">Email Address</th>
                            <th>Birth Year</th>
                            <th>Graduation Year</th>
                            <th>Position</th>
                            <th>Rating</th>
                            <th>Notes</th>
                        </thead>
                        
                        <tbody>
                            <asp:ListView ID="ListViewRecruits" runat="server">
                            <ItemTemplate>
                
                            <tr class="table table-bordered table-striped">
                                <td><%#Eval("RecruitID") %></td>
                                <td><%#Eval("FirstName") %></td>
                                <td><%#Eval("LastName") %></td>
                                <td><%#Eval("PhoneNumber") %></td>
                                <td><%#Eval("EmailAddress") %></td>
                                <td><%#Eval("BirthYear") %></td>
                                <td><%#Eval("GraduationYear") %></td>
                                <td><%#Eval("Position") %></td>
                                <td><%#Eval("RecruitRating") %></td>
                                <td><%#Eval("Notes") %></td>
                            </tr>
                
                            </ItemTemplate>
                        </asp:ListView>

                        </tbody>
                    </table>
            </div>
        </div>
    </div>
</div> 

</asp:Content>
