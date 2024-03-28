const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const bingo = input.slice(0, 5).map((b) => b.split(" "));
const ques = input
  .slice(5)
  .map((q) => q.split(" "))
  .reduce((a, b) => [...a, ...b]);

function main(b, q) {
  let ret = 0;

  const map = {},
    check = [];

  let row = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (j === 0) row++;
      if (!check[row]) check[row] = {};
      check[row][b[j][i]] = 1;

      if (!map[b[j][i]]) map[b[j][i]] = [];

      map[b[j][i]].push(row);
    }

    for (let j = 0; j < 5; j++) {
      if (j === 0) row++;
      if (!check[row]) check[row] = {};
      check[row][b[i][j]] = 1;

      if (!map[b[i][j]]) map[b[i][j]] = [];
      map[b[i][j]].push(row);
    }
  }
  check[++row] = {
    [b[0][0]]: 1,
    [b[1][1]]: 1,
    [b[2][2]]: 1,
    [b[3][3]]: 1,
    [b[4][4]]: 1,
  };
  map[b[0][0]].push(row);
  map[b[1][1]].push(row);
  map[b[2][2]].push(row);
  map[b[3][3]].push(row);
  map[b[4][4]].push(row);
  check[++row] = {
    [b[0][4]]: 1,
    [b[1][3]]: 1,
    [b[2][2]]: 1,
    [b[3][1]]: 1,
    [b[4][0]]: 1,
  };
  map[b[0][4]].push(row);
  map[b[1][3]].push(row);
  map[b[2][2]].push(row);
  map[b[3][1]].push(row);
  map[b[4][0]].push(row);

  for (let i = 0; i < q.length; i++) {
    const cur = q[i];

    map[cur].forEach((row) => {
      check[row][cur] = 0;
    });

    let cnt = 0;
    for (let j = 1; j < check.length; j++) {
      const currentCheck = Object.values(check[j]).find((num) => num === 1)
        ? false
        : true;
      if (currentCheck) cnt++;

      if (cnt >= 3) break;
    }
    if (cnt >= 3) {
      ret = i + 1;
      break;
    }
  }

  return ret;
}

console.log(main(bingo, ques));
