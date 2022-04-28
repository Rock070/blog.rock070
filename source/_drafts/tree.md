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

