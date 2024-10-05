import CustomList from "../linked-list.ts";

describe('Linked lists', () => {
    test(`Linked list manipulation - addition`, () => {
        const list = new CustomList<number>();
        list.addToEnd(1);
        expect(list.find(1)).toBe(true);
    });

    test(`Linked list manipulation - removal`, () => {
        const list = new CustomList<number>();
        list.addToEnd(1);
        list.removeByValue(1);
        expect(list.find(1)).toBe(false);
    });
})