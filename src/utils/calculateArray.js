const calculateArrayIndex = (arr) => {
  const halfLength = Math.round(arr.length / 5);
  let newArr = [];
  newArr.push(arr[1]);

  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]);
    if (i + 1) {
      i += halfLength;
    }
  }

  return newArr;
};

export default calculateArrayIndex;
