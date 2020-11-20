const createPhoneNumber = numbers => {
  const joined = numbers.join('');
  return `(${joined.substring(0, 3)}) ${joined.substring(
    3,
    6
  )}-${joined.substring(6)}`;
};
