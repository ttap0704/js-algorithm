const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ");
const arr = [];
for (let i = 0; i < N; i++) {
  arr.push(input.shift().split(" "));
}
const [K] = input.shift().split(" ");

function main(n, m, k, map, question) {
  const ret = [];

  const prefix = Array.from({ length: n + 1 }, () =>
    Array.from({ length: m + 1 }).fill(0)
  );

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      prefix[i][j] =
        +prefix[i - 1][j] +
        +prefix[i][j - 1] +
        +arr[i - 1][j - 1] -
        +prefix[i - 1][j - 1];
    }
  }

  question.forEach((q) => {
    const [i, j, x, y] = q.split(" ").map((num) => num);
    ret.push(
      prefix[x][y] - prefix[i - 1][y] - prefix[x][j - 1] + prefix[i - 1][j - 1]
    );
  });

  return ret;
}

console.log(main(+N, +M, +K, arr, input).join("\n"));
