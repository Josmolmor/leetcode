import duplicateArray from "../duplicate-array.ts";

describe('duplicate array', () => {
    it('should duplicate the given array', () => {
        expect(duplicateArray([])).toEqual([]);
    });
    it('should duplicate the given array 2 times', () => {
        expect(duplicateArray([1,2,3,4,5])).toEqual([1,2,3,4,5,1,2,3,4,5]);
    });
    it('should duplicate the given array 4 times', () => {
        expect(duplicateArray([1,2,3,4,5], 4)).toEqual([1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]);
    });
})