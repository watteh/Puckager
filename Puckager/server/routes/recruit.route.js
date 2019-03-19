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
recruitRouter.get('/addrecruit', (req, res, next) => {
    res.json({
        success: true,
        msg: 'Successfully displayed Add Page'
    });
});

/* POST route for processing the Add page */
recruitRouter.post('/addrecruit', (req, res, next) => {
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
recruitRouter.get('/delete/:id', (req, res, next) => {
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

/* GET request - display the Edit page */
recruitRouter.get('/detail/:id', (req, res, next) => {
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
recruitRouter.post('/detail/:id', (req, res, next) => {
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

module.exports = recruitRouter;