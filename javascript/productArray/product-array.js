const productArray = numbers => {
  const products = [];
  const product = numbers.reduce((a, b) => a * b, 1);

  for (let num of numbers) {
    products.push(product / num);
  }

  return products;
};
