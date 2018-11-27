using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DGFScouting
{
    public class PlayerReport
    {
        private int playerScoutingReportId;
        private int recruitId;
        private int accountId;
        private int skating;
        private int individualOffensiveSkills;
        private int individualDefensiveSkills;
        private int offensiveTeamPlay;
        private int defensiveTeamPlay;
        private int hockeySense;
        private int strengthPower;
        private int workEthic;
        private int overallRanking;
        private string notes;
        private DateTime scoutingReportDate;

        public PlayerReport() { }

        public PlayerReport(int playerScoutingReportId, int recruitId, int accountId, int skating, int individualOffensiveSkills, int individualDefensiveSkills, int offensiveTeamPlay, int defensiveTeamPlay, int hockeySense, int strengthPower, int workEthic, int overallRanking, string notes, DateTime scoutingReportDate)
        {
            this.PlayerScoutingReportId = playerScoutingReportId;
            this.RecruitId = recruitId;
            this.AccountId = accountId;
            this.Skating = skating;
            this.IndividualOffensiveSkills = individualOffensiveSkills;
            this.IndividualDefensiveSkills = individualDefensiveSkills;
            this.OffensiveTeamPlay = offensiveTeamPlay;
            this.DefensiveTeamPlay = defensiveTeamPlay;
            this.HockeySense = hockeySense;
            this.StrengthPower = strengthPower;
            this.WorkEthic = workEthic;
            this.OverallRanking = overallRanking;
            this.Notes = notes;
            this.ScoutingReportDate = scoutingReportDate;
        }

        public int PlayerScoutingReportId { get => playerScoutingReportId; set => playerScoutingReportId = value; }
        public int RecruitId { get => recruitId; set => recruitId = value; }
        public int AccountId { get => accountId; set => accountId = value; }
        public int Skating { get => skating; set => skating = value; }
        public int IndividualOffensiveSkills { get => individualOffensiveSkills; set => individualOffensiveSkills = value; }
        public int IndividualDefensiveSkills { get => individualDefensiveSkills; set => individualDefensiveSkills = value; }
        public int OffensiveTeamPlay { get => offensiveTeamPlay; set => offensiveTeamPlay = value; }
        public int DefensiveTeamPlay { get => defensiveTeamPlay; set => defensiveTeamPlay = value; }
        public int HockeySense { get => hockeySense; set => hockeySense = value; }
        public int StrengthPower { get => strengthPower; set => strengthPower = value; }
        public int WorkEthic { get => workEthic; set => workEthic = value; }
        public int OverallRanking { get => overallRanking; set => overallRanking = value; }
        public string Notes { get => notes; set => notes = value; }
        public DateTime ScoutingReportDate { get => scoutingReportDate; set => scoutingReportDate = value; }
    }
}