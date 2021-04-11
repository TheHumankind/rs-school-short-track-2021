const ListNode = require('../extensions/list-node');
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
  constructor() {
    this.queue = [];
    this.first = null;
    this.last = null;
  }

  get size() {
    return this.queue.length;
  }

  enqueue(el) {
    const node = new ListNode();
    if (this.first === null) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.queue.push(el);
  }

  dequeue() {
    return this.queue.shift();
  }
}

module.exports = Queue;
