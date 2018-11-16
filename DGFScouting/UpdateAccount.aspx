<%@ Page Title="" Language="C#" MasterPageFile="~/Master_DGFScouting.Master" AutoEventWireup="true" CodeBehind="UpdateAccount.aspx.cs" Inherits="DGFScouting.UpdateAccount" UnobtrusiveValidationMode="None" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="container my-5">
        <h4>Update Account</h4>
        <div class="formBody align-content-center">
            <div class="form-group row">
                <asp:Label ID="lblAccountIdLabel" for="lblAccountID" CssClass="col-2 col-form-label" runat="server" Text="Account ID:"></asp:Label>
                <div class="col-3">
                    <asp:Label ID="lblAccountID" type="text" runat="server" placeholder="userID" CssClass="col-form-label"></asp:Label>
                </div>
            </div>
            <div class="form-group row">
                <asp:Label ID="lblUsername" for="txtUsername" CssClass="col-2 col-form-label" runat="server" Text="User Name:"></asp:Label>
                <div class="col-3">
                    <asp:TextBox ID="txtUsername" type="text" runat="server" placeholder="userName" CssClass="form-control"></asp:TextBox>
                </div>
                <div class="col-4">
                    <asp:RequiredFieldValidator ID="RequiredFieldValidatorUsername" runat="server" ControlToValidate="txtUsername" ErrorMessage="Username is required" Display="Dynamic" CssClass="alert alert-danger small font-weight-bold text-center validationError" role="alert"></asp:RequiredFieldValidator>
                </div>
            </div>
            <div class="form-group row">
                <asp:Label ID="lblPassword" for="txtPassword" CssClass="col-2 col-form-label" runat="server" Text="Password:"></asp:Label>
                <div class="col-3">
                    <asp:TextBox ID="txtPassword" type="password" runat="server" placeholder="password" CssClass="form-control"></asp:TextBox>
                </div>
                <div class="col-4">
                    <asp:RequiredFieldValidator ID="RequiredFieldValidatorPassword" runat="server" ControlToValidate="txtPassword" ErrorMessage="*Password is required" Display="Dynamic" CssClass="alert alert-danger small font-weight-bold text-center validationError" role="alert"></asp:RequiredFieldValidator>
                    <!-- Password must contain one letter, one number and be longer than six characters -->
                    <asp:RegularExpressionValidator ID="RegularExpressionValidatorPassword" runat="server" ControlToValidate="txtPassword" ErrorMessage="Password must contain one letter, one number, and be longer than six characters" Display="Dynamic" CssClass="alert alert-danger small font-weight-bold text-center validationError" role="alert" ValidationExpression="^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$"></asp:RegularExpressionValidator>
                </div>
            </div>
            <div class="form-group row">
                <asp:Label ID="lblEmailAddress" for="txtEmailAddress" CssClass="col-2 col-form-label" runat="server" Text="Email Address:"></asp:Label>
                <div class="col-3">
                    <asp:TextBox ID="txtEmailAddress" type="text" runat="server" placeholder="email address" CssClass="form-control"></asp:TextBox>
                </div>
                <div class="col-4">
                    <asp:RequiredFieldValidator ID="RequiredFieldValidatorEmailAddress" runat="server" ControlToValidate="txtEmailAddress" ErrorMessage="*Email Address is required" Display="Dynamic" CssClass="alert alert-danger small font-weight-bold text-center validationError" role="alert"></asp:RequiredFieldValidator>
                    <!-- REGEX to ensure format matches user@domain.com -->
                    <asp:RegularExpressionValidator ID="RegularExpressionValidatorEmailAddress" runat="server" ControlToValidate="txtEmailAddress" ErrorMessage="*Email address must follow the format: email@domain.com" Display="Dynamic" CssClass="alert alert-danger small font-weight-bold text-center validationError" role="alert" ValidationExpression="(?!.*\.\.)(^[^\.][^@\s]+@[^@\s]+\.[^@\s\.]+$)"></asp:RegularExpressionValidator>
                </div>
            </div>
            <div class="form-group row">
                <asp:Label ID="lblAccountType" for="ddlAccountType" CssClass="col-2 col-form-label" runat="server" Text="Account Type:"></asp:Label>
                <div class="col-3">
                    <asp:DropDownList ID="ddlAccountType" type="text" CssClass="form-control" runat="server">
                        <asp:ListItem Value="None" Selected="True">None</asp:ListItem>
                        <asp:ListItem Value="Admin">Admin</asp:ListItem>
                        <asp:ListItem Value="Coach">Coach</asp:ListItem>
                        <asp:ListItem Value="Scout">Scout</asp:ListItem>
                    </asp:DropDownList>
                </div>
                <div class="col-4">
                    <asp:RequiredFieldValidator ID="RequiredFieldValidatorAccountType" runat="server" ControlToValidate="ddlAccountType" ErrorMessage="*Account Type selection is required" Display="Dynamic" CssClass="alert alert-danger small font-weight-bold text-center validationError" role="alert"></asp:RequiredFieldValidator>
                </div>
                <div class="row">
                    <asp:Button ID="btnUpdateAccount" runat="server" Text="Update" CssClass="formButton col-2" OnClick="btnUpdateAccount_Click" />
                    <asp:Button ID="btnClear" runat="server" Text="Clear" CssClass="formButton col-2" OnClientClick="this.form.reset();return false;" />
                    <asp:Button ID="btnCancel" runat="server" Text="Cancel" CssClass="formButton col-2" OnClick="btnCancel_Click" />
                </div>
                <div>
                    <asp:Label ID="lblUpdateAccountError" runat="server" Text="Error: Account not updated to the database" CssClass="alert alert-danger small font-weight-bold text-center" role="alert" Visible="false"></asp:Label>
                </div>
            </div>
        </div>
    </div>
</asp:Content>
