export default function rotateArray<T>(arrayValue: Array<T>, steps: number): Array<T> {
    if (steps > 0) {
        const lastValue = arrayValue.pop();
        if (!lastValue) return [];
        arrayValue.reverse().push(lastValue);
        return rotateArray(arrayValue.reverse(), steps - 1);
    } else {
        return arrayValue;
    }
}