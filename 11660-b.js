const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((arr) => arr.split(" ").map((num) => +num));

const [N, M] = input.shift();
const arr = [Array.from({ length: N + 1 }, () => 0)];
const res = [];
for (let i = 0; i < N; i++) {
  arr.push([0, ...input.shift()]);
}

const prefix = Array.from({ length: N + 1 }, () => []).map(() =>
  Array.from({ length: N + 1 }, () => 0)
);

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    prefix[i][j] =
      prefix[i - 1][j] + prefix[i][j - 1] - prefix[i - 1][j - 1] + arr[i][j];
  }
}

input.forEach(([x1, y1, x2, y2]) => {
  res.push(
    prefix[x2][y2] -
      prefix[x1 - 1][y2] -
      prefix[x2][y1 - 1] +
      prefix[x1 - 1][y1 - 1]
  );
});

console.log(res.join("\n"));
