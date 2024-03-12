const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map((num) => +num);

function main(n, m, arr) {
  let start = 0,
    sum = 0,
    ret = 0;
  for (let i = 0; i < n; i++) {
    sum += +arr[i];

    while (sum >= m) {
      if (sum === m) ret++;
      sum -= +arr[start];
      start++;
    }
  }

  return ret;
}

console.log(main(N, M, input[1].split(" ")));
