<%@ Page Title="" Language="C#" MasterPageFile="~/Master_DGFScouting.Master" AutoEventWireup="true" CodeBehind="ViewGoalieScoutingReport.aspx.cs" Inherits="DGFScouting.ViewGoalieScoutingReport" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

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
                <asp:Label ID="lblSkatingData" for="txtSkatingData" CssClass="col-2 col-form-label" runat="server" Text=""></asp:Label>
            </div>
        </div>

        <div class="form-group row">
            <asp:Label ID="lblAgilitySpeed" for="txtAgilitySpeed" CssClass="col-2 col-form-label" runat="server" Text="Agility & Speed:"></asp:Label>
            <div class="col-3">
                <asp:Label ID="lblAgilitySpeedData" for="txtAgiligtyData" CssClass="col-2 col-form-label" runat="server" Text=""></asp:Label>
            </div>
        </div>

        <div class="form-group row">
            <asp:Label ID="lblTrafficReboundControl" for="txtTrafficReboundControl" CssClass="col-2 col-form-label" runat="server" Text="Traffic & Rebound Control:"></asp:Label>
            <div class="col-3">
                <asp:Label ID="lblTrafficReboundControlData" for="txtTrafficReboundControlData" CssClass="col-2 col-form-label" runat="server" Text=""></asp:Label>
            </div>
        </div>

        <div class="form-group row">
            <asp:Label ID="lblHockeySense" for="txtHockeySense" CssClass="col-2 col-form-label" runat="server" Text="Hockey Sense:"></asp:Label>
            <div class="col-3">
                <asp:Label ID="lblHockeySenseData" for="txtHockeySenseData" CssClass="col-2 col-form-label" runat="server" Text=""></asp:Label>
            </div>
        </div>

        <div class="form-group row">
            <asp:Label ID="lblStrengthFitness" for="txtStrengthFitness" CssClass="col-2 col-form-label" runat="server" Text="Strength & Fitness:"></asp:Label>
            <div class="col-3">
                <asp:Label ID="lblStrengthFitnessData" for="txtStrengthFitnessData" CssClass="col-2 col-form-label" runat="server" Text=""></asp:Label>
            </div>
        </div>

        <div class="form-group row">
            <asp:Label ID="lblMentalToughness" for="txtMentalToughness" CssClass="col-2 col-form-label" runat="server" Text="Mental Toughness:"></asp:Label>
            <div class="col-3">
                <asp:Label ID="lblMentalToughnessData" for="txtMentalToughnessData" CssClass="col-2 col-form-label" runat="server" Text=""></asp:Label>
            </div>
        </div>

        <div class="form-group row">
            <asp:Label ID="lblBattleMentality" for="txtBattleMentality" CssClass="col-2 col-form-label" runat="server" Text="Battle Mentality:"></asp:Label>
            <div class="col-3">
                <asp:Label ID="lblBattleMentalityData" for="txtBattleMentalityData" CssClass="col-2 col-form-label" runat="server" Text=""></asp:Label>
            </div>
        </div>

        <div class="form-group row">
            <asp:Label ID="lblOverallRanking" for="txtOverallRanking" CssClass="col-2 col-form-label" runat="server" Text="Overall Ranking:"></asp:Label>
            <div class="col-3">
                <asp:Label ID="lblOverallRankingData" for="txtOverallRankingData" CssClass="col-2 col-form-label" runat="server" Text=""></asp:Label>
            </div>
        </div>

        <div class="form-group row">
            <asp:Label ID="lblNotes" for="txtNotes" CssClass="col-2 col-form-label" runat="server" Text="Notes:"></asp:Label>
            <div class="col-3">
                <asp:Label ID="lblNotesData" runat="server" TextMode="MultiLine" Width="500px"></asp:Label>
            </div>
        </div>

        <div class="form-group row">
            <asp:Label ID="lblCreateDate" for="txtCreateDate" CssClass="col-2 col-form-label" runat="server" Text="Last Modified Date: "></asp:Label>
            <div class="col-3">
                <asp:Label ID="lblCreateDateData" runat="server" Width="500px"></asp:Label>
            </div>
        </div>


            <asp:Button ID="BtnBack" runat="server" Text="Back" CssClass="formButton" OnClick="BtnBack_Click" />
    </div>
</asp:Content>
