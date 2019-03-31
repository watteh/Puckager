const express = require('express');
const recruitRouter = express.Router();
let jwt = require('jsonwebtoken');
let passport = require('passport');
let DB = require('../config/db');
let recruitModel = require('../models/Recruit');

let userModel = require('../models/user');
let User = userModel.User;

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
                user: req.user,
                displayName: req.user ? req.user.displayName : ''
            });
        }
    });
});

/* GET route for processing the Add page */
recruitRouter.get('/recruits/addrecruit', (req, res, next) => {
    res.json({
        success: true,
        msg: 'Successfully displayed Add Page',
        displayName: req.user ? req.user.displayName : ''
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
                msg: 'Successfully added new recruit!',
                displayName: req.user ? req.user.displayName : ''
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
                msg: 'Successfully deleted recruit',
                displayName: req.user ? req.user.displayName : ''
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
                recruit: recruitObject,
                displayName: req.user ? req.user.displayName : ''
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
                recruit: recruitObject,
                displayName: req.user ? req.user.displayName : ''
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
            status: req.body.status,
            submittedBy: req.body.submittedBy
        }
    }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.json({
                success: true,
                msg: 'Successfully edited recruit',
                displayName: req.user ? req.user.displayName : ''
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
                    "submittedBy": req.body.submittedBy,
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
                            report: report,
                            displayName: req.user ? req.user.displayName : ''
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
                    "submittedBy": req.body.submittedBy,
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
                            report: report,
                            displayName: req.user ? req.user.displayName : ''
                        });
                    }
                });
            }
        }
    });
});

/* POST request - edit report in Database */
recruitRouter.post('/editreport/:recruitid/:reportid', (req, res, next) => {
    let recruitID = req.params.recruitid;
    let reportID = req.params.reportid;

    let report;

    recruitModel.findById(recruitID, (err, recruitObject) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            if (recruitObject.position === 'Goalie') {
                report = {
                    skating: parseInt(req.body.skating),
                    agilitySpeed: parseInt(req.body.agilitySpeed),
                    trafficReboundControl: parseInt(req.body.trafficReboundControl),
                    hockeySense: parseInt(req.body.hockeySense),
                    strengthFitness: parseInt(req.body.strengthFitness),
                    mentalToughness: parseInt(req.body.mentalToughness),
                    battleMentality: parseInt(req.body.battleMentality),
                    overallRanking: parseInt(req.body.overallRanking),
                    notes: req.body.notes,
                    submittedBy: req.body.submittedBy,
                    reportDate: Date.now()
                };

                recruitModel.findOneAndUpdate({ _id: recruitID, "goalieReports._id": reportID }, { $set: { "goalieReports.$": report } }, (err) => {
                    if (err) {
                        console.log(err);
                        res.end(err);
                    } else {
                        res.json({
                            success: true,
                            msg: 'Successfully edited report',
                            report: report,
                            displayName: req.user ? req.user.displayName : ''
                        });
                    }
                });
            } else {
                report = {
                    skating: parseInt(req.body.skating),
                    individualOffensiveSkills: parseInt(req.body.individualOffensiveSkills),
                    individualDefensiveSkills: parseInt(req.body.individualDefensiveSkills),
                    offensiveTeamPlay: parseInt(req.body.offensiveTeamPlay),
                    defensiveTeamPlay: parseInt(req.body.defensiveTeamPlay),
                    hockeySense: parseInt(req.body.hockeySense),
                    strengthPower: parseInt(req.body.strengthPower),
                    workEthic: parseInt(req.body.workEthic),
                    overallRanking: parseInt(req.body.overallRanking),
                    notes: req.body.notes,
                    submittedBy: req.body.submittedBy,
                    reportDate: Date.now()
                };
                recruitModel.findOneAndUpdate({ _id: recruitID, "playerReports._id": reportID }, { $set: { "playerReports.$": report } }, (err) => {
                    if (err) {
                        console.log(err);
                        res.end(err);
                    } else {
                        res.json({
                            success: true,
                            msg: 'Successfully edited report',
                            report: report,
                            displayName: req.user ? req.user.displayName : ''
                        });
                    }
                });
            }
        }
    });
});

/* GET - get login page or redirect to about page if already logged in */
recruitRouter.get('/login', (req, res, next) => {
    // Check if user is already logged in
    if (!req.user) {
        res.json({
            title: 'Login',
            msg: 'Login Page',
            displayName: req.user ? req.user.displayName : ''
        });
    } else {
        return res.redirect('/');
    }
});

/* POST - post login */
recruitRouter.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.json({
                success: false,
                msg: 'Error: login failed.'
            });
        }
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }

            const payload = {
                _id: user._id,
                displayName: user.displayName,
                username: user.username,
                email: user.email,
                accountType: user.accountType
            }

            const authToken = jwt.sign(payload, DB.secret, {
                expiresIn: 604800 // 1 week
            });

            return res.json({
                success: true,
                msg: 'User login successful!',
                user: payload,
                token: authToken
            });
        });
    })(req, res, next);
});

/* GET - get registration page, or send to about page if already logged in */
recruitRouter.get('/registration', (req, res, next) => {
    // Check if user is already logged in
    if (!req.user) {
        res.json({
            title: 'Register',
            msg: 'Registration Page',
            displayName: req.user ? req.user.displayName : ''
        });
    } else {
        res.json({
            title: 'Register',
            msg: 'User already logged in',
            displayName: req.user ? req.user.displayName : ''
        });
    }
});

/* POST - post registration page */
recruitRouter.post('/registration', (req, res, next) => {
    // create new user object
    let newUser = new User({
        username: req.body.username,
        email: req.body.email,
        displayName: req.body.displayName,
        accountType: 'None'
    });

    User.register(newUser, req.body.password, (err) => {
        if (err) {
            console.log('Error Inserting new user');
            if (err.name == 'UserExistsError') {
                console.log('Error inserting new user');
            }
            return res.json({
                success: false,
                msg: 'Error: registration failed'
            });
        } else {
            // if no error exists, then registration is successful and user redirected
            return passport.authenticate('local')(req, res, () => {
                return res.json({
                    success: true,
                    msg: 'Registration successful!'
                });
            });
        }
    });
});

recruitRouter.get('/logout', (req, res, next) => {
    req.logout();
    return res.json({
        success: true,
        msg: 'User logged out'
    });
});

// GET List of Accounts page - READ Operation
recruitRouter.get('/accounts', (req, res, next) => {
    User.find((err, userList) => {
        if (err) {
            return console.error(err);
        } else {
            return res.json({
                success: true,
                msg: `Account List Displayed Successfully`,
                userList: userList,
                current: req.user,
                displayName: req.body.name ? req.body.user.name : ''
            });
        }
    });
});

/* GET route for processing the User Add page */
recruitRouter.get('/addaccount', (req, res, next) => {
    res.json({
        success: true,
        msg: 'Successfully displayed Add Page',
        current: req.user,
        displayName: req.user ? req.user.displayName : ''
    });
});

/* POST route for processing the Add page */
recruitRouter.post('/addaccount', (req, res, next) => {
    // create new user object
    let newUser = new User({
        "username": req.body.username,
        "email": req.body.email,
        "displayName": req.body.displayName,
        "accountType": req.body.accountType
    });

    User.register(newUser, req.body.password, (err) => {
        if (err) {
            console.log('Error Inserting new user');
            if (err.name == 'UserExistsError') {
                console.log('Error inserting new user');
            }
            return res.json({
                success: false,
                msg: 'Error: registration failed'
            });
        } else {
            // if no error exists, then registration is successful and user redirected
            return res.json({
                success: true,
                current: req.user,
                msg: 'Registration successful!'
            });
        }
    });
});

/* GET request to perform the delete action */
recruitRouter.get('/deleteaccount/:id', (req, res, next) => {
    let id = req.params.id;

    User.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            return res.json({
                success: true,
                msg: 'Successfully deleted user',
                current: req.user,
                displayName: req.user ? req.user.displayName : ''
            });
        }
    });
});

/* GET request - display the Details page */
recruitRouter.get('/accountdetails/:id', (req, res, next) => {
    let id = req.params.id;

    User.findById(id, (err, userObject) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.json({
                success: true,
                msg: 'Successfully displayed User',
                user: userObject,
                current: req.user,
                displayName: req.user ? req.user.displayName : ''
            });
        }
    });
});

/* GET request - display the Edit page */
recruitRouter.get('/updateaccount/:id', (req, res, next) => {
    let id = req.params.id;

    User.findById(id, (err, userObject) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.json({
                success: true,
                msg: 'Successfully displayed user to edit',
                user: userObject,
                current: req.user,
                displayName: req.user ? req.user.displayName : ''
            });
        }
    });
});

/* POST request - Update the database with data from the Edit page */
recruitRouter.post('/updateaccount/:id', (req, res, next) => {
    let id = req.params.id;

    User.update({ _id: id }, {
        $set: {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            displayName: req.body.displayName,
            accountType: req.body.accountType
        }
    }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.json({
                success: true,
                msg: 'Successfully updated user',
                current: req.user,
                displayName: req.user ? req.user.displayName : ''
            });
        }
    });
});

module.exports = recruitRouter;