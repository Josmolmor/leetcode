export default function binarySearch(sortedArrayOfNumber: number[], target: number): number {
    let leftSide = 0;
    let rightSide = sortedArrayOfNumber.length - 1;

    while(rightSide > leftSide) {
        let mid = Math.floor((leftSide + rightSide) / 2);
        if (sortedArrayOfNumber[mid] === target) {
            return mid;
        }
        if (sortedArrayOfNumber[mid] < target) {
            leftSide = mid + 1;
        }
        if (sortedArrayOfNumber[mid] > target) {
            rightSide = mid - 1;
        }
    }

    return -1;
}