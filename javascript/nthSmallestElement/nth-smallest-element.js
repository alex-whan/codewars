const nthSmallest = (arr, pos) => {
  const sorted = arr.sort((a, b) => a - b);
  const shortest = sorted[pos - 1];
  return shortest;
};
