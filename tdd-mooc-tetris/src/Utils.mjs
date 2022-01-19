function twoDimensionalArraytoString(arr) {
  const height = arr.length;

  let result = "";
  for (let i = 0; i < height; i++) {
    let temp = "";
    for (let j = 0; j < arr[i].length; j++) {
      temp = temp.concat("", arr[i][j]);
    }
    result = result.concat("", temp + "\n");
  }
  return result;
}

export { twoDimensionalArraytoString };
