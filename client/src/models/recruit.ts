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
    _id: string;
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
    submittedBy: string;
  }];
  goalieReports: [{
    _id: string;
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
    submittedBy: string;
  }];
}

export class PlayerReportSchema {
  // tslint:disable-next-line:variable-name
  _id: string;
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
  submittedBy: string;
}

export class GoalieReportSchema {
  // tslint:disable-next-line:variable-name
  _id: string;
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
  submittedBy: string;
}
