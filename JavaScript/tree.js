// 定义树节点类
function TreeNode(value) {
  this.value = value
  this.children = [] // 子节点数组
}

// 定义树类
function Tree() {
  this.root = null // 树的根节点
  // 添加根节点
  this.addRoot = function (value) {
    this.root = new TreeNode(value)
  }
  // 添加子节点
  this.addChild = function (parent, value) {
    var newNode = new TreeNode(value)
    parent.children.push(newNode)
  }
  // 先序遍历
  this.traversePreorder = function (node) {
    if (!node) return
    console.log(node.value)
    for (var i = 0; i < node.children.length; i++) {
      this.traversePreorder(node.children[i])
    }
  }
  // 中序遍历
  this.traverseInorder = function (node) {
    if (!node) return
    for (var i = 0; i < node.children.length; i++) {
      this.traverseInorder(node.children[i])
    }
    console.log(node.value)
  }
  // 后序遍历
  this.traversePostorder = function (node) {
    if (!node) return
    for (var i = 0; i < node.children.length; i++) {
      this.traversePostorder(node.children[i])
    }
    console.log(node.value)
  }
  // 查找节点
  this.findNode = function (node, value) {
    if (!node) return null
    if (node.value === value) return node
    for (var i = 0; i < node.children.length; i++) {
      var foundNode = this.findNode(node.children[i], value)
      if (foundNode) return foundNode
    }
    return null
  }
}

// 创建一个树实例
var tree = new Tree()

// 添加根节点
function addRoot() {
  var value = prompt('输入父值')
  tree.addRoot(value)
  console.log(tree.root)
}

// 添加子节点
function addChild() {
  var parentValue = prompt('输入父值')
  var parent = tree.findNode(tree.root, parentValue)
  if (parent) {
    var value = prompt('输入子值')
    tree.addChild(parent, value)
    console.log(tree.root)
  } else {
    alert('找不到父节点')
  }
}

// 先序遍历树
function traversePreorder() {
  if (tree.root) {
    tree.traversePreorder(tree.root)
  } else {
    console.log('树是空的')
  }
}

// 中序遍历树
function traverseInorder() {
  if (tree.root) {
    tree.traverseInorder(tree.root)
  } else {
    console.log('树是空的')
  }
}

// 后序遍历树
function traversePostorder() {
  if (tree.root) {
    tree.traversePostorder(tree.root)
  } else {
    console.log('树是空的')
  }
}

// 查找节点
function findNode() {
  var value = document.getElementById('findInput').value
  var foundNode = tree.findNode(tree.root, value)
  var resultSpan = document.getElementById('result')

  if (foundNode) {
    resultSpan.textContent = '找到节点: ' + foundNode.value
  } else {
    resultSpan.textContent = '未找到节点'
  }
}
