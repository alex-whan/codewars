const solve = arr => {
  arr.map(num => {
    if (num < 0) {
      if (!arr.includes(Math.abs(num))) {
        return num;
      }
    } else if (num > 0) {
      if (!arr.includes(`-${num}`)) {
        return num;
      }
    }
  });
};
