<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="DGFScouting.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>DGF Scouting</title>
    <link href="css/bootstrap.css" rel="stylesheet" />
    <link href="css/LoginForm.css" rel="stylesheet" />
    <script src="js/Login.js"></script>
</head>

<body>
    <form id="form1" runat="server">    
            
        <div class="login-page">
            <div class="form">               
                <div class="login-form">
                    <asp:Image ID="imageLogo" runat="server" ImageUrl="~/images/DGFLogo.png" CssClass="imageLogo" />
                    <asp:TextBox ID="txtBoxLoginUserName" type="text" runat="server" placeholder="username" CssClass="formTextbox"></asp:TextBox>
                    <asp:TextBox ID="txtBoxLoginPassword" type="password" runat="server" placeholder="password" CssClass="formTextbox"></asp:TextBox>         
                    <asp:Button ID="btnLogin" runat="server" Text="Login" CssClass="formButton" OnClick="btnLogin_Click" />             
                    <p class="message">Not registered? <a href="RegisterAccount.aspx">Create an account</a></p>
                </div>
                <div class="errorMessage">
                     <asp:Label ID="lblLoginError" runat="server" Text="Invalid Username or Password" CssClass="alert alert-danger small font-weight-bold text-center validationError" role="alert"></asp:Label>
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