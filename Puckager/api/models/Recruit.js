const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Recruit = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    contactnumber: { type: String },
    emailAddress: { type: String },
    birthYear: { type: String },
    graduationYear: { type: String },
    currentTeam: { type: String },
    jerseynumber: { type: String },
    position: { type: String },
    mothersName: { type: String },
    fathersName: { type: String },
    status: { type: String },
    dateAdded: { type: Date },
    playerReports: { type: String }, // PlayerReportSchema
    goalieReports: { type: String } // GoalieReportSchema
}, {
    collections: 'recruit'
});

module.exports = mongoose.model('recruit', Recruit);