<%@ Page Title="" Language="C#" MasterPageFile="~/Master_DGFScouting.Master" AutoEventWireup="true" CodeBehind="GoalieScoutingReport.aspx.cs" Inherits="DGFScouting.GoalieScoutingReport" UnobtrusiveValidationMode="None" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <div class="container-fluid">

        <asp:Label ID="lblLoggedInUser" runat="server" Text=""></asp:Label>

        <div class="formBody">

            <div class="form-group row">
                <asp:Label ID="lblRecruitID" for="txtRecruitID" CssClass="col-2 col-form-label" runat="server" Text="Recruit ID:"></asp:Label>
                <div class="col-3">
                    <asp:Label ID="lblRecruitIDData" for="txtRecruitIDData" CssClass="col-2 col-form-label" runat="server" Text=""></asp:Label>
                </div>
            </div>

            <div class="form-group row">
                <asp:Label ID="lblFirstName" for="txtFirstName" CssClass="col-2 col-form-label" runat="server" Text="First Name:"></asp:Label>
                <div class="col-3">
                    <asp:Label ID="lblFirstNameData" for="txtFirstNameData" CssClass="col-2 col-form-label" runat="server" Text=""></asp:Label>
                </div>
            </div>

            <div class="form-group row">
                <asp:Label ID="lblLastName" for="txtLastName" CssClass="col-2 col-form-label" runat="server" Text="Last Name:"></asp:Label>
                <div class="col-3">
                    <asp:Label ID="lblLastNameData" for="txtLastNameData" CssClass="col-2 col-form-label" runat="server" Text=""></asp:Label>
                </div>
            </div>

            <div class="form-group row">
                <asp:Label ID="lblSkating" for="txtSkating" CssClass="col-2 col-form-label" runat="server" Text="Skating:"></asp:Label>
                <div class="col-3">
                    <asp:DropDownList ID="dropdownSkating" type="text" CssClass="form-control" runat="server">
                        <asp:ListItem Selected="True" Value="1">1</asp:ListItem>
                        <asp:ListItem Value="2">2</asp:ListItem>
                        <asp:ListItem Value="3">3</asp:ListItem>
                        <asp:ListItem Value="4">4</asp:ListItem>
                        <asp:ListItem Value="5">5</asp:ListItem>
                    </asp:DropDownList>
                </div>
            </div>

            <div class="form-group row">
                <asp:Label ID="lblAgilitySpeed" for="txtAgilitySpeed" CssClass="col-2 col-form-label" runat="server" Text="Agility & Speed:"></asp:Label>
                <div class="col-3">
                    <asp:DropDownList ID="dropdownAgilitySpeed" type="text" CssClass="form-control" runat="server">
                        <asp:ListItem Selected="True" Value="1">1</asp:ListItem>
                        <asp:ListItem Value="2">2</asp:ListItem>
                        <asp:ListItem Value="3">3</asp:ListItem>
                        <asp:ListItem Value="4">4</asp:ListItem>
                        <asp:ListItem Value="5">5</asp:ListItem>
                    </asp:DropDownList>
                </div>
            </div>

            <div class="form-group row">
                <asp:Label ID="lblTrafficReboundControl" for="txtTrafficReboundControl" CssClass="col-2 col-form-label" runat="server" Text="Traffic & Rebound Control:"></asp:Label>
                <div class="col-3">
                    <asp:DropDownList ID="dropdownTrafficReboundControl" type="text" CssClass="form-control" runat="server">
                        <asp:ListItem Selected="True" Value="1">1</asp:ListItem>
                        <asp:ListItem Value="2">2</asp:ListItem>
                        <asp:ListItem Value="3">3</asp:ListItem>
                        <asp:ListItem Value="4">4</asp:ListItem>
                        <asp:ListItem Value="5">5</asp:ListItem>
                    </asp:DropDownList>
                </div>
            </div>

            <div class="form-group row">
                <asp:Label ID="lblHockeySense" for="txtHockeySense" CssClass="col-2 col-form-label" runat="server" Text="Hockey Sense:"></asp:Label>
                <div class="col-3">
                    <asp:DropDownList ID="dropdownHockeySense" type="text" CssClass="form-control" runat="server">
                        <asp:ListItem Selected="True" Value="1">1</asp:ListItem>
                        <asp:ListItem Value="2">2</asp:ListItem>
                        <asp:ListItem Value="3">3</asp:ListItem>
                        <asp:ListItem Value="4">4</asp:ListItem>
                        <asp:ListItem Value="5">5</asp:ListItem>
                    </asp:DropDownList>
                </div>
            </div>

            <div class="form-group row">
                <asp:Label ID="lblStrengthFitness" for="txtStrengthFitness" CssClass="col-2 col-form-label" runat="server" Text="Strength & Fitness:"></asp:Label>
                <div class="col-3">
                    <asp:DropDownList ID="dropdownStrengthFitness" type="text" CssClass="form-control" runat="server">
                        <asp:ListItem Selected="True" Value="1">1</asp:ListItem>
                        <asp:ListItem Value="2">2</asp:ListItem>
                        <asp:ListItem Value="3">3</asp:ListItem>
                        <asp:ListItem Value="4">4</asp:ListItem>
                        <asp:ListItem Value="5">5</asp:ListItem>
                    </asp:DropDownList>
                </div>
            </div>

            <div class="form-group row">
                <asp:Label ID="lblMentalToughness" for="txtMentalToughness" CssClass="col-2 col-form-label" runat="server" Text="Mental Toughness:"></asp:Label>
                <div class="col-3">
                    <asp:DropDownList ID="dropdownMentalToughness" type="text" CssClass="form-control" runat="server">
                        <asp:ListItem Selected="True" Value="1">1</asp:ListItem>
                        <asp:ListItem Value="2">2</asp:ListItem>
                        <asp:ListItem Value="3">3</asp:ListItem>
                        <asp:ListItem Value="4">4</asp:ListItem>
                        <asp:ListItem Value="5">5</asp:ListItem>
                    </asp:DropDownList>
                </div>
            </div>

            <div class="form-group row">
                <asp:Label ID="lblBattleMentality" for="txtBattleMentality" CssClass="col-2 col-form-label" runat="server" Text="Battle Mentality:"></asp:Label>
                <div class="col-3">
                    <asp:DropDownList ID="dropdownBattleMentality" type="text" CssClass="form-control" runat="server">
                        <asp:ListItem Selected="True" Value="1">1</asp:ListItem>
                        <asp:ListItem Value="2">2</asp:ListItem>
                        <asp:ListItem Value="3">3</asp:ListItem>
                        <asp:ListItem Value="4">4</asp:ListItem>
                        <asp:ListItem Value="5">5</asp:ListItem>
                    </asp:DropDownList>
                </div>
            </div>

            <div class="form-group row">
                <asp:Label ID="lblOverallRanking" for="txtOverallRanking" CssClass="col-2 col-form-label" runat="server" Text="Overall Ranking:"></asp:Label>
                <div class="col-3">
                    <asp:DropDownList ID="dropdownOverallRanking" type="text" CssClass="form-control" runat="server">
                        <asp:ListItem Selected="True" Value="1">1</asp:ListItem>
                        <asp:ListItem Value="2">2</asp:ListItem>
                        <asp:ListItem Value="3">3</asp:ListItem>
                        <asp:ListItem Value="4">4</asp:ListItem>
                        <asp:ListItem Value="5">5</asp:ListItem>
                    </asp:DropDownList>
                </div>
            </div>

            <div class="form-group row">
                <asp:Label ID="lblNotes" for="txtNotes" CssClass="col-2 col-form-label" runat="server" Text="Notes:"></asp:Label>
                <div class="col-3">
                    <asp:TextBox ID="txtNotes" runat="server" TextMode="MultiLine" Width="500px"></asp:TextBox>
                </div>
            </div>
        </div>

        <asp:Button ID="btnAddScoutingReport" runat="server" Text="Add Scouting Report" CssClass="formButton" OnClick="btnAddScoutingReport_Click" />
        <asp:Button ID="btnClear" runat="server" Text="Clear" CssClass="formButton" OnClientClick="this.form.reset();return false;" />
        <asp:Label ID="lblAddScoutingReportError" runat="server" Text="Error: Scouting Report not added to the database" CssClass="alert alert-danger small font-weight-bold text-center" role="alert"></asp:Label>

    </div>

</asp:Content>
