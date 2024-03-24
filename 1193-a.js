const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

function main(num) {
  let i = 1;
  while (num > i) {
    num -= i;
    i++;
  }

  if (i % 2 === 1) {
    num = Math.abs(i + 1 - num);
  }

  return `${num}/${i - num + 1}`;
}

console.log(main(+input));
