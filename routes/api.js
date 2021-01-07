var db = require("../models");

module.exports = function(app) {
    db.Workout.create({ name: "Workout" })
      .then(dbWorkout => {
        console.log(dbWorkout);
      })
      .catch(({ message }) => {
        console.log(message);
      });

  
    app.get("/exercises", (req, res) => {
      db.Workout.find({})
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.json(err);
        });
    });
  
    app.post("/submit", ({ body }, res) => {
      db.Workout.create(body)
        .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { workouts: _id } }, { new: true }))
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.json(err);
       });
    });
  
    app.get("/populatedworkout", (req, res) => {
      db.Workout.find({})
      .populate("exercise")
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
    });

};