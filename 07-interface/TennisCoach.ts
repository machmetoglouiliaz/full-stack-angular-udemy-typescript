import { Coach } from "./Coach";

export class TennisCoach implements Coach{

    getDailyWorkout(): string {
        return "Practice tennis!"
    }


}