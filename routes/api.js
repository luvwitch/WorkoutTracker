var db = require("../models");

module.exports = function(app) {

  app.post("/api/workout", (req, res) => {
    db.Workout.create(req.body, (err, data) => {
      if (err) {
        res.json(err);        
      } else {
        res.json(data);
      }
    });
  });

  app.put("/api/workout/:id", ({ body, params }, res) => {
    db.Workout.updateOne(
      {_id: req.params.id}, {$push: {exercises: req.body}}, (err, data) => {
        if (err) {
          res.json(err);
        } else {
          res.json(data);
        }
      });    
  });
  
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(dbWorkouts => {
        res.json(dbWorkouts);
    });
  });

};