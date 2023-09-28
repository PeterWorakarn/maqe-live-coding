const mergeArray = (...args) => {
  const allData = args;

  let answer = [];
  let maxLength = 0;
  let totalArgs = allData.length;
  allData.map((eachArg) => {
    if (maxLength < eachArg.length) {
      maxLength = eachArg.length;
    }
  });

  // TODO:
  // find longest array
  // count args
  // loop each n position of each arg util longest array
  // if cannot access array[n] then skip
  // push data

  // FIRST SOLUTION
  // for (
  //   let index = 0;
  //   index < maxLength;
  //   index++
  // ) {
  //   if (allData[0][index]) {
  //     answer.push(allData[0][index]);
  //   }
  //   if (allData[1][index]) {
  //     answer.push(allData[1][index]);
  //   }
  //   if (allData[2][index]) {
  //     answer.push(allData[1][index]);
  //   }
  // }
  // return answer;

  let countArg = 0;
  while (countArg < maxLength) {
    for (let idx = 0; idx < totalArgs; idx++) {
      if (allData[idx][countArg]) {
        answer.push(allData[idx][countArg]);
      }
    }
    countArg = countArg + 1;
  }

  return answer;
};

// console.info(
//   mergeArray([1, 2, 3], ['x', 'y', 'z']),
// );

console.assert(
  mergeArray([1, 2, 3], ['x', 'y', 'z']),
  [1, 'x', 2, 'y', 3, 'z'],
);

console.assert(
  mergeArray([1, 2], ['a', 'b']),
  [1, 'a', 2, 'b', 3],
);

console.assert(
  mergeArray([1, 2], ['a', 'b']),
  [1, 'a', 2, 'b', 3],
);

console.assert(
  mergeArray([1, 2, 3], ['x', 'y', 'z'], ['a', 'b']),
  [1, 'x', 'a', 2, 'y', 'b', 3, 'z'],
);
