using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DGFScouting
{
    public class GoalieReport
    {
        private int goalieScoutingReportId;
        private int recruitId;
        private int accountId;
        private int skating;
        private int agilitySpeed;
        private int trafficReboundControl;
        private int hockeySense;
        private int strengthFitness;
        private int mentalToughness;
        private int battleMentality;
        private int overallRanking;
        private string notes;
        private DateTime scoutingReportDate;

        public GoalieReport() { }

        public GoalieReport(int goalieScoutingReportId, int recruitId, int accountId, int skating, int agilitySpeed, int trafficReboundControl, int hockeySense, int strengthFitness, int mentalToughness, int battleMentality, int overallRanking, string notes, DateTime scoutingReportDate)
        {
            this.goalieScoutingReportId = goalieScoutingReportId;
            this.recruitId = recruitId;
            this.accountId = accountId;
            this.skating = skating;
            this.agilitySpeed = agilitySpeed;
            this.trafficReboundControl = trafficReboundControl;
            this.hockeySense = hockeySense;
            this.strengthFitness = strengthFitness;
            this.mentalToughness = mentalToughness;
            this.battleMentality = battleMentality;
            this.overallRanking = overallRanking;
            this.notes = notes;
            this.scoutingReportDate = scoutingReportDate;
        }

        public int GoalieScoutingReportId { get => goalieScoutingReportId; set => goalieScoutingReportId = value; }
        public int RecruitId { get => recruitId; set => recruitId = value; }
        public int AccountId { get => accountId; set => accountId = value; }
        public int Skating { get => skating; set => skating = value; }
        public int AgilitySpeed { get => agilitySpeed; set => agilitySpeed = value; }
        public int TrafficReboundControl { get => trafficReboundControl; set => trafficReboundControl = value; }
        public int HockeySense { get => hockeySense; set => hockeySense = value; }
        public int StrengthFitness { get => strengthFitness; set => strengthFitness = value; }
        public int MentalToughness { get => mentalToughness; set => mentalToughness = value; }
        public int BattleMentality { get => battleMentality; set => battleMentality = value; }
        public int OverallRanking { get => overallRanking; set => overallRanking = value; }
        public string Notes { get => notes; set => notes = value; }
        public DateTime ScoutingReportDate { get => scoutingReportDate; set => scoutingReportDate = value; }
    }
}