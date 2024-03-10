const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((arr) => arr.split(" ").map((num) => +num));

const N = input[0][0],
  M = input[0][1],
  arr = input[1],
  prefix = {},
  ret = [];

for (let i = 0; i < N; i++) {
  if (i === 0) prefix[i] = arr[i];
  else prefix[i] = prefix[i - 1] + arr[i];
}

for (let i = 2; i < 2 + M; i++) {
  const first = input[i][0] - 1,
    second = input[i][1] - 1;

  ret.push(prefix[second] - (prefix[first - 1] ?? 0));
}

console.log(ret.join("\n"));
