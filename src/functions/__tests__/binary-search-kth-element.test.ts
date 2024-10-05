import binarySearchKthElement from "../binary-search-kth-element.ts";

describe('Binary search kth element', () => {
    test(`For steps = 2`, () => {
        expect(binarySearchKthElement([3,1,4,null,5], 2)).toBe(3);
    });
})