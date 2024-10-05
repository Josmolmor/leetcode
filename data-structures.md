# 1. Array
What it is: A collection of items stored at contiguous memory locations. Elements are accessed by their index.
Use case: Useful for fast access when you know the index, but insertion and deletion can be expensive as elements may need to be shifted.

- Access: O(1) – Direct access by index.
- Search: O(n) – Linear search, where n is the size of the array.
- Insertion: O(n) – In the worst case, inserting at the beginning or middle requires shifting elements.
- Deletion: O(n) – Removing an element requires shifting elements after it.

```typescript
let arr: number[] = [10, 20, 30];
console.log(arr[1]); // Access: O(1)
arr.push(40); // Insertion: O(1)
```

# 2. Linked List
What it is: A collection of nodes where each node contains a value and a pointer (or reference) to the next node in the sequence. Variants include singly and doubly linked lists.
Use case: Preferred when frequent insertions/deletions are needed, as these operations are efficient. However, accessing specific elements is slower than arrays.

- Access: O(n) – Must traverse the list to find the element.
- Search: O(n) – Requires linear traversal.
- Insertion (at head): O(1) – No shifting of elements.
- Deletion: O(n) – Searching for the element to remove is O(n).

```typescript
class ListNode {
  value: number;
  next: ListNode | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

class LinkedList {
  head: ListNode | null = null;

  append(value: number): void {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let temp = this.head;
      while (temp.next) temp = temp.next;
      temp.next = newNode;
    }
  }
}
```

# 3. Stack
What it is: A last-in, first-out (LIFO) structure where elements are added or removed from the same end (top). Common operations include push (add) and pop (remove).
Use case: Ideal for scenarios where you need to reverse operations or backtrack, like in depth-first search or parsing expressions.

- Access: O(n) – Need to traverse for specific elements.
- Search: O(n) – Linear search.
- Push (Insert): O(1) – Add element to the end.
- Pop (Remove): O(1) – Remove element from the end.

```typescript
class Stack {
  private stack: number[] = [];

  push(val: number): void {
    this.stack.push(val);
  }

  pop(): number | undefined {
    return this.stack.pop();
  }
}
const s = new Stack();
s.push(10);
console.log(s.pop()); // Output: 10
```

# 4. Queue
What it is: A first-in, first-out (FIFO) structure where elements are added at one end (rear) and removed from the other (front). Operations are typically enqueue and dequeue.
Use case: Best suited for scheduling processes, breadth-first search, or task scheduling systems.

- Access: O(n) – Linear traversal for specific elements.
- Search: O(n) – Linear search.
- Enqueue (Insert): O(1) – Add element to the end.
- Dequeue (Remove): O(1) – Remove element from the front.

```typescript
class Queue {
  private queue: number[] = [];

  enqueue(val: number): void {
    this.queue.push(val);
  }

  dequeue(): number | undefined {
    return this.queue.shift();
  }
}
const q = new Queue();
q.enqueue(10);
console.log(q.dequeue()); // Output: 10
```

# 5. Hash Table (Hash Map)
What it is: A data structure that maps keys to values, allowing fast lookup, insertion, and deletion operations. It uses a hashing function to compute an index into an array of buckets.
Use case: Great for fast lookups (O(1)) and is often used for caching, indexing, or associative arrays.

- Access: O(1) – Direct access via key.
- Search: O(1) – For the average case, assuming minimal collisions.
- Insertion: O(1) – Average case.
- Deletion: O(1) – Average case.

```typescript
const hashMap = new Map<string, number>();
hashMap.set('apple', 3);
console.log(hashMap.get('apple')); // Output: 3
```

# 6. Binary Tree
What it is: A hierarchical structure where each node has at most two children (left and right). Special forms include binary search trees (BST), where left children are smaller, and right children are larger.
Use case: Efficient searching, insertion, and deletion in sorted data. BSTs are often used in databases and file systems.

- Access/Search: O(log n) – If balanced, logarithmic traversal. Worst-case: O(n) if unbalanced (like a linked list).
- Insertion: O(log n) – In a balanced tree, requires O(log n). Worst-case: O(n).
- Deletion: O(log n) – Same as insertion, but worst-case can be O(n) if unbalanced.

```typescript
class TreeNode {
  value: number;
  left: TreeNode | null = null;
  right: TreeNode | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

class BinaryTree {
  root: TreeNode | null = null;

  insert(value: number): void {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  private insertNode(node: TreeNode, newNode: TreeNode): void {
    if (newNode.value < node.value) {
      if (!node.left) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
      if (!node.right) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }
}
```

# 7. Graph
What it is: A set of nodes (vertices) connected by edges. Graphs can be directed or undirected and can represent many-to-many relationships.
Use case: Used in networks, routing, and solving problems like shortest path (Dijkstra's Algorithm), social networks, and recommendation systems.

- Access/Search: O(V + E) – Linear time with respect to vertices (V) and edges (E).
- Insertion: O(1) per edge.
- Deletion: O(V + E) – Involves removing edges and updating lists.

```typescript
class Graph {
  adjacencyList: Map<number, number[]> = new Map();

  addVertex(vertex: number): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1: number, vertex2: number): void {
    this.adjacencyList.get(vertex1)?.push(vertex2);
    this.adjacencyList.get(vertex2)?.push(vertex1); // If undirected
  }
}
```

# 8. Heap (Priority Queue)
What it is: A binary tree-based data structure that follows a heap property, meaning each parent node is either greater than (max-heap) or less than (min-heap) its children.
Use case: Efficient for priority queues, scheduling tasks, and managing real-time data streams.

- Access (min/max element): O(1) – The root contains the minimum/maximum value.
- Search: O(n) – Must traverse the entire heap to find an arbitrary element.
- Insertion: O(log n) – Elements bubble up the heap.
- Deletion: O(log n) – Removing the root and reheapifying.

```typescript
class MinHeap {
  private heap: number[] = [];

  insert(val: number): void {
    this.heap.push(val);
    this.heapifyUp();
  }

  private heapifyUp(): void {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] >= this.heap[parentIndex]) break;
      [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
      index = parentIndex;
    }
  }
}
```

# 9. Trie
What it is: A tree-like data structure that stores strings where each node represents a single character. Used for dynamic prefix matching.
Use case: Used in applications like autocomplete, spell checkers, and IP routing.

- Access/Search: O(m) – m is the length of the string being searched.
- Insertion: O(m) – Insert each character in the string.
- Deletion: O(m) – Traverse and remove nodes if no longer needed.

```typescript
class TrieNode {
  children: Map<string, TrieNode> = new Map();
  endOfWord: boolean = false;
}

class Trie {
  private root: TrieNode = new TrieNode();

  insert(word: string): void {
    let node = this.root;
    for (let char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char)!;
    }
    node.endOfWord = true;
  }
}
```

Conclusion
These are some of the key data structures used in computer science. Each has its strengths and is chosen based on the specific requirements of the problem at hand. Mastering these data structures enables you to build efficient algorithms and scalable systems.

Arrays are fast for indexed access but slow for insertion and deletion.
Linked lists provide efficient insertions and deletions but suffer from slow access.
Hash tables provide constant-time operations in the average case but can degrade with poor hashing.
Trees and heaps offer logarithmic efficiency for ordered data, with binary trees shining in sorted data management.
Graphs and tries are used for more complex relationships and word processing, respectively.
Each data structure has its specific use cases, depending on the operation's time sensitivity.