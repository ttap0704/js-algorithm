const fs = require("fs");
const [N, input, ...ques] = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

ques.shift();

function main(n, arr, q) {
  const ret = [];

  arr = [0, ...arr];

  q.forEach((cur) => {
    const [male, num] = cur.split(" ");
    let curNum = +num;

    switch (male) {
      case "1": {
        while (curNum <= n) {
          arr[curNum] = !arr[curNum];
          curNum += +num;
        }
        break;
      }
      case "2": {
        arr[curNum] = !arr[curNum];
        curNum--;

        while (true) {
          if (
            curNum >= 1 &&
            arr[curNum] == arr[+num + Math.abs(+num - curNum)]
          ) {
            arr[curNum] = !arr[curNum];
            arr[+num + Math.abs(+num - curNum)] =
              !arr[+num + Math.abs(+num - curNum)];
            curNum--;
          } else {
            break;
          }
        }
        break;
      }
    }
  });

  let i = 0;
  while (i * 20 <= n) {
    ret.push(
      arr
        .slice(i * 20 + 1, (i + 1) * 20 + 1)
        .map((a) => (a ? "1" : "0"))
        .join(" ")
    );
    i++;
  }

  return ret.join("\n");
}

console.log(
  main(
    N,
    input.split(" ").map((a) => a === "1"),
    ques
  )
);
