"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CricketCoach_1 = require("./CricketCoach");
const GolfCoach_1 = require("./GolfCoach");
const TennisCoach_1 = require("./TennisCoach");
let cricketCoach = new CricketCoach_1.CricketCoach();
let golfCoach = new GolfCoach_1.GolfCoach();
let tennisCoach = new TennisCoach_1.TennisCoach();
let coaches = [];
coaches.push(cricketCoach);
coaches.push(tennisCoach);
coaches.push(golfCoach);
for (let c of coaches) {
    console.log(c.getDailyWorkout());
}
