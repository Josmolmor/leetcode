/*
This question focuses on problem-solving skills and string manipulation. It challenges developers to find an efficient algorithm for finding the longest substring in a given string without repeating characters.
Task: Write a JavaScript function called findLongestSubstring that takes a string as input and returns the length of the longest substring without repeating characters.
Input Format: The input will be a string.
Constraints:
The string may contain uppercase and lowercase letters, digits, symbols, or spaces.
The string can have both single and multiple words.
Output Format: The output will be an integer representing the length of the longest substring without repeating characters.
Sample Input: abcabcbb
Sample Output: 3
*/
export default function findLongestSubstring(word: string, ignoreWhitespace = false): { substring: string, length: number } {
    let list: string[] = [];

    for (let currentIdx = 0; currentIdx < word.trim().length; currentIdx++) {
        let currentWord = word[currentIdx];
        if (ignoreWhitespace && currentWord === " ") continue;
        if (!list.includes(currentWord)) {
            list.push(currentWord);
        }
    }
    return { substring: list.join(''), length: list.length };
}
