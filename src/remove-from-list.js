const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

  function removeKFromList(l, k) {
  // Создаем фиктивный узел, чтобы упростить обработку граничных случаев
  const dummyNode = new ListNode(0);
  dummyNode.next = l;
  
  let prev = dummyNode; // Указатель на предыдущий узел
  let curr = l; // Указатель на текущий узел
  
  while (curr !== null) {
    if (curr.value === k) {
      // Если значение текущего узла равно k, то пропускаем текущий узел
      prev.next = curr.next;
    } else {
      // Если значение текущего узла не равно k, то продвигаем оба указателя вперед
      prev = curr;
    }
    curr = curr.next;
  }
  
  return dummyNode.next; // Возвращаем список без элементов со значением k
}


module.exports = {
  removeKFromList
};