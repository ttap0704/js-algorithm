const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

function main(n) {
  let ret = 0;

  let cnt = 0;
  for (let i = n.length - 1; i >= 0; i--) {
    if (i === 0) ret += (+n - 10 ** cnt + 1) * (cnt + 1);
    else ret += 10 ** cnt * 9 * (cnt + 1);
    cnt++;
  }

  return ret;
}

console.log(main(input));
