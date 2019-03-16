// Create Schema and Model
export default class RecruitSchema {
  firstName: string;
  lastName: string;
  contactnumber: string;
  emailAddress: string;
  birthYear: string;
  graduationYear: string;
  currentTeam: string;
  jerseynumber: string;
  position: string;
  mothersName: string;
  fathersName: string;
  status: string;
  dateAdded: Date;
  // playerReports: [PlayerReportSchema];
  // goalieReports: [GoalieReportSchema];
}

export class PlayerReportSchema {
  skating: number;
  individualOffensiveSkills: number;
  individualDefensiveSkills: number;
  offensiveTeamPlay: number;
  defensiveTeamPlay: number;
  hockeySense: number;
  strengthPower: number;
  workEthic: number;
  overallRanking: number;
  notes: string;
  reportDate: Date;
}

export class GoalieReportSchema {
  skating: number;
  agilitySpeed: number;
  trafficReboundControl: number;
  hockeySense: number;
  strengthFitness: number;
  mentalToughness: number;
  battleMentality: number;
  overallRanking: number;
  notes: string;
  reportDate: Date;
}
