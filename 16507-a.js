const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let question = input.shift(),
  i = 0;
const [R, C, Q] = question.split(" ");
const map = [];
while (i < R) {
  map.push(input.shift().split(" "));
  i++;
}

function main(r, c, q, arr, ques) {
  const prefix = Array.from({ length: r + 1 }, () => []).map(() =>
      Array.from({ length: c + 1 }, () => 0)
    ),
    ret = [];
  for (let i = 1; i <= r; i++) {
    for (let j = 1; j <= c; j++) {
      prefix[i][j] =
        prefix[i - 1][j] +
        prefix[i][j - 1] -
        prefix[i - 1][j - 1] +
        +arr[i - 1][j - 1];
    }
  }

  ques.forEach((tmp) => {
    const [y1, x1, y2, x2] = tmp.split(" ").map((num) => Number(num));
    ret.push(
      Math.floor(
        (prefix[y2][x2] -
          prefix[y1 - 1][x2] -
          prefix[y2][x1 - 1] +
          prefix[y1 - 1][x1 - 1]) /
          ((y2 - y1 + 1) * (x2 - x1 + 1))
      )
    );
  });

  return ret.join("\n");
}

console.log(main(+R, +C, +Q, map, input));
