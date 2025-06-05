// Import shapes
import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

// Create instances of shape and circle
let circle: Circle = new Circle(2, 3, 4);
let rectangle: Rectangle = new Rectangle(2, 3, 5, 10);

// Initialize a new shape type array
let shapes: Shape[] = [];

// Add some shapes to the array
shapes.push(circle);
shapes.push(rectangle);

for (let s of shapes) {
    console.log(s.getInfo());
    console.log(s.calculateArea());
    console.log();
}