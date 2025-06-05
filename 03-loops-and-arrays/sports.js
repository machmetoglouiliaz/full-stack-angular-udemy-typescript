"use strict";
let sportsOne = ["Golf", "Cricket", "Tennis", "Swimming"];
for (let i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
for (let sport of sportsOne) {
    if (sport == "Golf")
        console.log(sport + " <<< My favorite!");
    else
        console.log(sport);
}
