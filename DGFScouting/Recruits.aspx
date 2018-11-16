<%@ Page Title="" Language="C#" MasterPageFile="~/Master_DGFScouting.Master" AutoEventWireup="true" CodeBehind="Recruits.aspx.cs" Inherits="DGFScouting.Recruit" EnableEventValidation="True" %>

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

    <!-- 11/08/18_Heeyeong Kim -->
    <div class="container">
        <div class="row">
            <table>
                <tr>
                    <td>
                        <asp:Label ID="lblPosition" for="dropdownPosition" CssClass="col-2 col-form-label" runat="server" Text="Position"></asp:Label>
                    </td>
                    <td>
                        <!-- Search by Position -->
                        <asp:DropDownList ID="dropdownPosition" type="text" CssClass="form-control" runat="server">
                            <asp:ListItem Selected="True" Value="select">--Select--</asp:ListItem>
                            <asp:ListItem Value="Forward">Forward</asp:ListItem>
                            <asp:ListItem Value="Defenceman">Defenceman</asp:ListItem>
                            <asp:ListItem Value="Goalie">Goalie</asp:ListItem>
                        </asp:DropDownList>
                    </td>
                    <td>
                        <asp:Label ID="lblBirthYear" for="dropdownBirthYear" CssClass="col-2 col-form-label" runat="server" Text="BirthYear"></asp:Label>
                    </td>
                    <td>
                        <!-- Search by BirthYear -->
                        <asp:DropDownList ID="dropdownBirthYear" type="text" CssClass="form-control" runat="server" />
                    </td>
                    <td>
                        <asp:Label ID="lblName" for="txtBoxName" CssClass="col-2 col-form-label" runat="server" Text="Name"></asp:Label>
                    </td>
                    <td>
                        <!-- Search by Name -->
                        <asp:TextBox ID="txtBoxName" CssClass="form-control" runat="server"></asp:TextBox>
                    </td>
                    <td>
                        <!-- Search Button -->
                        <asp:Button ID="btnSearch" runat="server" Text="Search" CssClass="formButton" OnClick="btnSearch_Click" />
                    </td>
                </tr>
                <!-- Not Found Message -->
                <asp:Label ID="lblSearchRecruitError" runat="server" CssClass="alert alert-danger small font-weight-bold text-center" role="alert"></asp:Label>
                <br />
                <!-- Exception Message -->
                <asp:Label ID="lblExceptionError" runat="server" CssClass="alert alert-danger small font-weight-bold text-center" role="alert"></asp:Label>
            </table>



        </div>
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
                                <th></th>
                                <!-- Empty cell above Edit Button  / Note by Yayun Yang(Kim)-->
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
                                        <td><a href="EditRecruits.aspx?id=<%#Eval("RecruitID") %>">Edit</a></td>
                                        <!-- Redirect to edit recruit page-->
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
