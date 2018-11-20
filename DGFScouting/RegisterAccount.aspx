<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="RegisterAccount.aspx.cs" Inherits="DGFScouting.RegisterAccount" UnobtrusiveValidationMode="None" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>DGF Scouting</title>
    <link href="css/bootstrap.css" rel="stylesheet" />
    <link href="css/RegisterForm.css" rel="stylesheet" />
</head>
<body>
    <form id="form1" runat="server">        
        <div class="login-page">
            <div class="form">
                <div class="register-form">
                    <asp:Image ID="image1" runat="server" ImageUrl="~/images/DGFLogo.png" CssClass="imageLogo" />
                    
                    <asp:TextBox ID="txtBoxRegisterUsername" type="text" runat="server" placeholder="userName" CssClass="formTextbox"></asp:TextBox>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidatorUsername" runat="server" ControlToValidate="txtBoxRegisterUsername" ErrorMessage="Username is required" Display="Dynamic" CssClass="alert alert-danger small font-weight-bold text-center validationError" role="alert"></asp:RequiredFieldValidator>

                    <asp:TextBox ID="txtBoxRegisterPassword" type="password" runat="server" placeholder="password" CssClass="formTextbox"></asp:TextBox>
                    <asp:RequiredFieldValidator ID="RequiredFieldValidatorPassword" runat="server" ControlToValidate="txtBoxRegisterPassword" ErrorMessage="*Password is required" Display="Dynamic" CssClass="alert alert-danger small font-weight-bold text-center validationError" role="alert"></asp:RequiredFieldValidator>
                    <!-- Password must contain one letter, one number and be longer than six characters -->
                    <asp:RegularExpressionValidator ID="RegularExpressionValidatorPassword" runat="server" ControlToValidate="txtBoxRegisterPassword" ErrorMessage="Password must contain one letter, one number, and be longer than six characters" Display="Dynamic" CssClass="alert alert-danger small font-weight-bold text-center validationError" role="alert"  ValidationExpression="^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$"></asp:RegularExpressionValidator>


                    <asp:TextBox ID="txtBoxRegisterEmailAddress" type="text" runat="server" placeholder="email address" CssClass="formTextbox"></asp:TextBox> 
                    <asp:RequiredFieldValidator ID="RequiredFieldValidatorEmailAddress" runat="server" ControlToValidate="txtBoxRegisterEmailAddress" ErrorMessage="*Email Address is required" Display="Dynamic" CssClass="alert alert-danger small font-weight-bold text-center validationError" role="alert"></asp:RequiredFieldValidator>
                    <!-- REGEX to ensure format matches user@domain.com -->
                    <asp:RegularExpressionValidator ID="RegularExpressionValidatorEmailAddress" runat="server" ControlToValidate="txtBoxRegisterEmailAddress" ErrorMessage="*Email address must follow the format: email@domain.com" Display="Dynamic" CssClass="alert alert-danger small font-weight-bold text-center validationError" role="alert" ValidationExpression="(?!.*\.\.)(^[^\.][^@\s]+@[^@\s]+\.[^@\s\.]+$)"></asp:RegularExpressionValidator>

                    <asp:Button ID="btnRegister" runat="server" Text="Register" CssClass="formButton" OnClick="btnRegister_Click"/>               
                    <p class="message">Already registered? <a href="Default.aspx">Sign In</a></p>
                </div> 
                <div class="errorMessage">
                    <asp:Label ID="lblRegistrationError" runat="server" Text="Registration failed." CssClass="alert alert-danger small font-weight-bold text-center" role="alert"></asp:Label>
                </div> 
            </div>            
        </div>        
        
        <div>
            <footer class="page-footer font-small text-grey">
                <div class="footer-copyright text-center py-3">© 2018 Copyright: DGF Scouting</div>
            </footer>
        </div> 
    </form>
</body>
</html>