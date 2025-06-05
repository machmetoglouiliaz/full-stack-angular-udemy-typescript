"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
// Create instances of shape and circle
let circle = new Circle_1.Circle(2, 3, 4);
let rectangle = new Rectangle_1.Rectangle(2, 3, 5, 10);
// Initialize a new shape type array
let shapes = [];
// Add some shapes to the array
shapes.push(circle);
shapes.push(rectangle);
for (let s of shapes) {
    console.log(s.getInfo());
    console.log(s.calculateArea());
    console.log();
}
