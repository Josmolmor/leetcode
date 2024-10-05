import {Circle, Rectangle} from "../class-hierarchy-with-inheritance.ts";

describe('Class hierarchy with inheritance', () => {
    test('Rectangle class', () => {
        const rectangle = new Rectangle('rectangle', 5, 3);
        expect(rectangle.area()).toBe(15);
    })

    test('Circle class', () => {
        const circle = new Circle('circle', 4);
        expect(circle.area()).toBe(50.26548245743669);
    })
});