const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [T, N, A, M, B] = input;

function main(t, n, a, m, b) {
  const mx = Math.max(n, m),
    prefixA = [],
    prefixB = [];

  let ret = 0;

  for (let i = 0; i < mx; i++) {
    if (a[i]) {
    }
    if (b[i]) {
    }
  }

  console.log({ prefixA, prefixB, prefixACount, prefixBCount });
  return ret;
}

console.log(main(+T, +N, A.split(" "), +M, B.split(" ")));
