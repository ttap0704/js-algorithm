const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();

function main(arr) {
  const ret = [];
  const deque = [];

  arr.forEach((ques) => {
    const [q, n] = ques.split(" ");

    switch (q) {
      case "push_front": {
        deque.unshift(+n);
        break;
      }
      case "push_back": {
        deque.push(+n);
        break;
      }
      case "pop_front": {
        ret.push(deque.shift() || -1);
        break;
      }
      case "pop_back": {
        ret.push(deque.pop() || -1);
        break;
      }
      case "size": {
        ret.push(deque.length);
        break;
      }
      case "empty": {
        ret.push(deque.length ? 0 : 1);
        break;
      }
      case "front": {
        ret.push(deque[0] || -1);
        break;
      }
      case "back": {
        ret.push(deque[deque.length - 1] || -1);
        break;
      }
    }
  });

  return ret.join("\n");
}

console.log(main(input));
