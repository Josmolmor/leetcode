import mergeTwoSortedLinkedLists from "../merge-two-sorted-linked-lists.ts";
import CustomList from "../linked-list.ts";

describe('Merge two sorted linked lists', () => {
    test(`Merge lists`, () => {
        const listOne = new CustomList<number>();
        listOne.addToEnd(1)
        listOne.addToEnd(3)
        listOne.addToEnd(5)
        const listTwo = new CustomList<number>();
        listTwo.addToEnd(2)
        listTwo.addToEnd(4)
        listTwo.addToEnd(6)
        const resList = new CustomList<number>();
        resList.addToEnd(1)
        resList.addToEnd(2)
        resList.addToEnd(3)
        resList.addToEnd(4)
        resList.addToEnd(5)
        resList.addToEnd(6)
        expect(mergeTwoSortedLinkedLists(listOne, listTwo)).toEqual(resList);
    });

    test(`One of the list has more elements than the other`, () => {
        const listOne = new CustomList<number>();
        listOne.addToEnd(1)
        listOne.addToEnd(3)
        listOne.addToEnd(5)
        const listTwo = new CustomList<number>();
        listTwo.addToEnd(2)
        listTwo.addToEnd(4)
        listTwo.addToEnd(6)
        listTwo.addToEnd(8)
        listTwo.addToEnd(10)
        const resList = new CustomList<number>();
        resList.addToEnd(1)
        resList.addToEnd(2)
        resList.addToEnd(3)
        resList.addToEnd(4)
        resList.addToEnd(5)
        resList.addToEnd(6)
        resList.addToEnd(8)
        resList.addToEnd(10)
        expect(mergeTwoSortedLinkedLists(listOne, listTwo)).toEqual(resList);
    });
})