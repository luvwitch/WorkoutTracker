# WorkoutTracker

## Description

A website which uses a combination of an Atlas mongodb server to create and track daily workouts.

## User Story

* As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.


## Table of Contents
* [Usage](#usage)
* [Demo](#demo)
* [Contact](#contact)

## Usage

Upon downloading the necessary files, within the console run the command: 
```bash
npm i
```
This will begin installing the necessary extra packages needed to run the application. They are already defined within the package.json so git will recognize what needs to be specifically installed, saving the user time it would take to install each package individually.

The server will be started by using the following command:

```bash
npm start
```
Once the server is active, the browser can be opened to the address ' localhost:3000/ ' and the workout tracker will be fully functional!

Even simpler, accessing the website through its heroku deployment takes you to the functioning program without a need to save, run, or install any files or packages.


## Demo

The home page of the application looks like this:

![home](https://github.com/luvwitch/WorkoutTracker/blob/main/public/image/home.png?raw=true)

Clicking the new workout button allows you to begin a new workout.

![add](https://github.com/luvwitch/WorkoutTracker/blob/main/public/image/add.png?raw=true)

You can add multiple exercises within a single workout and differentiate between "cardio" and "resistance" training. Once everything is added, you can click the "complete" button to finish a workout. You can also continue your latest workout at a later time from the home page by pressing "continue workout" instead of "new workout".

![resistance](https://github.com/luvwitch/WorkoutTracker/blob/main/public/image/resistance.png?raw=true)

The dashboard will show you two different charts tracking your workout progress from the past week. It uses different colors to differentiate between exercises and charts how many minutes were spent on each exercise overall, and how much weight was lifted total for each exercise.

![dashboard](https://github.com/luvwitch/WorkoutTracker/blob/main/public/image/dashboard.png?raw=true)


This application is live at: 

https://workoutbreakout.herokuapp.com/


## Contact

Any further questions? Please send me an email at:

itsalexkelly@gmail.com

To view my other projects feel free to view my Github profile at:

github.com/luvwitch