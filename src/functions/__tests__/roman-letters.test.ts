import convertToRoman from "../roman-letters.ts";

describe('Roman letters', () => {
    it('should convert integers to Roman numerals', () => {
        expect(convertToRoman([3, 4, 9, 58, 1994])).toEqual(['III', 'IV', 'IX', 'LVIII', 'MCMXCIV']);
    });
});