import findMissingNumber from "../find-missing-number.ts";

describe('find missing number', () => {
    test('case 1', () => {
        expect(findMissingNumber([1,2,4,5])).toBe(3);
    })

    test('case 2', () => {
        expect(findMissingNumber([1,2,3,4,5,7])).toBe(6);
    })

    test('case 3', () => {
        expect(findMissingNumber([1,2,3,4,5])).toBe(-1);
    })
})