const dashatize = num => {
  const arr = [...Math.abs(num).toString()];
  let result = arr[0];

  if (isNaN(num)) {
    return num.toString();
  }

  for (let i = 1; i < arr.length; i++) {
    let prev = arr[i - 1];
    if (prev % 2 === 0 && arr[i] % 2 === 0) {
      result += arr[i];
    } else {
      result += `-${arr[i]}`;
    }
  }
  return result;
};
