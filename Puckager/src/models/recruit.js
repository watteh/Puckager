const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and Model
const RecruitSchema = new Schema({
  firstName: String,
  lastName: String,
  contactNumber: String,
  emailAddress: String,
  birthYear: String,
  graduationYear: String,
  currentTeam: String,
  jerseyNumber: String,
  position: String,
  mothersName: String,
  fathersName: String,
  status: String,
  dateAdded: Date,
  playerReports: [PlayerReportSchema],
  goalieReports: [GoalieReportSchema],
});

const PlayerReportSchema = new Schema({
  skating: Number,
  individualOffensiveSkills: Number,
  individualDefensiveSkills: Number,
  offensiveTeamPlay: Number,
  defensiveTeamPlay: Number,
  hockeySense: Number,
  strengthPower: Number,
  workEthic: Number,
  overallRanking: Number,
  notes: String,
  reportDate: Date
});

const GoalieReportSchema = new Schema({
  skating: Number,
  agilitySpeed: Number,
  trafficReboundControl: Number,
  hockeySense: Number,
  strengthFitness: Number,
  mentalToughness: Number,
  battleMentality: Number,
  overallRanking: Number,
  notes: String,
  reportDate: Date
});

const Recruit = mongoose.model('recruit', RecruitSchema)

module.exports = Recruit;
