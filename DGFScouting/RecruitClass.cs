using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DGFScouting
{
    public class RecruitClass
    {
        private int recruitID;
        private string firstName;
        private string lastName;
        private string contactNumber;
        private string emailAddress;
        private int birthyear;
        private int graduationYear;
        private string currentTeam;
        private int jerseyNumber;
        private string position;
        private string mothersName;
        private string fathersName;
        private string status;
        private DateTime dateAdded;

        public RecruitClass() { }

        public RecruitClass(int recruitID, string firstName, string lastName, string contactNumber, string emailAddress, int birthyear, int graduationYear, string currentTeam, int jerseyNumber, string position, string mothersName, string fathersName, string status, DateTime dateAdded)
        {
            this.recruitID = recruitID;
            this.firstName = firstName;
            this.lastName = lastName;
            this.contactNumber = contactNumber;
            this.emailAddress = emailAddress;
            this.birthyear = birthyear;
            this.graduationYear = graduationYear;
            this.currentTeam = currentTeam;
            this.jerseyNumber = jerseyNumber;
            this.position = position;
            this.mothersName = mothersName;
            this.fathersName = fathersName;
            this.status = status;
            this.dateAdded = dateAdded;
        }

        public int RecruitID { get => recruitID; set => recruitID = value; }
        public string FirstName { get => firstName; set => firstName = value; }
        public string LastName { get => lastName; set => lastName = value; }
        public string ContactNumber { get => contactNumber; set => contactNumber = value; }
        public string EmailAddress { get => emailAddress; set => emailAddress = value; }
        public int Birthyear { get => birthyear; set => birthyear = value; }
        public int GraduationYear { get => graduationYear; set => graduationYear = value; }
        public string CurrentTeam { get => currentTeam; set => currentTeam = value; }
        public int JerseyNumber { get => jerseyNumber; set => jerseyNumber = value; }
        public string Position { get => position; set => position = value; }
        public string MothersName { get => mothersName; set => mothersName = value; }
        public string FathersName { get => fathersName; set => fathersName = value; }
        public string Status { get => status; set => status = value; }
        public DateTime DateAdded { get => dateAdded; set => dateAdded = value; }
    }
}