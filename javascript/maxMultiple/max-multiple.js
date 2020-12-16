const maxMultiple = (divisor, bound) => {
  let largest = 0;
  for (let i = 0; i <= bound; i++) {
    i % divisor === 0 && i > largest ? (largest = i) : undefined;
  }
  return largest;
};
