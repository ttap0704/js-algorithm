const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const T = input.shift();

function main(t, arr) {
  const ret = [];

  for (let i = 0; i < t; i++) {
    const [N, M] = arr.shift().split(" ");
    const queue = arr
      .shift()
      .split(" ")
      .map((num, index) => ({ num: +num, index }));
    let cnt = 0;

    while (queue.length) {
      const cur = queue.shift();
      if (queue.find((a) => a.num > cur.num)) {
        queue.push(cur);
      } else {
        cnt++;
        if (cur.index === +M) break;
      }
    }

    ret.push(cnt);
  }

  return ret.join("\n");
}

console.log(main(+T, input));
