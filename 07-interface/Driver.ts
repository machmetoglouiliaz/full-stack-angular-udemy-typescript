import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";
import { TennisCoach } from "./TennisCoach";

let cricketCoach = new CricketCoach();
let golfCoach = new GolfCoach();
let tennisCoach = new TennisCoach();

let coaches: Coach[] = [];
coaches.push(cricketCoach);
coaches.push(tennisCoach);
coaches.push(golfCoach);

for (let c of coaches) {
    console.log(c.getDailyWorkout());
}