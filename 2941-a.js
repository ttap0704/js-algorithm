const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

function main(str) {
  const reg = /(c=|c-|dz=|d-|lj|nj|s=|z=)/g;
  const arr = str.split(reg).filter((s) => s);
  const check = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
  let ret = 0;

  arr.forEach((s) => {
    if (check.includes(s)) ret++;
    else ret += s.length;
  });

  return ret;
}

console.log(main(input));
