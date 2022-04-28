const Queue = () => {
  let list = []
  let add = value => list.push(value)

  return {
    add,
    list,
  }
}

const myQueue = Queue()

const BFTT = () => {
  myQueue.add()
  for (let i = 0; i < myQueue.list.length; i++) {
    myQueue.add()
  }
}