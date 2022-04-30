---
title: tree
tags:
---

Tree Traversal 樹的旅行（遍歷）

找出數中所有的節點

1. Breadth-First Tree Traversal
2. Depth-First Tree Traversal(PreOrder, InOrder, PostOrder)

### Breadth-First Tree Traversal（寬度優先）

![](https://i.imgur.com/lNZAO62.png)

以上圖為例，這個樹狀圖有四層，分別為
第一層: 2
第二層: 7, 5
第三層: 2, 10, 6, 9
第四層: 5, 11, 4

BFTT: 2, 7, 5, 2, 10, 6, 9, 2, 11, 4

use queue

### Depth-First Tree Traversal（深度優先）

#### Pre-Order 

處理根節點後，透過遞迴的方式處理所有的子樹(subtree)，直到遍歷所有的節點。

原則：root, left, right

[
  2,  7, 2, 10, 6,
  5, 11, 5,  9, 4
]

![](https://upload.wikimedia.org/wikipedia/commons/a/ac/Preorder-traversal.gif)
![](https://i.imgur.com/9nPCdFX.png)

#### In-Order 

![](https://i.imgur.com/RR8U5me.png)
![](https://upload.wikimedia.org/wikipedia/commons/4/48/Inorder-traversal.gif)

原則：left, root, right

[
  2, 7, 10, 5, 6, 11, 2, 4, 9, 5
]

#### Post-Order

原則：left, right, root

![](https://upload.wikimedia.org/wikipedia/commons/2/28/Postorder-traversal.gif)

![](https://i.imgur.com/fTmIINn.png)