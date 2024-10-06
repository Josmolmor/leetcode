export default function bubbleSort(array: number[]): number[] {
    // Get the length of the array
    const length = array.length;
    // Iterate through the array
    for (let i = 0; i < length; i++) {
        // Iterate through the array
        for (let j = 0; j < length - i - 1; j++) {
            // If the current element is greater than the next element
            if (array[j] > array[j + 1]) {
                // Swap the current element with the next element
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    // Return the sorted array
    return array;
}