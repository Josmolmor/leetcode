/*
This question challenges your problem-solving skills and array manipulation techniques. It requires finding two numbers in an array that add up to a given target sum.
Task: Write a JavaScript function called findSumOfTwo that takes an array of numbers and a target sum as input and returns an array containing the two numbers that add up to the target sum. If no such pair is found, return an empty array.
Input Format: The input will be an array of numbers and a target sum.
Constraints:
The array may contain positive and negative integers.
The array may have duplicates.
The array can be empty.
Output Format: The output will be an array containing the two numbers that add up to the target sum, or an empty array if no such pair is found.
example:
  [2, 4, 7, 11, 15], 9
  [2, 4, 8, 0, 4], 8
*/
export function findSumOfTwo(
    arrayOfNumbers: number[],
    targetSum: number
): number[] {
    let currentArray = [...arrayOfNumbers];
    let res = [currentArray[0]];
    currentArray
        .map((number, index) => {
            if (index > 0) {
                if (res[0] + number === targetSum) {
                    res.push(number);
                    return res;
                }
            }
        })
        .filter((a) => a);
    if (res.length === 2) {
        return res;
    }
    if (currentArray.length) {
        currentArray.splice(0, 1);
        return findSumOfTwo(currentArray, targetSum);
    }
    return [];
}
