import reverseWords from "../reverse-words.ts";

describe('Reverse words', () => {
    test(`reverse the words: reverse words in a sentence`, () => {
        expect(reverseWords('reverse words in a sentence')).toBe('sentence a in words reverse');
    });

    test(`reverse the words: reversed`, () => {
        expect(reverseWords('reversed')).toBe('reversed');
    });
})