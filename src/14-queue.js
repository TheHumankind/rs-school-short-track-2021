// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor () {
    this.storage = {};
    this.oldestIndex = 1;
    this.newestIndex = 1;
  }

  get size() {
    return this.newestIndex - this.oldestIndex;
  }

  enqueue(element) {
    this.storage[this.newestIndex] = element;
    this.newestIndex++;
  }

  dequeue() {
    const oldestIndex = this.oldestIndex;
    const deletedData = this.storage[oldestIndex];
    delete this.storage[oldestIndex];
    this.oldestIndex++;
    return deletedData;
  }
}

module.exports = Queue;
