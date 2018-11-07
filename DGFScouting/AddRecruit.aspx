<%@ Page Title="" Language="C#" MasterPageFile="~/Master_DGFScouting.Master" AutoEventWireup="true" CodeBehind="AddRecruit.aspx.cs" Inherits="DGFScouting.AddRecruit" UnobtrusiveValidationMode="None" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

<div class="container-fluid">
        
    <asp:Label ID="lblLoggedInUser" runat="server" Text=""></asp:Label>
    
    <div class="formBody">

        <div class="form-group row">
            <asp:Label ID="lblFirstName" for="txtBoxFirstName" CssClass="col-2 col-form-label" runat="server" Text="First Name:"></asp:Label>
                <div class="col-3">
                    <asp:TextBox ID="txtBoxFirstName" CssClass="form-control" placeholder="Joseph" runat="server"></asp:TextBox>
                </div>
                <div class="col-4">
                    <!-- Validation to check the field is not null and that it only contains alpha characters -->
                    <asp:RequiredFieldValidator ID="RequiredFieldValidatorFirstName" ControlToValidate="txtBoxFirstName" runat="server" ErrorMessage="*First Name is required" Display="Dynamic" CssClass="alert alert-danger small font-weight-bold text-center errorMessage" role="alert"></asp:RequiredFieldValidator>
                    <asp:RegularExpressionValidator ID="RegularExpressionValidatorFirstNme" ControlToValidate="txtBoxFirstName" runat="server" ErrorMessage="*Uppercase and lowercase letters only" Display="Dynamic" CssClass="alert alert-danger small font-weight-bold text-center errorMessage" role="alert" ValidationExpression="^[a-zA-Z ]*$"></asp:RegularExpressionValidator>
                </div>           
        </div>

        <div class="form-group row">
            <asp:Label ID="lblLastName" for="txtBoxLastName" CssClass="col-2 col-form-label" runat="server" Text="Last Name:"></asp:Label>
                <div class="col-3">
                    <asp:TextBox ID="txtBoxLastName" CssClass="form-control" placeholder="Recruit" runat="server"></asp:TextBox>
            </div>
            <div class="col-4">
                    <!-- Validation to check the field is not null and that it only contains alpha characters -->
                    <asp:RequiredFieldValidator ID="RequiredFieldValidatorLastName" ControlToValidate="txtBoxLastName" runat="server" ErrorMessage="*Last Name is required" Display="Dynamic" CssClass="alert alert-danger small font-weight-bold text-center errorMessage" role="alert"></asp:RequiredFieldValidator>
                    <asp:RegularExpressionValidator ID="RegularExpressionValidatorLastName" ControlToValidate="txtBoxLastName" runat="server" ErrorMessage="*Uppercase and lowercase letters only" Display="Dynamic" CssClass="alert alert-danger small font-weight-bold text-center errorMessage" role="alert" ValidationExpression="^[a-zA-Z ]*$"></asp:RegularExpressionValidator>
            </div> 
        </div>

        <div class="form-group row">
            <asp:Label ID="lblPhoneNumber" for="txtPhoneNumber" CssClass="col-2 col-form-label" runat="server" Text="Phone Number:"></asp:Label>
                <div class="col-3">
                    <asp:TextBox ID="txtBoxPhoneNumber" CssClass="form-control" placeholder="(905) 999-1234" runat="server"></asp:TextBox>
            </div>
            <div class="col-4">
                    <!-- REGEX validation to check format is (905) 999 9999 -->
                    <asp:RegularExpressionValidator ID="RegularExpressionValidatorPhoneNumber" ControlToValidate="txtBoxPhoneNumber" runat="server" ErrorMessage="*Format must be (999) 999-9999" Display="Dynamic" CssClass="alert alert-danger small font-weight-bold text-center errorMessage" role="alert" ValidationExpression="((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}"></asp:RegularExpressionValidator>
            </div>
        </div>

        <div class="form-group row">
            <asp:Label ID="lblEmailAddress" for="txtEmailAddress" CssClass="col-2 col-form-label" runat="server" Text="Email Address:"></asp:Label>
                <div class="col-3">
                    <asp:TextBox ID="txtBoxEmailAddress" CssClass="form-control" placeholder="joerecruit@recruit.com" runat="server"></asp:TextBox>
            </div>
            <div class="col-4">
                    <!-- REGEX validation to check format is user@domain.com -->
                    <asp:RegularExpressionValidator ID="RegularExpressionValidatorEmailAddress" ControlToValidate="txtBoxEmailAddress" runat="server" ErrorMessage="*Email address must follow the format: email@domain.com" Display="Dynamic" CssClass="alert alert-danger small font-weight-bold text-center errorMessage" role="alert" ValidationExpression="(?!.*\.\.)(^[^\.][^@\s]+@[^@\s]+\.[^@\s\.]+$)"></asp:RegularExpressionValidator>
            </div>
        </div>

        <div class="form-group row">
            <asp:Label ID="lblBirthYear" for="txtBirthYear" CssClass="col-2 col-form-label" runat="server" Text="Birth Year:"></asp:Label>
                <div class="col-3">
                    <asp:TextBox ID="txtBoxBirthYear" CssClass="form-control" placeholder="2001" runat="server"></asp:TextBox>
            </div>
            <div class="col-4">
                <!-- Validation to check the field is only contains number and range is between 1900 - 2099 -->
                <asp:RegularExpressionValidator ID="RegularExpressionValidatorBirthYear" ControlToValidate="txtBoxBirthYear" runat="server" ErrorMessage="*Numeric values only" Display="Dynamic" CssClass="alert alert-danger small font-weight-bold text-center errorMessage" role="alert" ValidationExpression="^(\d{4})(\d{4})?$"></asp:RegularExpressionValidator>
                <asp:RangeValidator ID="RangeValidatorBirthYear" ControlToValidate="txtBoxBirthYear" runat="server" ErrorMessage="*Range must between 1900 and 2099" MaximumValue="2099" MinimumValue="1900" Display="Dynamic" CssClass="alert alert-danger small font-weight-bold text-center errorMessage" role="alert"></asp:RangeValidator>
            </div>
        </div>

        <div class="form-group row">
            <asp:Label ID="lblGradYear" for="txtGradYear" CssClass="col-2 col-form-label" runat="server" Text="Graduation Year:"></asp:Label>
                <div class="col-3">
                    <asp:TextBox ID="txtBoxGradYear" CssClass="form-control" placeholder="2020" runat="server"></asp:TextBox>
            </div>
            <div class="col-4">
                <!-- Validation to check the field is only contains number and range is between 1900 - 2099 -->
                <asp:RegularExpressionValidator ID="RegularExpressionValidatorGradYear" ControlToValidate="txtBoxGradYear" runat="server" ErrorMessage="*Numeric values only" Display="Dynamic" CssClass="alert alert-danger small font-weight-bold text-center errorMessage" role="alert" ValidationExpression="^(\d{4})(\d{4})?$"></asp:RegularExpressionValidator>
                <asp:RangeValidator ID="RangeValidatorGradYear" ControlToValidate="txtBoxGradYear" runat="server" ErrorMessage="*Range must be tween 1900 and 2099" MaximumValue="2099" MinimumValue="1900" Display="Dynamic" CssClass="alert alert-danger small font-weight-bold text-center errorMessage" role="alert"></asp:RangeValidator>
            </div>
        </div>

        <div class="form-group row">
            <asp:Label ID="lblPosition" for="txtGradYear" CssClass="col-2 col-form-label" runat="server" Text="Position:"></asp:Label>
                <div class="col-3">
                    <asp:dropdownlist ID="dropdownPosition" type="text" CssClass="form-control" runat="server">
                        <asp:ListItem Selected="True" Value="Forward">Forward</asp:ListItem>
                        <asp:ListItem Value="Defenceman">Defenceman</asp:ListItem>
                        <asp:ListItem Value="Goalie">Goalie</asp:ListItem>
                    </asp:dropdownlist>
                </div>
        </div>

        <div class="form-group row">
            <asp:Label ID="lblRating" for="txtRating" CssClass="col-2 col-form-label" runat="server" Text="Rating:"></asp:Label>
                <div class="col-3">
                    <asp:TextBox ID="txtBoxRating" CssClass="form-control" placeholder="3" runat="server"></asp:TextBox>
            </div>
            <div class="col-4">
                <!-- REGEX validation which only accepts numeric values between 1-5 -->
                <asp:RegularExpressionValidator ID="RegularExpressionValidatorRating" ControlToValidate="txtBoxRating" runat="server" ErrorMessage="*Numeric values only between 1 and 5" Display="Dynamic" CssClass="alert alert-danger small font-weight-bold text-center errorMessage" role="alert" ValidationExpression="^[1-5]?$"></asp:RegularExpressionValidator>
            </div>
        </div>

        <div class="form-group row">
            <asp:Label ID="lblNotes" for="txtNotes" CssClass="col-2 col-form-label" runat="server" Text="Notes:"></asp:Label>
                <div class="col-3">
                    <asp:TextBox ID="txtBoxNotes" type="text" TextMode="multiline" Rows="3" Colums="25" CssClass="form-control" placeholder="Recruit Notes" runat="server"></asp:TextBox>                        
                </div>
        </div>

</div>
    
    <asp:button ID="btnAddRecruit" runat="server" text="Add Recruit" CssClass="formButton" OnClick="btnAddRecruit_Click"/>
    <asp:button ID="btnClear" runat="server" text="Clear" CssClass="formButton" OnClientClick="this.form.reset();return false;"/>
    <asp:Label ID="lblAddRecruitError" runat="server" Text="Error: Recruit not added to the database" CssClass="alert alert-danger small font-weight-bold text-center" role="alert"></asp:Label>

    </div>
</asp:Content>