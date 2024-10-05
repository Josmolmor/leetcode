export default function mergeIntervals(intervals: number[][]): number[][] {
    if (intervals.length <= 1) {
        return intervals;
    }

    intervals.sort((a, b) => a[0] - b[0]);

    const result = [];
    let currentInterval = intervals[0];
    result.push(currentInterval);

    for (let i = 1; i < intervals.length; i++) {
        const nextInterval = intervals[i];
        const [_, currentEnd] = currentInterval;
        const [nextStart, nextEnd] = nextInterval;

        if (currentEnd >= nextStart) {
            currentInterval[1] = Math.max(currentEnd, nextEnd);
        } else {
            currentInterval = nextInterval;
            result.push(currentInterval);
        }
    }

    return result;
}