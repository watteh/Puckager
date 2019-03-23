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
                msg: 'Successfully displayed recruit',
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

    recruitModel.update({ _id: id }, {
        $set: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            contactNumber: req.body.contactNumber,
            emailAddress: req.body.emailAddress,
            birthYear: req.body.birthYear,
            graduationYear: req.body.graduationYear,
            currentTeam: req.body.currentTeam,
            jerseyNumber: req.body.jerseyNumber,
            position: req.body.position,
            mothersName: req.body.mothersName,
            fathersName: req.body.fathersName,
            status: req.body.status
        }
    }, (err) => {
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

    let report;

    recruitModel.findById(id, (err, recruitObject) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            if (recruitObject.position === 'Goalie') {
                report = {
                    "skating": parseInt(req.body.skating),
                    "agilitySpeed": parseInt(req.body.agilitySpeed),
                    "trafficReboundControl": parseInt(req.body.trafficReboundControl),
                    "hockeySense": parseInt(req.body.hockeySense),
                    "strengthFitness": parseInt(req.body.strengthFitness),
                    "mentalToughness": parseInt(req.body.mentalToughness),
                    "battleMentality": parseInt(req.body.battleMentality),
                    "overallRanking": parseInt(req.body.overallRanking),
                    "notes": req.body.notes,
                    "reportDate": Date.now()
                };

                recruitModel.findOneAndUpdate({ _id: id }, { $push: { goalieReports: report } }, (err) => {
                    if (err) {
                        console.log(err);
                        res.end(err);
                    } else {
                        res.json({
                            success: true,
                            msg: 'Successfully added report',
                            report: report
                        });
                    }
                });
            } else {
                report = {
                    "skating": parseInt(req.body.skating),
                    "individualOffensiveSkills": parseInt(req.body.individualOffensiveSkills),
                    "individualDefensiveSkills": parseInt(req.body.individualDefensiveSkills),
                    "offensiveTeamPlay": parseInt(req.body.offensiveTeamPlay),
                    "defensiveTeamPlay": parseInt(req.body.defensiveTeamPlay),
                    "hockeySense": parseInt(req.body.hockeySense),
                    "strengthPower": parseInt(req.body.strengthPower),
                    "workEthic": parseInt(req.body.workEthic),
                    "overallRanking": parseInt(req.body.overallRanking),
                    "notes": req.body.notes,
                    "reportDate": Date.now()
                };
                recruitModel.findOneAndUpdate({ _id: id }, { $push: { playerReports: report } }, (err) => {
                    if (err) {
                        console.log(err);
                        res.end(err);
                    } else {
                        res.json({
                            success: true,
                            msg: 'Successfully added report',
                            report: report
                        });
                    }
                });
            }
        }
    });
});

module.exports = recruitRouter;