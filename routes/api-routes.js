const router = require("express").Router();
const Workout = require("../models/workout.js")

router.get("/api/workouts", function(req,res){
    Workout.find().then(function(data){
        res.json(data)
    }).catch (function(err){
        res.json(err)
    })
});

router.get("/api/workouts/range", function(req,res){
    Workout.find().limit(7).then(function(data){
        res.json(data)
    }).catch (function(err){
        res.json(err)
    })
});

router.post("/api/workouts", function(req,res){
    Workout.create({}).then(function(data){
        res.json(data)
    }).catch (function(err){
        res.json(err)
    })
});

router.put("/api/workouts/:id", function({body, params}, res){
    Workout.findByIdAndUpdate(
        params.id,
        {$push:{exercises:body}},
        {new:true,runValidators:true}
    ).then(function(data){
        res.json(data)
    }).catch (function(err){
        res.json(err)
    })
});

module.exports = router;