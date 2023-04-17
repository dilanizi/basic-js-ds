const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    if (this._root === null) {
      this._root = new Node(data);
    } else {
      this._insertNode(this._root, data);
    }
  }

  has(data) {
    return this._findNode(this._root, data) !== null;
  }

  find(data) {
    return this._findNode(this._root, data);
  }

  remove(data) {
    this._root = this._removeNode(this._root, data);
  }

  min() {
    if (this._root === null) {
      return null;
    }

    let currentNode = this._root;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    if (this._root === null) {
      return null;
    }

    let currentNode = this._root;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }

  _insertNode(node, data) {
    if (data < node.data) {
      if (node.left === null) {
        node.left = new Node(data);
      } else {
        this._insertNode(node.left, data);
      }
    } else {
      if (node.right === null) {
        node.right = new Node(data);
      } else {
        this._insertNode(node.right, data);
      }
    }
  }

  _findNode(node, data) {
    if (node === null) {
      return null;
    } else if (data === node.data) {
      return node;
    } else if (data < node.data) {
      return this._findNode(node.left, data);
    } else {
      return this._findNode(node.right, data);
    }
  }

  _removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      } else if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      const minRight = this._findMinValue(node.right);
      node.data = minRight;
      node.right = this._removeNode(node.right, minRight);
      return node;
    }
  }

  _findMinValue(node) {
    if (node.left === null) {
      return node.data;
    } else {
      return this._findMinValue(node.left);
    }
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}


module.exports = {
  BinarySearchTree
};