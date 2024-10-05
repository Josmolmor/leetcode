import {kadaneAlgorithm} from "../kadane-algorithm.ts";

describe('kadane-algorithm', () => {
    it('should return the maximum sum of a subarray', () => {
        expect(kadaneAlgorithm([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
        expect(kadaneAlgorithm([1])).toBe(1);
        expect(kadaneAlgorithm([5, 4, -1, 7, 8])).toBe(23);
    });
});