const multiplicationTable = size => {
  let row = 0;
  let col = 0;
  const table = [];

  for (let i = 0; i < size; i++) {
    col = 0;
    row++;

    const rowData = [];

    for (let j = 0; j < size; j++) {
      col++;
      let product = row * col;
      rowData.push(product);
    }
    table.push(rowData);
  }

  return table;
};
