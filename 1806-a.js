const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, S] = input[0].split(" ").map((n) => +n);
const arr = input[1].split(" ");

let start = 0,
  sum = 0,
  ret = 1e9;
for (let i = 0; i < N; i++) {
  sum += +arr[i];

  while (sum >= S && start <= i) {
    ret = Math.min(ret, i - start + 1);

    sum -= +arr[start];
    start++;
  }
}

console.log(ret === 1e9 ? 0 : ret);
