/*
Given the integer list nums with length n, create a function that converts each integer in the list into its corresponding Roman numeral representation.
The Roman numeral symbols and corresponding values are provided in the table below.
The function must be able to handle integers up to 1000.
*/
export default function convertToRoman(romanLetters: number[]): string[] {
    const romanNumerals = [];
    const romanSymbols = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
    const romanValues = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    for (let i = 0; i < romanLetters.length; i++) {
        let romanNumeral = '';
        let number = romanLetters[i];
        for (let j = romanValues.length - 1; j >= 0; j--) {
            while (number >= romanValues[j]) {
                romanNumeral += romanSymbols[j];
                number -= romanValues[j];
            }
        }
        romanNumerals.push(romanNumeral);
    }
    return romanNumerals;
}