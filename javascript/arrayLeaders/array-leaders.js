const arrayLeaders = numbers => {
  const leaders = [];

  for (let i = 0; i < numbers.length; i++) {
    let total = 0;
    for (let j = i + 1; j < numbers.length; j++) {
      total += numbers[j];
    }
    if (numbers[i] > total) {
      leaders.push(numbers[i]);
    }
  }
  return leaders;
};
