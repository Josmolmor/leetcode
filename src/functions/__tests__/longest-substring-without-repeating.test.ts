import findLongestSubstring from "../longest-substring-without-repeating.ts";

describe('Longest substring without repeating', () => {
    test('bbb', () => {
        expect(findLongestSubstring('bbb')).toEqual({ substring: 'b', length: 1 });
    })

    test('abcabcbb bbb', () => {
        expect(findLongestSubstring('abcabcbb bbb')).toEqual({ substring: 'abc ', length: 4 });
    })

    test('abcabcbb bbb', () => {
        expect(findLongestSubstring('abcabcbb bbb', true)).toEqual({ substring: 'abc', length: 3 });
    })
});