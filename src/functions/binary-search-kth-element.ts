/*
Kth Smallest Element in a BST
Given a binary search tree, find the kth smallest element.
Example: For a BST with values [3, 1, 4, null, 2] and k = 2, return 2.
Key Concepts: In-order traversal, binary search trees. Complexity: Time: O(n), Space: O(n)
*/
export default function binarySearchKthElement(arrayPayload: (number | null)[], steps: number): number {
    let sortedArray = arrayPayload.filter((value) => value !== null).sort((a, b) => a - b);
    return sortedArray[steps - 1];
}