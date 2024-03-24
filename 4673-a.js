function main() {
  const check = {},
    ret = [];

  for (let i = 1; i <= 10000; i++) {
    if (check[i]) continue;
    let cur = i;

    while (cur <= 10000) {
      const str = `${cur}`;
      for (let j = 0; j < str.length; j++) {
        cur += +str[j];
      }

      if (check[cur]) break;
      check[cur] = true;
    }
  }

  for (let i = 1; i <= 10000; i++) {
    if (!check[i]) ret.push(i);
  }

  return ret.join("\n");
}

console.log(main());
