// Create Schema and Model
export class RecruitSchema {
  // tslint:disable-next-line:variable-name
  _id: string;
  firstName: string;
  lastName: string;
  contactNumber: string;
  emailAddress: string;
  birthYear: string;
  graduationYear: string;
  currentTeam: string;
  jerseyNumber: string;
  position: string;
  mothersName: string;
  fathersName: string;
  status: string;
  dateAdded: Date;
  playerReports: [{
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
  }];
  goalieReports: [{
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
  }];
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
