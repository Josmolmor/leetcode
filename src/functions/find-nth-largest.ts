export default function findNthLargest(arrayOfNumbers: number[], n: number) {
    const res = [...arrayOfNumbers].sort((a, b) => b - a);
    if (!res) return;
    return res[n === 0 ? n : n - 1];
}