const express = require('express');
const app = express();
const recruitRouter = express.Router();
let jwt = require('jsonwebtoken');

let passport = require('passport');

let recruitModel = require('../models/Recruit');

// GET List of Recruits page - READ Operation
recruitRouter.get('/recruits', (req, res, next) => {
    recruitModel.find((err, recruitList) => {
        if (err) {
            return console.error(err);
        } else {
            return res.json({
                success: true,
                msg: `Recruit List Displayed Successfully`,
                recruitList: recruitList,
                user: req.user
            });
        }
    });
});

/* GET route for processing the Add page */
recruitRouter.get('/recruits/addrecruit', (req, res, next) => {
    res.json({
        success: true,
        msg: 'Successfully displayed Add Page'
    });
});

/* POST route for processing the Add page */
recruitRouter.post('/recruits/addrecruit', (req, res, next) => {
    let newRecruit = recruitModel({
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "contactNumber": req.body.contactNumber,
        "emailAddress": req.body.emailAddress,
        "birthYear": req.body.birthYear,
        "graduationYear": req.body.graduationYear,
        "currentTeam": req.body.currentTeam,
        "jerseyNumber": req.body.jerseyNumber,
        "position": req.body.position,
        "mothersName": req.body.mothersName,
        "fathersName": req.body.fathersName,
        "status": req.body.status
    });

    recruitModel.create(newRecruit, (err, recruitModel) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.json({
                success: true,
                msg: 'Successfully added new recruit!'
            });
        }
    });
});

/* GET request to perform the delete action */
recruitRouter.get('/recruits/delete/:id', (req, res, next) => {
    let id = req.params.id;

    recruitModel.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            return res.json({
                success: true,
                msg: 'Successfully deleted recruit'
            });
        }
    });
});

/* GET request - display the Details page */
recruitRouter.get('/recruits/detail/:id', (req, res, next) => {
    let id = req.params.id;

    recruitModel.findById(id, (err, recruitObject) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.json({
                success: true,
                msg: 'Successfully displayed recruit to edit',
                recruit: recruitObject
            });
        }
    });
});

/* GET request - display the Edit page */
recruitRouter.get('/recruits/edit/:id', (req, res, next) => {
    let id = req.params.id;

    recruitModel.findById(id, (err, recruitObject) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.json({
                success: true,
                msg: 'Successfully displayed recruit to edit',
                recruit: recruitObject
            });
        }
    });
});

/* POST request - Update the database with data from the Edit page */
recruitRouter.post('/recruits/edit/:id', (req, res, next) => {
    let id = req.params.id;

    let updatedRecruit = recruitModel({
        "_id": id,
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "contactNumber": req.body.contactNumber,
        "emailAddress": req.body.emailAddress,
        "birthYear": req.body.birthYear,
        "graduationYear": req.body.graduationYear,
        "currentTeam": req.body.currentTeam,
        "jerseyNumber": req.body.jerseyNumber,
        "position": req.body.position,
        "mothersName": req.body.mothersName,
        "fathersName": req.body.fathersName,
        "status": req.body.status

    });

    recruitModel.update({ _id: id }, updatedRecruit, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.json({
                success: true,
                msg: 'Successfully edited recruit',
                recruit: updatedRecruit
            });
        }
    });
});

/* POST request - add report to Database */
recruitRouter.post('/addreport/:id', (req, res, next) => {
    let id = req.params.id;

    let updatedRecruit;

    let newReport; // = recruitModel({});

    recruitModel.findById(id, (err, recruitObject) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            if (recruitObject.position = 'Goalie') {
                updatedRecruit = recruitModel({
                    "_id": recruitObject._id,
                    "firstName": recruitObject.firstName,
                    "lastName": recruitObject.lastName,
                    "contactNumber": recruitObject.contactNumber,
                    "emailAddress": recruitObject.emailAddress,
                    "birthYear": recruitObject.birthYear,
                    "graduationYear": recruitObject.graduationYear,
                    "currentTeam": recruitObject.currentTeam,
                    "jerseyNumber": recruitObject.jerseyNumber,
                    "position": recruitObject.position,
                    "mothersName": recruitObject.mothersName,
                    "fathersName": recruitObject.fathersName,
                    "status": recruitObject.status,
                    "dateAdded": recruitObject.dateAdded,
                    "playerReports": [],
                    "goalieReports": [{
                        "skating": req.body.skating,
                        "agilitySpeed": req.body.agilitySpeed,
                        "trafficReboundControl": req.body.trafficReboundControl,
                        "hockeySense": req.body.hockeySense,
                        "strengthFitness": req.body.strengthFitness,
                        "mentalToughness": req.body.mentalToughness,
                        "battleMentality": req.body.battleMentality,
                        "overallRanking": req.body.overallRanking,
                        "notes": req.body.notes
                    }]
                });
            } else {
                updatedRecruit = recruitModel({
                    "_id": recruitObject._id,
                    "firstName": recruitObject.firstName,
                    "lastName": recruitObject.lastName,
                    "contactNumber": recruitObject.contactNumber,
                    "emailAddress": recruitObject.emailAddress,
                    "birthYear": recruitObject.birthYear,
                    "graduationYear": recruitObject.graduationYear,
                    "currentTeam": recruitObject.currentTeam,
                    "jerseyNumber": recruitObject.jerseyNumber,
                    "position": recruitObject.position,
                    "mothersName": recruitObject.mothersName,
                    "fathersName": recruitObject.fathersName,
                    "status": recruitObject.status,
                    "dateAdded": recruitObject.dateAdded,
                    "playerReports": [{
                        "skating": req.body.skating,
                        "individualOffensiveSkills": req.body.individualOffensiveSkills,
                        "individualDefensiveSkills": req.body.individualDefensiveSkills,
                        "offensiveTeamPlay": req.body.offensiveTeamPlay,
                        "defensiveTeamPlay": req.body.defensiveTeamPlay,
                        "hockeySense": req.body.hockeySense,
                        "strengthPower": req.body.strengthPower,
                        "workEthic": req.body.workEthic,
                        "overallRanking": req.body.overallRanking,
                        "notes": req.body.notes
                    }],
                    "goalieReports": []
                });
            }
        }
    });

    recruitModel.update({ _id: id }, updatedRecruit, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.json({
                success: true,
                msg: 'Successfully edited recruit',
                recruit: updatedRecruit
            });
        }
    });
});

module.exports = recruitRouter;