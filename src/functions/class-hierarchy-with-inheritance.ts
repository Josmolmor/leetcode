/*
This question delves into object-oriented programming (OOP) concepts in JavaScript, specifically class hierarchies and inheritance. Demonstrating proficiency in OOP showcases a developer’s ability to design modular and reusable code.

Task: Implement a class hierarchy in JavaScript with inheritance, following the given specifications:

Create a base class called Shape with the following properties and methods:
name: a string representing the name of the shape.
area(): a method that calculates and returns the area of the shape (to be implemented by subclasses).
Create a subclass called Rectangle that extends the Shape class. It should have the following additional properties and methods:
width: a number representing the width of the rectangle.
height: a number representing the height of the rectangle.
Implement the area() method to calculate and return the area of the rectangle.
Create another subclass called Circle that extends the Shape class. It should have the following additional properties and methods:
radius: a number representing the radius of the circle.
Implement the area() method to calculate and return the area of the circle.
*/

// Base class Shape with a name and area method
class Shape {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    // Abstract method that will be implemented by subclasses
    // @ts-ignore
    area(): number;
}

// Subclass Rectangle inheriting from Shape
export class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(name: string, width: number, height: number) {
        super(name);
        this.width = width;
        this.height = height;
    }

    // Implement the area calculation specific to Rectangle
    area(): number {
        return this.width * this.height;
    }
}

// Subclass Circle inheriting from Shape
export class Circle extends Shape {
    radius: number;

    constructor(name: string, radius: number) {
        super(name);
        this.radius = radius;
    }

    // Implement the area calculation specific to Circle
    area(): number {
        return Math.PI * this.radius ** 2;
    }
}
