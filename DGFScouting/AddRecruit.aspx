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
            <asp:Label ID="lblPhoneNumber" for="txtPhoneNumber" CssClass="col-2 col-form-label" runat="server" Text="Contact Number:"></asp:Label>
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
            <asp:Label ID="lblCurrentTeam" for="txtCurrentTeam" CssClass="col-2 col-form-label" runat="server" Text="Current Team:"></asp:Label>
                <div class="col-3">
                    <asp:TextBox ID="txtBoxCurrentTeam" CssClass="form-control" placeholder="NYS Bantam AA" runat="server"></asp:TextBox>
            </div>
            <div class="col-4">
                <!-- Validation to check the field only contains alpha characters -->
                <asp:RegularExpressionValidator ID="RegularExpressionValidator1" ControlToValidate="txtBoxCurrentTeam" runat="server" ErrorMessage="*Uppercase and lowercase letters only" Display="Dynamic" CssClass="alert alert-danger small font-weight-bold text-center errorMessage" role="alert" ValidationExpression="^[a-zA-Z ]*$"></asp:RegularExpressionValidator>
            </div> 
        </div>

        <div class="form-group row">
            <asp:Label ID="lblJerseyNumber" for="txtJerseyNumber" CssClass="col-2 col-form-label" runat="server" Text="Jersey #:"></asp:Label>
                <div class="col-3">
                    <asp:TextBox ID="txtBoxJerseyNumber" CssClass="form-control" placeholder="19" runat="server"></asp:TextBox>
            </div>
            <div class="col-4">
                <!-- Validation to check the field is only contains number and range is between 1 - 99 -->
                <asp:RegularExpressionValidator ID="RegularExpressionValidatorJerseyNumber" ControlToValidate="txtBoxJerseyNumber" runat="server" ErrorMessage="*Numeric values only (1-99)" Display="Dynamic" CssClass="alert alert-danger small font-weight-bold text-center errorMessage" role="alert" ValidationExpression="^(\d{2})?$"></asp:RegularExpressionValidator>
                <asp:RangeValidator ID="RangeValidatorJerseyNumber" ControlToValidate="txtBoxJerseyNumber" runat="server" ErrorMessage="*Range must be tween 1 and 99" MaximumValue="99" MinimumValue="1" Display="Dynamic" CssClass="alert alert-danger small font-weight-bold text-center errorMessage" role="alert"></asp:RangeValidator>
            </div>
        </div>

        <div class="form-group row">
            <asp:Label ID="lblPosition" for="txtPosition" CssClass="col-2 col-form-label" runat="server" Text="Position:"></asp:Label>
                <div class="col-3">
                    <asp:dropdownlist ID="dropdownPosition" type="text" CssClass="form-control" runat="server">
                        <asp:ListItem Selected="True" Value="Forward">Forward</asp:ListItem>
                        <asp:ListItem Value="Defenceman">Defenceman</asp:ListItem>
                        <asp:ListItem Value="Goalie">Goalie</asp:ListItem>
                    </asp:dropdownlist>
                </div>
        </div>

        <div class="form-group row">
            <asp:Label ID="lblMothersName" for="txtMothersName" CssClass="col-2 col-form-label" runat="server" Text="Mother's Name:"></asp:Label>
                <div class="col-3">
                    <asp:TextBox ID="txtBoxMothersName" CssClass="form-control" placeholder="Rita" runat="server"></asp:TextBox>
            </div>
            <div class="col-4">
                <!-- Validation to check the field only contains alpha characters -->
                <asp:RegularExpressionValidator ID="RegularExpressionValidatorMothersName" ControlToValidate="txtBoxMothersName" runat="server" ErrorMessage="*Uppercase and lowercase letters only" Display="Dynamic" CssClass="alert alert-danger small font-weight-bold text-center errorMessage" role="alert" ValidationExpression="^[a-zA-Z ]*$"></asp:RegularExpressionValidator>
            </div> 
        </div>

        <div class="form-group row">
            <asp:Label ID="lblFathersName" for="txtFathersName" CssClass="col-2 col-form-label" runat="server" Text="Father's Name:"></asp:Label>
                <div class="col-3">
                    <asp:TextBox ID="txtBoxFathersName" CssClass="form-control" placeholder="John" runat="server"></asp:TextBox>
            </div>
            <div class="col-4">
                <!-- Validation to check the field only contains alpha characters -->
                <asp:RegularExpressionValidator ID="RegularExpressionValidatorFathersName" ControlToValidate="txtBoxFathersName" runat="server" ErrorMessage="*Uppercase and lowercase letters only" Display="Dynamic" CssClass="alert alert-danger small font-weight-bold text-center errorMessage" role="alert" ValidationExpression="^[a-zA-Z ]*$"></asp:RegularExpressionValidator>
            </div> 
        </div>

        <div class="form-group row">
            <asp:Label ID="lblStatus" for="txtStatus" CssClass="col-2 col-form-label" runat="server" Text="Status:"></asp:Label>
                <div class="col-3">
                    <asp:dropdownlist ID="dropdownStatus" type="text" CssClass="form-control" runat="server">
                        <asp:ListItem Selected="True" Value="Available">Available</asp:ListItem>
                        <asp:ListItem Value="Unavailable">Unavailable</asp:ListItem>
                        <asp:ListItem Value="Committed">Committed</asp:ListItem>
                        <asp:ListItem Value="Not Interested">Not Interested</asp:ListItem>
                    </asp:dropdownlist>
                </div>
        </div>
</div>
    
    <asp:button ID="btnAddRecruit" runat="server" text="Add Recruit" CssClass="formButton" OnClick="btnAddRecruit_Click"/>
    <asp:button ID="btnClear" runat="server" text="Clear" CssClass="formButton" OnClientClick="this.form.reset();return false;"/>
    <asp:Label ID="lblAddRecruitError" runat="server" Text="Error: Recruit not added to the database" CssClass="alert alert-danger small font-weight-bold text-center" role="alert"></asp:Label>

    </div>
</asp:Content>