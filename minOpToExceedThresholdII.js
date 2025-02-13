/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function minOperations(nums, k) {
    /**
     * Min-heap implementation (since JavaScript doesn't have a built-in one)
     */
    class MinPriorityQueue {
      constructor() {
        this.heap = [];
      }
  
      enqueue(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
      }
  
      dequeue() {
        if (this.isEmpty()) {
          return null;
        }
        if (this.heap.length === 1) {
          return this.heap.pop();
        }
  
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.sinkDown(0);
        return min;
      }
  
      peek() {
        return this.isEmpty() ? null : this.heap[0];
      }
  
      isEmpty() {
        return this.heap.length === 0;
      }
  
      size() {
        return this.heap.length;
      }
  
      bubbleUp(index) {
        while (index > 0) {
          const parentIndex = Math.floor((index - 1) / 2);
          if (this.heap[index] >= this.heap[parentIndex]) {
            break;
          }
          this.swap(index, parentIndex);
          index = parentIndex;
        }
      }
  
      sinkDown(index) {
        const length = this.heap.length;
        while (true) {
          let leftChildIndex = 2 * index + 1;
          let rightChildIndex = 2 * index + 2;
          let smallest = index;
  
          if (
            leftChildIndex < length &&
            this.heap[leftChildIndex] < this.heap[smallest]
          ) {
            smallest = leftChildIndex;
          }
  
          if (
            rightChildIndex < length &&
            this.heap[rightChildIndex] < this.heap[smallest]
          ) {
            smallest = rightChildIndex;
          }
  
          if (smallest === index) {
            break;
          }
  
          this.swap(index, smallest);
          index = smallest;
        }
      }
  
      swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
      }
    }
  
    const minHeap = new MinPriorityQueue();
    for (const num of nums) {
      minHeap.enqueue(num);
    }
  
    let operations = 0;
    while (minHeap.size() >= 2 && minHeap.peek() < k) {
      const x = minHeap.dequeue();
      const y = minHeap.dequeue();
      minHeap.enqueue(Math.min(x, y) * 2 + Math.max(x, y));
      operations++;
    }
  
    return operations;
}
  