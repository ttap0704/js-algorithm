const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((num) => +num);

// 1. 누적합 구하기
// 2. 100과의 갭 차이를 구한 후,
// 3. 갭차이가 이전까지 구한 최소값보다 많기 전까지 탐색
let mn = 100;
let ret = 0;
let prefix = 0;

for (let i = 0, N = input.length; i < N; i++) {
  prefix += input[i];
  const gap = Math.abs(100 - prefix);

  if (gap > mn) break;
  mn = Math.min(mn, gap);
  ret = prefix;
}

console.log(ret);
