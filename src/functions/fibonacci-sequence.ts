export default function fibonacci(nthNumber: number): number {
    // Base case
    // If the number is less than or equal to 1, return the number
    // Otherwise, return the sum of the previous two numbers
    return nthNumber <= 1 ? nthNumber : fibonacci(nthNumber - 1) + fibonacci(nthNumber - 2);
}