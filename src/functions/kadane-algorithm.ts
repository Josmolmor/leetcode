export function kadaneAlgorithm(arrayPayload: number[]): number {
    let maxCurrent = arrayPayload[0];
    let maxGlobal = arrayPayload[0];
    let start = 0;
    let end = 0;
    let s = 0;
    for (let i = 1; i < arrayPayload.length; i++) {
        if (arrayPayload[i] > maxCurrent + arrayPayload[i]) {
            maxCurrent = arrayPayload[i];
            s = i;
        } else {
            maxCurrent += arrayPayload[i];
        }
        if (maxCurrent > maxGlobal) {
            maxGlobal = maxCurrent;
            start = s;
            end = i;
        }
    }
    return arrayPayload.reduce((acc, current, index) => {
        if (index >= start && index <= end) {
            acc += current;
        }
        return acc;
    }, 0);
}