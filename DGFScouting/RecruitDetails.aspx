<%@ Page Title="" Language="C#" MasterPageFile="~/Master_DGFScouting.Master" AutoEventWireup="true" CodeBehind="RecruitDetails.aspx.cs" Inherits="DGFScouting.RecruitDetails" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="container-fluid">
        <asp:Label ID="lblLoggedInUser" runat="server" Text=""></asp:Label>
    </div>

    <div class="recruit-dets">
        <br />
        <br />
        <asp:Label ID="searchLabel" runat="server" Text="Search by ID:"></asp:Label><asp:TextBox ID="searchText" runat="server"></asp:TextBox><asp:Button ID="Button1" runat="server" Text="Search" OnClick="Button1_Click" />
        <br />
        <br />
        <asp:Label ID="noRecord" runat="server" Text=""></asp:Label>
        <br />
        <br />
        
        <asp:ListView ID="ListView1" runat="server" DataKeyNames="RecruitID" OnItemCommand="ListView1_ItemCommand">
            <AlternatingItemTemplate>
                <tr style="background-color:#FFF8DC;">
                    <td>
                        <asp:Label ID="RecruitIDLabel" runat="server" Text='<%# Eval("RecruitID") %>' />
                    </td>
                    <td>
                        <asp:Label ID="FirstNameLabel" runat="server" Text='<%# Eval("FirstName") %>' />
                    </td>
                    <td>
                        <asp:Label ID="LastNameLabel" runat="server" Text='<%# Eval("LastName") %>' />
                    </td>
                    <td>
                        <asp:Label ID="PhoneNumberLabel" runat="server" Text='<%# Eval("PhoneNumber") %>' />
                    </td>
                    <td>
                        <asp:Label ID="EmailAddressLabel" runat="server" Text='<%# Eval("EmailAddress") %>' />
                    </td>
                    <td>
                        <asp:Label ID="BirthYearLabel" runat="server" Text='<%# Eval("BirthYear") %>' />
                    </td>
                    <td>
                        <asp:Label ID="GraduationYearLabel" runat="server" Text='<%# Eval("GraduationYear") %>' />
                    </td>
                    <td>
                        <asp:Label ID="PositionLabel" runat="server" Text='<%# Eval("Position") %>' />
                    </td>
                    <td>
                        <asp:Label ID="RecruitRatingLabel" runat="server" Text='<%# Eval("RecruitRating") %>' />
                    </td>
                    <td>
                        <asp:Label ID="NotesLabel" runat="server" Text='<%# Eval("Notes") %>' />
                    </td>
                      <td>
                        <asp:Button ID="ChangeButton" runat="server" CommandName="Change" Text="Edit" CommandArgument='<%# Eval("RecruitID") %>' />
                        <asp:Button ID="EraseButton" runat="server" CommandName="Erase" Text="Delete" CommandArgument='<%# Eval("RecruitID") %>' />
                    </td>
                </tr>
            </AlternatingItemTemplate>
            <EditItemTemplate>
                <tr style="background-color:#008A8C;color: #FFFFFF;">
                    <td>
                        <asp:Button ID="UpdateButton" runat="server" CommandName="Update" Text="Update" />
                        <asp:Button ID="CancelButton" runat="server" CommandName="Cancel" Text="Cancel" />
                    </td>
                    <td>
                        <asp:Label ID="RecruitIDLabel1" runat="server" Text='<%# Eval("RecruitID") %>' />
                    </td>
                    <td>
                        <asp:TextBox ID="FirstNameTextBox" runat="server" Text='<%# Bind("FirstName") %>' />
                    </td>
                    <td>
                        <asp:TextBox ID="LastNameTextBox" runat="server" Text='<%# Bind("LastName") %>' />
                    </td>
                    <td>
                        <asp:TextBox ID="PhoneNumberTextBox" runat="server" Text='<%# Bind("PhoneNumber") %>' />
                    </td>
                    <td>
                        <asp:TextBox ID="EmailAddressTextBox" runat="server" Text='<%# Bind("EmailAddress") %>' />
                    </td>
                    <td>
                        <asp:TextBox ID="BirthYearTextBox" runat="server" Text='<%# Bind("BirthYear") %>' />
                    </td>
                    <td>
                        <asp:TextBox ID="GraduationYearTextBox" runat="server" Text='<%# Bind("GraduationYear") %>' />
                    </td>
                    <td>
                        <asp:TextBox ID="PositionTextBox" runat="server" Text='<%# Bind("Position") %>' />
                    </td>
                    <td>
                        <asp:TextBox ID="RecruitRatingTextBox" runat="server" Text='<%# Bind("RecruitRating") %>' />
                    </td>
                    <td>
                        <asp:TextBox ID="NotesTextBox" runat="server" Text='<%# Bind("Notes") %>' />
                    </td>
                     <td>
                        <asp:Button ID="ChangeButton" runat="server" CommandName="Change" Text="Edit" CommandArgument='<%# Eval("@RecruitID") %>' />
                        <asp:Button ID="EraseButton" runat="server" CommandName="Erase" Text="Delete" CommandArgument='<%# Eval("@RecruitID") %>' />
                    </td>
                </tr>
            </EditItemTemplate>
            <EmptyDataTemplate>
                <table style="background-color: #FFFFFF;border-collapse: collapse;border-color: #999999;border-style:none;border-width:1px;" runat="server">
                    <tr>
                        <td>No data was returned.</td>
                    </tr>
                </table>
            </EmptyDataTemplate>
            <InsertItemTemplate>
                <tr style="">
                    <td>
                        <asp:Button ID="InsertButton" runat="server" CommandName="Insert" Text="Insert" />
                        <asp:Button ID="CancelButton" runat="server" CommandName="Cancel" Text="Clear" />
                    </td>
                    <td>&nbsp;</td>
                    <td>
                        <asp:TextBox ID="FirstNameTextBox" runat="server" Text='<%# Bind("FirstName") %>' />
                    </td>
                    <td>
                        <asp:TextBox ID="LastNameTextBox" runat="server" Text='<%# Bind("LastName") %>' />
                    </td>
                    <td>
                        <asp:TextBox ID="PhoneNumberTextBox" runat="server" Text='<%# Bind("PhoneNumber") %>' />
                    </td>
                    <td>
                        <asp:TextBox ID="EmailAddressTextBox" runat="server" Text='<%# Bind("EmailAddress") %>' />
                    </td>
                    <td>
                        <asp:TextBox ID="BirthYearTextBox" runat="server" Text='<%# Bind("BirthYear") %>' />
                    </td>
                    <td>
                        <asp:TextBox ID="GraduationYearTextBox" runat="server" Text='<%# Bind("GraduationYear") %>' />
                    </td>
                    <td>
                        <asp:TextBox ID="PositionTextBox" runat="server" Text='<%# Bind("Position") %>' />
                    </td>
                    <td>
                        <asp:TextBox ID="RecruitRatingTextBox" runat="server" Text='<%# Bind("RecruitRating") %>' />
                    </td>
                    <td>
                        <asp:TextBox ID="NotesTextBox" runat="server" Text='<%# Bind("Notes") %>' />
                    </td>
                     <td>
                        <asp:Button ID="ChangeButton" runat="server" CommandName="Change" Text="Edit" CommandArgument='<%# Eval("RecruitID") %>' />
                        <asp:Button ID="EraseButton" runat="server" CommandName="Erase" Text="Delete" CommandArgument='<%# Eval("RecruitID") %>' />
                    </td>
                </tr>
            </InsertItemTemplate>
            <ItemTemplate>
                <tr style="background-color:#DCDCDC;color: #000000;">
                    <td>
                        <asp:Label ID="RecruitIDLabel" runat="server" Text='<%# Eval("RecruitID") %>' />
                    </td>
                    <td>
                        <asp:Label ID="FirstNameLabel" runat="server" Text='<%# Eval("FirstName") %>' />
                    </td>
                    <td>
                        <asp:Label ID="LastNameLabel" runat="server" Text='<%# Eval("LastName") %>' />
                    </td>
                    <td>
                        <asp:Label ID="PhoneNumberLabel" runat="server" Text='<%# Eval("ContactNumber") %>' />
                    </td>
                    <td>
                        <asp:Label ID="EmailAddressLabel" runat="server" Text='<%# Eval("EmailAddress") %>' />
                    </td>
                    <td>
                        <asp:Label ID="BirthYearLabel" runat="server" Text='<%# Eval("BirthYear") %>' />
                    </td>
                    <td>
                        <asp:Label ID="GraduationYearLabel" runat="server" Text='<%# Eval("GraduationYear") %>' />
                    </td>
                    <td>
                        <asp:Label ID="PositionLabel" runat="server" Text='<%# Eval("Position") %>' />
                    </td>
                    <td>
                        <asp:Label ID="RecruitRatingLabel" runat="server" Text='<%# Eval("RecruitRating") %>' />
                    </td>
                    <td>
                        <asp:Label ID="NotesLabel" runat="server" Text='<%# Eval("Notes") %>' />
                    </td>
                     <td>
                        <asp:Button ID="ChangeButton" runat="server" CommandName="Change" Text="Edit" CommandArgument='<%# Eval("RecruitID") %>' />
                        <asp:Button ID="EraseButton" runat="server" CommandName="Erase" Text="Delete" CommandArgument='<%# Eval("RecruitID") %>' />
                    </td>
                </tr>
            </ItemTemplate>
            <LayoutTemplate>
                <table runat="server">
                    <tr runat="server">
                        <td runat="server">
                            <table id="itemPlaceholderContainer" runat="server" border="1" style="background-color: #FFFFFF;border-collapse: collapse;border-color: #999999;border-style:none;border-width:1px;font-family: Verdana, Arial, Helvetica, sans-serif;">
                                <tr runat="server" style="background-color:#DCDCDC;color: #000000;">
                                    <th runat="server">RecruitID</th>
                                    <th runat="server">FirstName</th>
                                    <th runat="server">LastName</th>
                                    <th runat="server">PhoneNumber</th>
                                    <th runat="server">EmailAddress</th>
                                    <th runat="server">BirthYear</th>
                                    <th runat="server">GraduationYear</th>
                                    <th runat="server">Position</th>
                                    <th runat="server">RecruitRating</th>
                                    <th runat="server">Notes</th>
                                    <th runat="server">Action</th>
                                </tr>
                                <tr id="itemPlaceholder" runat="server">
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr runat="server">
                        <td runat="server" style="text-align: center;background-color: #CCCCCC;font-family: Verdana, Arial, Helvetica, sans-serif;color: #000000;"></td>
                    </tr>
                </table>
            </LayoutTemplate>
            <SelectedItemTemplate>
                <tr style="background-color:#008A8C;font-weight: bold;color: #FFFFFF;">
                    <td>
                        <asp:Label ID="RecruitIDLabel" runat="server" Text='<%# Eval("RecruitID") %>' />
                    </td>
                    <td>
                        <asp:Label ID="FirstNameLabel" runat="server" Text='<%# Eval("FirstName") %>' />
                    </td>
                    <td>
                        <asp:Label ID="LastNameLabel" runat="server" Text='<%# Eval("LastName") %>' />
                    </td>
                    <td>
                        <asp:Label ID="PhoneNumberLabel" runat="server" Text='<%# Eval("PhoneNumber") %>' />
                    </td>
                    <td>
                        <asp:Label ID="EmailAddressLabel" runat="server" Text='<%# Eval("EmailAddress") %>' />
                    </td>
                    <td>
                        <asp:Label ID="BirthYearLabel" runat="server" Text='<%# Eval("BirthYear") %>' />
                    </td>
                    <td>
                        <asp:Label ID="GraduationYearLabel" runat="server" Text='<%# Eval("GraduationYear") %>' />
                    </td>
                    <td>
                        <asp:Label ID="PositionLabel" runat="server" Text='<%# Eval("Position") %>' />
                    </td>
                    <td>
                        <asp:Label ID="RecruitRatingLabel" runat="server" Text='<%# Eval("RecruitRating") %>' />
                    </td>
                    <td>
                        <asp:Label ID="NotesLabel" runat="server" Text='<%# Eval("Notes") %>' />
                    </td>
                  
                </tr>
            </SelectedItemTemplate>
        </asp:ListView>
        

         <asp:SqlDataSource  ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:DGFScoutingConnectionString %>" SelectCommand="SELECT * FROM [tblRecruit]">
        </asp:SqlDataSource>
        <br />
        <asp:Label ID="recruitIdLabel" runat="server" Text="RecruitID:" /><asp:TextBox ID="recruitIDText" runat="server"></asp:TextBox>
        <br />
        <br />
        <asp:Label ID="firstNameLabel" runat="server" Text="First Name:"></asp:Label><asp:TextBox ID="firstName" runat="server" ></asp:TextBox>
        <br />
        <br />
        <asp:Label ID="lastNameLabel" runat="server" Text="Last Name:" /><asp:TextBox ID="lastName" runat="server"></asp:TextBox>
        <br />
        <br />
        <asp:Label ID="phoneNumLabel" runat="server" Text="Phone Number:" /><asp:TextBox ID="phoneNum" runat="server"></asp:TextBox>
        <br />
        <br />
        <asp:Label ID="emailLabel" runat="server" Text="Email Address:" /><asp:TextBox ID="emailAddy" runat="server"></asp:TextBox>
        <br />
        <br />
        <asp:Label ID="birthYearLabel" runat="server" Text="Birth Year:" /><asp:TextBox ID="birthYear" runat="server"></asp:TextBox>
        <br />
        <br />
        <asp:Label ID="gradYearLabel" runat="server" Text="Graduation Year:" /><asp:TextBox ID="gradYear" runat="server"></asp:TextBox>
        <br />
        <br />
        <asp:Label ID="posLabel" runat="server" Text="Position" /><asp:TextBox ID="posText" runat="server"></asp:TextBox>
        <br />
        <br />
        <asp:Label ID="recruitLabel" runat="server" Text="Recruit Rating:" /><asp:TextBox ID="recruitRate" runat="server"></asp:TextBox>
        <br />
        <br />
        <asp:Label ID="notesLabel" runat="server" Text="Notes:" /><asp:TextBox ID="notesText" runat="server"></asp:TextBox>
        <br />
        <br />
        <asp:Button ID="updateButton" runat="server" Text="Update" OnClick="updateButton_Click1" /><asp:Button ID="cancelButton" runat="server" Text="Cancel" OnClick="cancelButton_Click" />
    </div>

</asp:Content>
