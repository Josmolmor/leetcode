import bubbleSort from "../bubble-sort.ts";

describe("bubble sort", (it) => {
    it("sorts an array", () => {
        const arr = [7, 3, 9, 12, 11];
        bubbleSort(arr);
        expect(arr).toEqual([3, 7, 9, 11, 12]);
    });
})