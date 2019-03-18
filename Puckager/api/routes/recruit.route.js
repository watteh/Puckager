const express = require('express');
const app = express();
const recruitRouter = express.Router();

let recruitModel = require('../models/Recruit');

// GET List of Recruits page - READ Operation
recruitRouter.get('/recruits', (req, res, next) => {
    recruitModel.find((err, recruitList) => {
        if (err) {
            return console.error(err);
        } else {
            res.render('', {
                // title: 'List of Recruits',
                recruitList: recruitList
            });
        }
    });
});

/* GET route for processing the Add page */
// recruitRouter.get('/addrecruit', (req, res, next) => {
//     res.render('', {
//         title: 'Add New Recruit'
//     });
// });

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
            res.redirect('/recruits')
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
            // Refresh the List of Recruits
            res.redirect('/recruits');
        }
    });
});

/* GET request - display the Edit page */
recruitRouter.get('detail/:id', (req, res, next) => {
    let id = req.params.id;

    recruitModel.findById(id, (err, recruitObject) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            // Show the EDIT view
            res.render('recruits/edit', {
                title: 'Edit Recruit',
                recruit: recruitObject
            });
        }
    });
});

/* POST request - Update the database with data from the Edit page */
recruitRouter.post('detail/:id', (req, res, next) => {
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
            // Refresh the list of recruits
            res.redirect('/recruits');
        }
    });
});

// Defined store route
// recruitRoutes.route('/addrecruit').post(function(req, res) {
//     let recruit = new Recruit(req.body);
//     recruit.save()
//         .then(recruit => {
//             res.status(200).json({ 'recruit': 'recruit added successfully' });
//         })
//         .catch(err => {
//             res.status(400).send("unable to save to database");
//         });
// });

// // Defined get data(index or listing) route
// recruitRoutes.route('/recruits').get(function(req, res) {
//     Business.find(function(err, recruits) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json(recruits);
//         }
//     });
// });

// Defined edit route
//   recruitRoutes.route('/detail/:id').get(function (req, res) {
//     let id = req.params.id;
//     Recruit.findById(id, function (err, recruit){
//         res.json(recruit);
//     });
//   });

//  Defined update route
//   recruitRoutes.route('detail/:id').post(function (req, res) {
//       Recruit.findById(req.params.id, function(err, next, recruit) {
//       if (!recruit)
//         return next(new Error('Could not load Document'));
//       else {
//           recruit.person_name = req.body.person_name;
//           business.business_name = req.body.business_name;
//           business.business_gst_number = req.body.business_gst_number;

//           recruit.save().then(recruit => {
//             res.json('Update complete');
//         })
//         .catch(err => {
//               res.status(400).send("unable to update the database");
//         });
//       }
//     });
//   });

// Defined delete | remove | destroy route
// recruitRoutes.route('/delete/:id').get(function(req, res) {
//     Recruit.findByIdAndRemove({ _id: req.params.id }, function(err, recruit) {
//         if (err) res.json(err);
//         else res.json('Successfully removed');
//     });
// });

module.exports = recruitRouter;