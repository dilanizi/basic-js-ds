const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null; // указатель на начало очереди
    this.tail = null; // указатель на конец очереди
  }

  // Добавляем элемент в конец очереди
  enqueue(value) {
    const newNode = new ListNode(value);
    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Извлекаем значение из начала очереди и удаляем его
  dequeue() {
    if (this.head === null) {
      return undefined; // возвращаем undefined, если очередь пуста
    }
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null; // обновляем указатель на конец, если очередь стала пустой
    }
    return value;
  }

  // Возвращаем подлежащий связанный список
  getUnderlyingList() {
    return this.head;
  }
}

module.exports = {
  Queue
};
