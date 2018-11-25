<%@ Page Title="" Language="C#" MasterPageFile="~/Master_DGFScouting.Master" AutoEventWireup="true" CodeBehind="ViewRecruit.aspx.cs" Inherits="DGFScouting.ViewRecruit" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript" lang="javascript" >  
        function confirm_delete()
        {
          if (confirm("Are you sure you want to delete?")==true)
            return true;
          else
            return false;
        }
    </script> 
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!-- Coded by Ryan Watson 11-22-18 -->
    <div class="container-fluid">
        <asp:Label ID="lblLoggedInUser" runat="server" Text=""></asp:Label>
        <div class="formBody">

            <div class="form-group row">
                <asp:Label ID="lblFirstName" for="txtBoxFirstName" CssClass="col-2 col-form-label" runat="server" Text="First Name:"></asp:Label>
                <div class="col-3">
                    <asp:Label ID="lblRecruitFirstName" CssClass="form-control" runat="server"></asp:Label>
                </div>
            </div>

            <div class="form-group row">
                <asp:Label ID="lblLastName" for="txtBoxLastName" CssClass="col-2 col-form-label" runat="server" Text="Last Name:"></asp:Label>
                <div class="col-3">
                    <asp:Label ID="lblRecruitLastName" CssClass="form-control" runat="server"></asp:Label>
                </div>
            </div>

            <div class="form-group row">
                <asp:Label ID="lblPhoneNumber" for="txtPhoneNumber" CssClass="col-2 col-form-label" runat="server" Text="Contact Number:"></asp:Label>
                <div class="col-3">
                    <asp:Label ID="lblRecruitPhoneNumber" CssClass="form-control" runat="server"></asp:Label>
                </div>
            </div>

            <div class="form-group row">
                <asp:Label ID="lblEmailAddress" for="txtEmailAddress" CssClass="col-2 col-form-label" runat="server" Text="Email Address:"></asp:Label>
                <div class="col-3">
                    <asp:Label ID="lblRecruitEmailAddress" CssClass="form-control" runat="server"></asp:Label>
                </div>
            </div>

            <div class="form-group row">
                <asp:Label ID="lblBirthYear" for="txtBirthYear" CssClass="col-2 col-form-label" runat="server" Text="Birth Year:"></asp:Label>
                <div class="col-3">
                    <asp:Label ID="lblRecruitBirthYear" CssClass="form-control" runat="server"></asp:Label>
                </div>
            </div>

            <div class="form-group row">
                <asp:Label ID="lblGradYear" for="txtGradYear" CssClass="col-2 col-form-label" runat="server" Text="Graduation Year:"></asp:Label>
                <div class="col-3">
                    <asp:Label ID="lblRecruitGradYear" CssClass="form-control" runat="server"></asp:Label>
                </div>
            </div>

            <div class="form-group row">
                <asp:Label ID="lblCurrentTeam" for="txtCurrentTeam" CssClass="col-2 col-form-label" runat="server" Text="Current Team:"></asp:Label>
                <div class="col-3">
                    <asp:Label ID="lblRecruitCurrentTeam" CssClass="form-control" runat="server"></asp:Label>
                </div>
            </div>

            <div class="form-group row">
                <asp:Label ID="lblJerseyNumber" for="txtJerseyNumber" CssClass="col-2 col-form-label" runat="server" Text="Jersey #:"></asp:Label>
                <div class="col-3">
                    <asp:Label ID="lblRecruitJerseyNumber" CssClass="form-control" runat="server"></asp:Label>
                </div>
            </div>

            <div class="form-group row">
                <asp:Label ID="lblPosition" for="txtPosition" CssClass="col-2 col-form-label" runat="server" Text="Position:"></asp:Label>
                <div class="col-3">
                    <asp:Label ID="lblRecruitPosition" CssClass="form-control" runat="server"></asp:Label>
                </div>
            </div>

            <div class="form-group row">
                <asp:Label ID="lblMothersName" for="txtMothersName" CssClass="col-2 col-form-label" runat="server" Text="Mother's Name:"></asp:Label>
                <div class="col-3">
                    <asp:Label ID="lblRecruitMothersName" CssClass="form-control" runat="server"></asp:Label>
                </div>
            </div>

            <div class="form-group row">
                <asp:Label ID="lblFathersName" for="txtFathersName" CssClass="col-2 col-form-label" runat="server" Text="Father's Name:"></asp:Label>
                <div class="col-3">
                    <asp:Label ID="lblRecruitFathersName" CssClass="form-control" runat="server"></asp:Label>
                </div>
            </div>

            <div class="form-group row">
                <asp:Label ID="lblStatus" for="txtStatus" CssClass="col-2 col-form-label" runat="server" Text="Status:"></asp:Label>
                <div class="col-3">
                    <asp:Label ID="lblRecruitStatus" CssClass="form-control" runat="server"></asp:Label>
                </div>
            </div>
        </div>
        <%--Gabriele 25/11/18--%>
        <div class ="row">
            <asp:Button ID="BtnBack" runat="server" Text="Back" CssClass="formButton" OnClick="BtnBack_Click" /> <%-- RW --%>
            <%--<asp:Button ID="BtnDelete" runat="server" Text="Delete" CssClass="formButton" OnClick="BtnDelete_Click" />--%>
            <asp:Button ID="BtnDelete" runat="server" Text="Delete" CssClass="formButton" OnClick="BtnDelete_Click" OnClientClick="return confirm_delete()" />
            <%--TODO: placeholders for addReport & update buttons--%>
            <%--<asp:Button ID="Update" runat="server" Text="Update" CssClass="formButton" OnClick="BtnUpdate_Click" />--%>
            <%--<asp:Button ID="AddReport" runat="server" Text="AddReport" CssClass="formButton" OnClick="BtnAddReport_Click" />--%>
        </div>
    </div>
</asp:Content>
