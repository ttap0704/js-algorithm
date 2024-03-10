const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((arr) => arr.split(" ").map((num) => +num));

const N = input[0][0],
  M = input[0][1],
  prefix = new Array(N).fill([]).map(() => new Array(N).fill(0)),
  ret = [];

input.shift();

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    const num = input[i][j];
    if (j === 0) prefix[i][j] = num;
    else prefix[i][j] = prefix[i][j - 1] + num;
  }
}

for (let i = input.length - M, n = input.length; i < n; i++) {
  ret.push(prefixSum(input[i], prefix));
}

function prefixSum(currentInput, prefixArr = []) {
  // x는 가로, y는 세로
  let sum = 0;
  for (let i = currentInput[0] - 1, n = currentInput[2] - 1; i <= n; i++) {
    sum +=
      prefixArr[i][currentInput[3] - 1] -
      (prefixArr[i][currentInput[1] - 2] ?? 0);
  }

  return sum;
}

console.log(ret.join("\n"));
