import palindromeCheck from "../paindrome-check.ts";

describe('palindrome check', () => {
    test('true case', () => {
        expect(palindromeCheck('madam')).toBe(true);
    })

    test('false case', () => {
        expect(palindromeCheck('hello')).toBe(false);
    })
})