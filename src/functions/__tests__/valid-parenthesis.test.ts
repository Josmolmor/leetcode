import validParenthesis from "../valid-parenthesis.ts";

describe('validParenthesis', () => {
    it('returns true for valid parenthesis', () => {
        expect(validParenthesis('()')).toBe(true);
        expect(validParenthesis('()[]{}')).toBe(true);
        expect(validParenthesis('{[]}')).toBe(true);
    });

    it('returns false for invalid parenthesis', () => {
        expect(validParenthesis('(]')).toBe(false);
        expect(validParenthesis('([)]')).toBe(false);
        expect(validParenthesis('{[}')).toBe(false);
    });

    it('returns false for invalid characters', () => {
        expect(validParenthesis('(1]')).toBe(false);
        expect(validParenthesis('([a)]')).toBe(false);
        expect(validParenthesis('{b[}')).toBe(false);
    });
});