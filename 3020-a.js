const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const [N, M] = input
  .shift()
  .split(" ")
  .map((v) => parseInt(v));

//종유석
const bottom = Array.from({ length: M + 1 }, () => 0);
//석순
const top = Array.from({ length: M + 1 }, () => 0);

input.forEach((v, idx) => {
  idx % 2 === 0 ? bottom[parseInt(v)]++ : top[M - parseInt(v) + 1]++;
});
console.log({ bottom, top });
for (let i = 1; i <= M; i++) {
  top[i] += top[i - 1];
  bottom[M - i] += bottom[M - i + 1];
}
console.log({ bottom, top });
