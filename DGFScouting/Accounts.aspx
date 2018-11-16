<%@ Page Title="" Language="C#" MasterPageFile="~/Master_DGFScouting.Master" AutoEventWireup="true" CodeBehind="Accounts.aspx.cs" Inherits="DGFScouting.ListAccounts" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="container my-5">
        <div class="row">
            <div class="col-md.12">
                <h4>Accounts</h4>
                <a class="btn btn-block btn-primary col-md-2 float-right" href="AddAccount.aspx">Add Account</a>
                <div class="table-responsive">
                    <table id="accountTable" class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th style="text-align: center">ID</th>
                                <th style="text-align: center">User Name</th>
                                <th style="text-align: center">Password</th>
                                <th style="text-align: center">EmailAddress</th>
                                <th style="text-align: center">AccountType</th>
                                <th style="text-align: center">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            <asp:ListView ID="ListViewAccounts" runat="server" OnItemCommand="ListViewAccounts_ItemCommand">
                                <ItemTemplate>
                                    <tr class="table table-bordered table-striped">
                                        <td><%#Eval("AccountID") %></td>
                                        <td><%#Eval("UserName") %></td>
                                        <td><%#DGFScouting.Utility.ConvertToPasswordFormat(Eval("Password").ToString()) %></td>
                                        <!--Display passwords as "***"-->
                                        <td><%#Eval("EmailAddress") %></td>
                                        <td><%# DGFScouting.Utility.ConvertStringToAccountType(Eval("AccountType").ToString()) %></td>
                                        <td>
                                            <asp:Button runat="server" Text="Update" CssClass="btn btn-block btn-primary" CommandName="updateAccount" CommandArgument='<%#Eval("AccountID") %>'/>
                                            <asp:Button runat="server" Text="Delete" CssClass="btn btn-block btn-danger" CommandName="deleteAccount" CommandArgument='<%#Eval("AccountID") %>'/>
                                        </td>
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
