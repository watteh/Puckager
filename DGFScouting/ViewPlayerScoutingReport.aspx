<%@ Page Title="" Language="C#" MasterPageFile="~/Master_DGFScouting.Master" AutoEventWireup="true" CodeBehind="ViewPlayerScoutingReport.aspx.cs" Inherits="DGFScouting.ViewPlayerScoutingReport" %>

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
                    <asp:Label ID="lblSkatingData" for="txtSkatingData" CssClass="col-2 col-form-label" runat="server" Text=""></asp:Label>
                </div>
            </div>

            <div class="form-group row">
                <asp:Label ID="lblIndividualOffesiveSkills" for="txtIndividualOffesiveSkills" CssClass="col-2 col-form-label" runat="server" Text="Individual Offensive Skills:"></asp:Label>
                <div class="col-3">
                    <asp:Label ID="lblIndividualOffesiveSkillsData" for="txtIndividualOffesiveSkillsData" CssClass="col-2 col-form-label" runat="server" Text=""></asp:Label>
                </div>
            </div>

            <div class="form-group row">
                <asp:Label ID="lblIndividualDefensiveSkills" for="txtIndividualDefensiveSkills" CssClass="col-2 col-form-label" runat="server" Text="Individual Defensive Skills:"></asp:Label>
                <div class="col-3">
                    <asp:Label ID="lblIndividualDefensiveSkillsData" for="txtIndividualDefensiveSkillsData" CssClass="col-2 col-form-label" runat="server" Text=""></asp:Label>
                </div>
            </div>

            <div class="form-group row">
                <asp:Label ID="lblOffensiveTeamPlay" for="txtOffensiveTeamPlay" CssClass="col-2 col-form-label" runat="server" Text="Offensive Team Play:"></asp:Label>
                <div class="col-3">
                    <asp:Label ID="lblOffensiveTeamPlayData" for="txtOffensiveTeamPlayData" CssClass="col-2 col-form-label" runat="server" Text=""></asp:Label>

                </div>
            </div>

            <div class="form-group row">
                <asp:Label ID="lblDefensiveTeamPlay" for="txtDefensiveTeamPlay" CssClass="col-2 col-form-label" runat="server" Text="Defensive Team Play:"></asp:Label>
                <div class="col-3">
                    <asp:Label ID="lblDefensiveTeamPlayData" for="txtDefensiveTeamPlayData" CssClass="col-2 col-form-label" runat="server" Text=""></asp:Label>
                    </div>
                </div>

                <div class="form-group row">
                    <asp:Label ID="lblHockeySense" for="txtHockeySense" CssClass="col-2 col-form-label" runat="server" Text="Hockey Sense:"></asp:Label>
                    <div class="col-3">
                        <asp:Label ID="lblHockeySenseData" for="txtHockeySenseData" CssClass="col-2 col-form-label" runat="server" Text=""></asp:Label>
                    </div>
                </div>

                <div class="form-group row">
                    <asp:Label ID="lblStrengthPower" for="txtStrengthPower" CssClass="col-2 col-form-label" runat="server" Text="Strength Power:"></asp:Label>
                    <div class="col-3">
                        <asp:Label ID="lblStrengthPowerData" for="txtStrengthPowerData" CssClass="col-2 col-form-label" runat="server" Text=""></asp:Label>
                    </div>
                </div>

                <div class="form-group row">
                    <asp:Label ID="lblWorkEthic" for="txtWorkEthic" CssClass="col-2 col-form-label" runat="server" Text="Work Ethic:"></asp:Label>
                    <div class="col-3">
                        <asp:Label ID="lblWorkEthicData" for="txtWorkEthicData" CssClass="col-2 col-form-label" runat="server" Text=""></asp:Label>
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
                    <asp:Label ID="lblCreateDate" for="txtCreateDate" CssClass="col-2 col-form-label" runat="server" Text="Created date: "></asp:Label>
                    <div class="col-3">
                        <asp:Label ID="lblCreateDateData" runat="server" Width="500px"></asp:Label>
                    </div>
                </div>

                    <asp:Button ID="BtnBack" runat="server" Text="Back" CssClass="formButton" OnClick="BtnBack_Click" />
                </div>
            </div>
</asp:Content>
