const db = require("../models");

module.exports = function(app) {

  app.get("/api/workouts", (req, res) => {
    db.Workout.aggregate(
      [{$addFields: {
        totalDuration: {
          $sum: "$exercises.duration"
          }
        }
      }]
    ).then(dbWorkouts => {
      res.json(dbWorkouts);
    })
  });

  app.post("/api/workouts", (req, res) => {
    db.Workout.create({})
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.json(err);
      });
    });

  app.put("/api/workouts/:id", ({ body, params }, res) => {
    db.Workout.updateOne({_id: params.id}, {$push: {exercises: body} })
      .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.json(err);
    }); 

  });
  
  app.get("/api/workouts/range", ({ query }, res) => {
    db.Workout.aggregate([
      {$addFields: {
        totalDuration: {
          $sum: "$exercises.duration"
          }
        }
      },
      {$limit: 7}
    ]).then(dbWorkouts => {
      res.json(dbWorkouts);
    })
  });



  };
