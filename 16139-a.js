const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const S = input.shift();
const Q = input.shift();
function main(str, q, arr) {
  const prefix = {};
  ret = [];

  const qArr = new Set();
  for (let i = 0; i < q; i++) {
    qArr.add(arr[i][0]);
  }

  for (let i = 0; i < q; i++) {
    const [al, s, e] = arr[i].split(" ");

    if (!prefix[al]) {
      prefix[al] = [];

      let tmp = 0;
      for (let y = 0; y < str.length; y++) {
        const add = str[y] === al ? 1 : 0;

        tmp += add;
        prefix[al].push(tmp);
      }
    }

    ret.push(prefix[al][+e] - (prefix[al][+s - 1] ?? 0));
  }

  console.log(ret.join("\n"));
}

main(S, +Q, input);
