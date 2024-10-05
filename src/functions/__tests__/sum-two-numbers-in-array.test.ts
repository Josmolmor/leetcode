import {findSumOfTwo} from "../sum-two-numbers-in-array.ts";


describe('Sum of two numbers', () => {
    test(`[2, 4, 7, 11, 15] - 9 to return [2,7]`, () => {
        expect(findSumOfTwo([2, 4, 7, 11, 15], 9)).toEqual([2,7]);
    });

    test(`[0, 4, 8, 0, 4] - 8 to return [0,8]`, () => {
        expect(findSumOfTwo([0, 4, 8, 0, 4], 8)).toEqual([0,8]);
    });

    test(`[2, 4, 8, 0, 4] - 8 to return [4,4]`, () => {
        expect(findSumOfTwo([2, 4, 8, 0, 4], 8)).toEqual([4,4]);
    });

    test(`[0, 4, 8, 0, 4] - 13 to return []`, () => {
        expect(findSumOfTwo([0, 4, 8, 0, 4], 13)).toEqual([]);
    });
})