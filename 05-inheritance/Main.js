"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import shapes
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
// Create instances of shape and circle
let shape = new Shape_1.Shape(5, 10);
let circle = new Circle_1.Circle(2, 3, 4);
let rectangle = new Rectangle_1.Rectangle(2, 3, 5, 10);
// Show the shapes
console.log(shape.getInfo());
console.log(circle.getInfo());
console.log(rectangle.getInfo());
// Initialize a new shape type array
let shapes = [];
// Add some shapes to the array
shapes.push(shape);
shapes.push(circle);
shapes.push(rectangle);
for (let s of shapes) {
    console.log(s.getInfo());
}
