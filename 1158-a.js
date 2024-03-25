const fs = require("fs");
const [N, K] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ");

function main(n, k) {
  const ret = [],
    list = { 0: 1 };

  for (let i = 1; i <= n; i++) {
    if (i === n) list[i] = 1;
    else list[i] = i + 1;
  }

  let cur = 0;
  while (ret.length !== n) {
    let i = k - 1;
    while (i--) {
      cur = list[cur];
    }

    ret.push(list[cur]);
    list[cur] = list[list[cur]];
  }

  return ret.join(", ");
}

console.log(`<${main(+N, +K)}>`);
