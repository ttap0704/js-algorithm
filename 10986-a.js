const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ");

// (p[i] - [j]) % M = 0
// (p[i] % M) - (p[j] % M) = 0
// p[i] % M = p[j] % M
// p[i] = p[j]

function main(n, m, arr) {
  const prefix = [],
    prefixCount = {};
  let ret = 0;

  for (let i = 0; i < n; i++) {
    if (i == 0) prefix[i] = +arr[i] % m;
    else prefix[i] = (prefix[i - 1] + +arr[i]) % m;
    prefix[i] %= m;

    if (prefix[i] === 0) ret++;

    prefixCount[prefix[i]] = prefixCount[prefix[i]]
      ? prefixCount[prefix[i]] + 1
      : 1;
  }

  Object.values(prefixCount).forEach((val) => {
    ret += (val * (val - 1)) / 2;
  });

  return ret;
}

console.log(main(+N, +M, input[0].split(" ")));
