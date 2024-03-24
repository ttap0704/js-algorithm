const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();

function main(arr) {
  let ret = 0;

  arr.forEach((str) => {
    const check = {};
    let before = "";
    for (let i = 0, leng = str.length; i < leng; i++) {
      if (before !== str[i] && check[str[i]]) break;

      check[str[i]] = true;
      before = str[i];
      if (i === leng - 1) ret++;
    }
  });

  return ret;
}

console.log(main(input));
