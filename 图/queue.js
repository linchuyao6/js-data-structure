// - `toString()` 将队列中的内容，转成字符串形式。
class Queue {
  constructor() {
    this.items = []
  }
  enqueue(item) {
    this.items.push(item)
  }
  dequeue() {
    return this.items.shift()
  }
  front() {
    return this.items[0]
  }
  isEmpty() {
    return this.items.length === 0
  }
  size() {
    return this.items.length
  }
  toString() {
    let result = ''
    for (let item of this.items) {
      result = result + item + ' '
    }
    return result
  }
}

// 测试
// let queue=new Queue()
// queue.enqueue('cc')
// queue.enqueue('kk')
// queue.enqueue('ll')
// queue.enqueue('pp')
// queue.dequeue()
// console.log(queue.items);
// console.log(queue.front());
// console.log(queue.size());
// console.log(queue.toString());

//击鼓传花
function passGame(list, num) {
  const queue = new Queue()
  //  进栈
  for (let name of list) {
    queue.enqueue(name)
  }
  while (queue.size() > 1) {
    for (let i = 0; i < num - 1; i++) {
      queue.enqueue(queue.dequeue())
    }
    queue.dequeue()
  }
  const endName = queue.front()
  return list.indexOf(endName)
}
const list = ['ll', 'kk', 'oo', 'pp', 'yy']
console.log(list[passGame(list, 2)])
console.log('------------')
function foo() {
  console.log(this)
}
var obj1 = {
  name: 'obj1',
  foo: foo,
}
var obj2 = {
  name: 'obj2',
  obj1: obj1,
}
obj2.obj1.foo()
