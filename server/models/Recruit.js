const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and Model
let PlayerReportSchema = mongoose.Schema({
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
    submittedBy: String,
    reportDate: { type: Date, default: Date.now }
});

let GoalieReportSchema = mongoose.Schema({
    skating: Number,
    agilitySpeed: Number,
    trafficReboundControl: Number,
    hockeySense: Number,
    strengthFitness: Number,
    mentalToughness: Number,
    battleMentality: Number,
    overallRanking: Number,
    notes: String,
    submittedBy: String,
    reportDate: { type: Date, default: Date.now }
});

let RecruitSchema = mongoose.Schema({
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
    dateAdded: { type: Date, default: Date.now },
    playerReports: [{
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
        submittedBy: String,
        reportDate: { type: Date, default: Date.now }
    }],
    goalieReports: [{
        skating: Number,
        agilitySpeed: Number,
        trafficReboundControl: Number,
        hockeySense: Number,
        strengthFitness: Number,
        mentalToughness: Number,
        battleMentality: Number,
        overallRanking: Number,
        notes: String,
        submittedBy: String,
        reportDate: { type: Date, default: Date.now }
    }]
}, {
    collection: "recruits"
});

const Recruit = mongoose.model('recruit', RecruitSchema)

module.exports = Recruit;