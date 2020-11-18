function maxGap(numbers) {
  let max = 0;

  const sorted = [...numbers].sort((a, b) => a - b);

  for (let i in sorted) {
    let gap = sorted[i] - sorted[i - 1];
    gap > max ? (max = gap) : max;
  }

  return max;
}
