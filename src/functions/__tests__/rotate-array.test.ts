import rotateArray from "../rotate-array.ts";

describe('Rotate array', () => {
    test('rotate array of numbers by 2 steps', () => {
        expect(rotateArray([1,2,3,4,5], 2)).toStrictEqual([4,5,1,2,3]);
    })
    test('rotate array of numbers by 4 steps', () => {
        expect(rotateArray([1,2,3,4,5], 4)).toStrictEqual([2,3,4,5,1]);
    })
})