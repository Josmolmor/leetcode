import CustomList from "./linked-list.ts";

export default function mergeTwoSortedLinkedLists(listOne: CustomList<number>, listTwo: CustomList<number>) {
    const mergedList = new CustomList<number>();
    let currentOne = listOne.firstItem;
    let currentTwo = listTwo.firstItem;

    // Compare the current values of the two lists and add the smaller one to the merged list.
    // Move the pointer of the list with the smaller value to the next item.
    // Repeat until one of the lists is empty.
    // Add any remaining elements from the non-empty list.
    // Return the merged list.
    while (currentOne && currentTwo) {
        if (currentOne.val < currentTwo.val) {
            mergedList.addToEnd(currentOne.val);
            currentOne = currentOne.nextItem;
        } else {
            mergedList.addToEnd(currentTwo.val);
            currentTwo = currentTwo.nextItem;
        }
    }

    // Add any remaining elements.
    while (currentOne) {
        mergedList.addToEnd(currentOne.val);
        currentOne = currentOne.nextItem;
    }

    // Add any remaining elements.
    while (currentTwo) {
        mergedList.addToEnd(currentTwo.val);
        currentTwo = currentTwo.nextItem;
    }

    return mergedList;
}