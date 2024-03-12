const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ");

function main(n, k, arr) {
  let mx = -1e9,
    sum = 0;

  for (let i = 0; i < n; i++) {
    sum += +arr[i];

    if (i >= k - 1) {
      mx = Math.max(mx, sum);
      sum -= +arr[i - k + 1];
    }
  }

  return mx;
}

console.log(main(+N, +K, input[1].split(" ")));
