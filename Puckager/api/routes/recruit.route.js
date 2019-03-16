const express = require('express');
const app = express();
const recruitRoutes = express.Router();

let Recruit = require('../models/Recruit');

// Defined store route
recruitRoutes.route('/addrecruit').post(function(req, res) {
    let recruit = new Recruit(req.body);
    recruit.save()
        .then(recruit => {
            res.status(200).json({ 'recruit': 'recruit added successfully' });
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

// Defined get data(index or listing) route
recruitRoutes.route('/recruits').get(function(req, res) {
    Business.find(function(err, recruits) {
        if (err) {
            console.log(err);
        } else {
            res.json(recruits);
        }
    });
});

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
recruitRoutes.route('/delete/:id').get(function(req, res) {
    Recruit.findByIdAndRemove({ _id: req.params.id }, function(err, recruit) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = recruitRoutes;