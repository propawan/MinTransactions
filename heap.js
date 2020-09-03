export { BinaryHeap }

class BinaryHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return (this.size() == 0);
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.size() - 1;
        while (index > 0) {
            let curr = this.heap[index];
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];

            if (parent[0] > curr[0]) {
                break;
            }

            this.heap[index] = parent;
            this.heap[parentIndex] = curr;

            index = parentIndex;
        }
    }

    extractMax() {
        const mx = this.heap[0];
        const temp = this.heap.pop();

        if (!this.isEmpty()) {
            this.heap[0] = temp;
            this.sinkDown(0);
        }

        return mx;
    }

    sinkDown(index) {
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let largest = index;

        const len = this.size();

        if (left < len && this.heap[left][0] > this.heap[largest][0]) {
            largest = left;
        }
        if (right < len && this.heap[right][0] > this.heap[largest][0]) {
            largest = right;
        }

        if (largest != index) {
            let temp = this.heap[index];
            this.heap[index] = this.heap[largest];
            this.heap[largest] = temp;
            this.sinkDown(largest);
        }
    }
}

let maxHeap = new BinaryHeap();
maxHeap.insert([3, 1]);
maxHeap.insert([1, 1]);
maxHeap.insert([4, 1]);
maxHeap.insert([0, 1]);
maxHeap.insert([6, 3]);

while (!maxHeap.isEmpty()) {
    console.log(maxHeap.extractMax());
}