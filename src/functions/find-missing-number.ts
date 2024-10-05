export default function findMissingNumber(arrayOfNumbers: number[]): number {
    return arrayOfNumbers.map((number, index) => {
        if (number - arrayOfNumbers[index - 1] > 1) {
            return number - 1;
        }
        return null;
    }).filter((num) => num)[0] ?? -1;
}