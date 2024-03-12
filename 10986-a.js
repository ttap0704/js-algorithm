const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ");

function main(n, m, arr) {
  const prefix = [];
  let ret = 0;

  for (let i = 0; i < n; i++) {
    if (i == 0) prefix[i] = +arr[i] % m;
    else prefix[i] = (prefix[i - 1] + +arr[i]) % m;
  }

  console.log({ prefix });

  return ret;
}

console.log(main(+N, +M, input[0].split(" ")));
