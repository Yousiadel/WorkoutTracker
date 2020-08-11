// Dependencies
// =============================================================
const router = require("express").Router();
// Requiring our Todo model
const Workout = require("../models/workout.js");
const path = require("path");

// Routes
// =============================================================

// blog route loads blog.html
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// index route loads view.html
router.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});



router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
            console.log(1);
        })
        .catch(err => {
            res.json(err);
            // console.log(2);
        });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
            console.log(3);
        })
        .catch(err => {
            res.json(err);
            // console.log(4);
        });
});

router.post("/api/workouts/", (req, res) => {
    console.log("createWorkout", req.body);
    Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
            console.log(5, dbWorkout);
        })
        .catch(err => {
            res.json(err);
            // console.log(6);
        });
    });

router.put("/api/workouts/:id", ({body, params}, res) => {
    Workout.findByIdAndUpdate(
            params.id,
        { $push: { exercises: body}}, 
        {new: true, runValidators: true})
        .then(dbWorkout => {
            res.json(dbWorkout);
            console.log(7);
        })
        .catch(err => {
            res.json(err);
            // console.log(8);
        });
});

module.exports = router;