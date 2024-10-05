import findNthLargest from "../find-nth-largest.ts";

describe('Find nth largest', () => {
    test(`[10, 5, 110, 3, 49, 8, 2], 1`, () => {
        expect(findNthLargest([10, 5, 110, 3, 49, 8, 2], 1)).toBe(110);
    });
    test(`[10, 5, 110, 3, 49, 8, 2], 3`, () => {
        expect(findNthLargest([10, 5, 110, 3, 49, 8, 2], 3)).toBe(10);
    });
})