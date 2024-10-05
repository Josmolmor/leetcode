import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="card">
    <h3>✅ Reverse words in a sentence</h3>
    <pre>Example: 'reverse words in a sentence' -> 'sentence a in words reverse')</pre>
    Key Concepts: String manipulation, splitting strings, array reversal, join operations.
    Time Complexity:
O(n), where n is the length of the sentence (splitting, reversing, and joining all take linear time).
Space Complexity:
O(n), additional space is needed to store the words array.
  </div>
  <div class="card">
    <h3>✅ Find the Nth Largest Element in an Array</h3>
     <pre>Example: ([10, 5, 110, 3, 49, 8, 2], 1) -> 110)</pre>
     <pre>Example: ([10, 5, 110, 3, 49, 8, 2], 3) -> 10)</pre>
     Key Concepts: Sorting, max heaps/min heaps, quickselect algorithm.
     Time Complexity:
Sorting: O(n log n), where n is the length of the array.
Heap: O(n log N) (building the heap takes linear time, and adjusting it log N times).
Quickselect: O(n) average case, O(n²) worst case.
Space Complexity:
Sorting: O(1) (in-place sorting).
Heap: O(N) (for the heap).
Quickselect: O(1) (constant space).
  </div>
  <div class="card">
    <h3>✅ Linked lists</h3>
    <pre>Example: const list = new CustomList<number>();
        list.addToEnd(1);
        list.removeByValue(1);
        list.find(1);
    </pre>
    Key Concepts: Nodes, pointers, head, tail, singly/doubly linked lists, traversal.
Time Complexity:
Access/Search: O(n).
Insertion/Deletion at the beginning or end: O(1).
Space Complexity:
O(n), where n is the number of nodes.
  </div>
  <div class="card">
    <h3>✅ Implementing a Class Hierarchy with Inheritance</h3>
    <pre>Example: const rectangle = new Rectangle('rectangle', 5, 3);</pre>
    Key Concepts: Object-oriented programming (OOP), inheritance, polymorphism, method overriding, superclass and subclass relationships.
    Time Complexity: Depends on operations within methods. In general:
O(1) for method lookups due to method resolution order (MRO).
Space Complexity:
O(n), where n is the number of objects instantiated.
  </div>
  <div class="card">
    <h3>✅ Finding the Longest Substring Without Repeating Characters</h3>
    <pre>Example: 'abcabcbb' -> 'abc', 3</pre>
    Key Concepts: Sliding window technique, hash sets/maps.
Time Complexity:
O(n), where n is the length of the string (each character is visited twice at most).
Space Complexity:
O(min(m, n)), where m is the size of the character set and n is the string length (worst-case space for the map or set).
  </div>
  <div class="card">
    <h3>✅ Sum of Two Numbers in an Array</h3>
    <pre>Example: ([1, 2, 3, 4, 5], 9) -> [4, 5]</pre>
    Key Concepts: Hashing, two-pointer technique.
Time Complexity:
Brute Force: O(n²), where n is the length of the array.
Hash Map: O(n), due to linear scan and hash lookup.
Two Pointers: O(n log n) for sorting, O(n) for two-pointer traversal.
Space Complexity:
Brute Force: O(1).
Hash Map: O(n).
Two Pointers: O(1).
  </div>
  <div class="card">
    <h3>✅ Working with Asynchronous JavaScript and Callbacks</h3>
    <pre>Example: function returnName(data: User) {
            return data.name;
        }
        const name = await fetchData(returnName);
        expect(name).toBe('John');</pre>
        Key Concepts: Event loop, callbacks, promises, async/await, non-blocking I/O, concurrency.
Time Complexity:
Depends on the asynchronous operation (network calls, file system operations, etc.). Generally, I/O-bound tasks do not impact time complexity but can depend on external factors.
Space Complexity:
Minimal additional space for maintaining the event loop stack or promise chain. O(1) if you exclude the data involved in the async operation.
  </div>
  <div class="card">
    <h3>✅ Palindrome Check</h3>
    Write a function that checks if a string is a palindrome (reads the same forward and backward).
    <pre>Example: "madam" -> true, "hello" -> false</pre>
    Key Concepts: String manipulation, two-pointer technique.
    Complexity: Time: O(n), Space: O(1)
  </div>
  <div class="card">
    <h3>✅ Find the Missing Number</h3>
    Given an array containing numbers from 1 to n, with one missing number, find the missing number.
    <pre>Example: [1, 2, 4, 5] -> 3</pre>
    Key Concepts: Arithmetic sum formula, XOR technique.
    Complexity: Time: O(n), Space: O(1)
  </div>
  <div class="card">
    <h3>✅ Merge Two Sorted Linked Lists</h3>
    Given two sorted linked lists, merge them into one sorted list.
    <pre>Example: list1: 1 -> 3 -> 5, list2: 2 -> 4 -> 6 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6</pre>
    Key Concepts: Linked lists, merging, recursion or iteration.
    Complexity: Time: O(n + m), Space: O(1)
  </div>
  <div class="card">
    <h3>✅ Valid Parentheses</h3>
    Check if a string containing parentheses is valid (balanced). The string can contain characters like ()[]{}.
    <pre>Example: "{[]}" -> true, "([)]" -> false</pre>
    Key Concepts: Stack, string parsing.
    Complexity: Time: O(n), Space: O(n)
  </div>
  <div class="card">
    <h3>✅ Fibonacci Sequence (Dynamic Programming)</h3>
    Write a function that returns the nth Fibonacci number. Use dynamic programming to optimize the recursive solution.
    <pre>Example: fib(5) -> 5 (sequence: 0, 1, 1, 2, 3, 5)</pre>
    Key Concepts: Dynamic programming, memoization.
    Complexity: Time: O(n), Space: O(n) or O(1) depending on implementation.
  </div>
  <div class="card">
    <h3>✅ Rotate Array</h3>
    Rotate an array of n elements to the right by k steps.
    <pre>Example: [1, 2, 3, 4, 5] rotated by 2 -> [4, 5, 1, 2, 3]</pre>
    Key Concepts: Array manipulation, reversing subarrays.
    Complexity: Time: O(n), Space: O(1)
  </div>
  <div class="card">
    <h3>✅ Binary Search</h3>
    Given a sorted array, implement binary search to find the index of a target value.
    <pre>Example: [1, 3, 5, 7, 9], target = 5 -> return index 2</pre>
    Key Concepts: Searching, divide-and-conquer.
    Complexity: Time: O(log n), Space: O(1)
  </div>
  <div class="card">
    <h3>✅ Breadth-First Search (BFS) on a Graph</h3>
    Implement BFS traversal on a graph, starting from a given node.
    <pre>Example: For a graph with nodes connected like: 1 -> 2, 1 -> 3, 2 -> 4, BFS starting from 1 visits nodes in the order 1, 2, 3, 4.</pre>
    Key Concepts: Graph traversal, queue.
    Complexity: Time: O(V + E), Space: O(V)
  </div>
  <div class="card">
    <h3>✅ Kth Smallest Element in a BST</h3>
    Given a binary search tree, find the kth smallest element.
    <pre>Example: For a BST with values [3, 1, 4, null, 2] and k = 2, return 2.</pre>
    Key Concepts: In-order traversal, binary search trees.
    Complexity: Time: O(n), Space: O(n)
  </div>
  <div class="card">
    <h3>✅ Merge Intervals</h3>
    Given a collection of intervals, merge all overlapping intervals.
    <pre>Example: [[1,3], [2,6], [8,10], [15,18]] -> [[1,6], [8,10], [15,18]]</pre>
    Key Concepts: Sorting, intervals.
    Complexity: Time: O(n log n), Space: O(n)
  </div>
  <div class="card">
    <h3>✅ Maximum Subarray (Kadane’s Algorithm)</h3>
    Find the contiguous subarray within an array that has the largest sum.
    <pre>Example: [-2,1,-3,4,-1,2,1,-5,4] -> 6 (subarray: [4,-1,2,1])</pre>
    Key Concepts: Dynamic programming, array manipulation.
    Complexity: Time: O(n), Space: O(1)
  </div>
`;