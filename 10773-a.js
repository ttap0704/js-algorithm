const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const K = input.shift();

function main(arr) {
  const st = [];

  arr.forEach((num) => {
    if (+num === 0) {
      st.pop();
    } else {
      st.push(+num);
    }
  });

  return st.length ? st.reduce((a, b) => a + b) : 0;
}

console.log(main(input));
