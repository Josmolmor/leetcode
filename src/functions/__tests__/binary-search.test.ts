import binarySearch from "../binary-search.ts";

describe('Binary search', () => {
    test('value exists', () => {
        expect(binarySearch([1, 3, 5, 7, 9], 5)).toBe(2);
    })
    test('value doesnt exist', () => {
        expect(binarySearch([1, 3, 5, 7, 9], 2)).toBe(-1);
    })
})