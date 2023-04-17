const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stack = []; // используем массив для хранения элементов стека
  }

  // Добавляем элемент в верх стека
  push(element) {
    this.stack.push(element);
  }

  // Возвращаем элемент из верха стека (но не удаляем его)
  peek() {
    return this.stack[this.stack.length - 1];
  }

  // Удаляем и возвращаем элемент из верха стека
  pop() {
    return this.stack.pop();
  }
}


module.exports = {
  Stack
};
