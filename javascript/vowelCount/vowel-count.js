const getCount = str => {
  let vowelsCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  [...str].map(letter => {
    if (vowels.includes(letter)) {
      console.log('vowel?', letter);
      vowelsCount++;
    }
  });
  return vowelsCount;
};
