const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();

function main(arr) {
  const ret = [],
    st = [];

  arr.forEach((str) => {
    const [ques, num] = str.split(" ");

    switch (ques) {
      case "push": {
        st.push(+num);
        break;
      }
      case "pop": {
        const cur = st.pop();
        ret.push(cur === undefined ? -1 : cur);
        break;
      }
      case "size": {
        ret.push(st.length);
        break;
      }
      case "empty": {
        ret.push(st.length === 0 ? 1 : 0);
        break;
      }
      case "top": {
        ret.push(st.length === 0 ? -1 : st[st.length - 1]);
      }
    }
  });

  return ret.join("\n");
}

console.log(main(input));
