// const Queue = () => {
  //   let add = value => list.push(value)
  //   let list = []

//   return {
//     add,
//     list,
//   }
// }

// const myQueue = Queue()

// const BFTT = () => {
//   myQueue.add()
//   for (let i = 0; i < myQueue.list.length; i++) {
//     myQueue.add()
//   }
// }
// [2, 7, 2, 10, 6, 5, 11, 5, 9, 4]

const tree = {
  value: 2,
  children: [
    {
      value: 7,
      children: [
        {
          value: 2,
          children: null,
        },
        {
          value: 10,
          children: null,
        },
        {
          value: 6,
          children: [
            {
              value: 5,
              children: null,
            },
            {
              value: 11,
              children: null,
            },
          ],
        },
      ],
    },
    {
      value: 5,
      children: [
        {
          value: 9,
          children: [
            {
              value: 4,
              children: null,
            }
          ],
        },
      ],
    },
  ],
};

// const preOrder = (root) => {
//   let queue = []

//   const traversal = node => {
//     queue.push(node.value)
//     if (node.children !== null) {
//       for (let i = 0; i < node.children.length; i++) {
//         traversal(node.children[i]);
//       }
//     }
//   }

//   traversal(root);

//   return queue
// }

// let result = preOrder(tree)
// console.log(result)
const InOrder = root => {
  let queue = [];

  const traversal = (node) => {
    if (node.children !== null) {
      for (let i = 0; i < node.children.length; i++) {
        traversal(node.children[i]);
        if (node.children[i].children === null) queue.push(node.children[i].value);

        if (i === 0) queue.push(node.value);
      }
    }
  };

  traversal(root);

  return queue;
};

let result = InOrder(tree);
console.log(result);
[2, 7, 10, 5, 6, 11, 2, 4, 9, 5];

// const PostOrder = root => {
//   let queue = [];

//   const traversal = (node) => {
//     if (node.children !== null) {
//       for (let i = 0; i < node.children.length; i++) {
//         let temp = JSON.parse(JSON.stringify(node.children[i]))
//         traversal(temp);
//       }
//     }

//     queue.push(node.value);
//   };

//   traversal(root);

//   return queue;
// };

// let result = PostOrder(tree);
// console.log(result);
// // [2, 7, 10, 5, 6, 11, 2, 4, 9, 5];
