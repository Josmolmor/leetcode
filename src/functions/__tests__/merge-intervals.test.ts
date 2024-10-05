import mergeIntervals from "../merge-intervals.ts";

describe('Merge intervals', () => {
    test(`Base example`, () => {
        expect(mergeIntervals([[1,3], [2,6], [8,10], [15,18]])).toEqual([[1,6], [8,10], [15,18]]);
    });
});