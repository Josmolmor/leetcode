export default function palindromeCheck(wordToCheck: string) {
    return wordToCheck.split('').reverse().join('') === wordToCheck;
}