export default function duplicateArray<T>(array: T[], n = 2): T[] {
    return new Array(n).fill(array).flat();
}