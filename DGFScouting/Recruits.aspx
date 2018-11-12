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
                    <table id="recruitTable" class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th style="text-align: center">ID</th>
                                <th style="text-align: center">First Name</th>
                                <th style="text-align: center">Last Name</th>
                                <th style="text-align: center">Contact Number</th>
                                <th style="text-align: center">Email Address</th>
                                <th style="text-align: center">Birth Year</th>
                                <th style="text-align: center">Graduation Year</th>
                                <th style="text-align: center">Current Team</th>
                                <th style="text-align: center">Jersey #</th>
                                <th style="text-align: center">Position</th>
                                <th style="text-align: center">Mother</th>
                                <th style="text-align: center">Father</th>
                                <th style="text-align: center">Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            <asp:ListView ID="ListViewRecruits" runat="server">
                                <ItemTemplate>

                                    <tr class="table table-bordered table-striped">
                                        <td><%#Eval("RecruitID") %></td>
                                        <td><%#Eval("FirstName") %></td>
                                        <td><%#Eval("LastName") %></td>
                                        <td><%#Eval("ContactNumber") %></td>
                                        <td><%#Eval("EmailAddress") %></td>
                                        <td><%#Eval("BirthYear") %></td>
                                        <td><%#Eval("GraduationYear") %></td>
                                        <td><%#Eval("CurrentTeam") %></td>
                                        <td><%#Eval("JerseyNumber") %></td>
                                        <td><%#Eval("Position") %></td>
                                        <td><%#Eval("MothersName") %></td>
                                        <td><%#Eval("FathersName") %></td>
                                        <td><%#Eval("Status") %></td>
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
