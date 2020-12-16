const detectPangram = string => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let count = 0;
  for (let letter of alphabet) {
    string.toLowerCase().indexOf(letter) > -1 ? count++ : count;
  }
  return count >= 26;
};
