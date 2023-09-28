/*
implement a function that does the following:
- receive an array of numbers
- receive the word "odd" or "even"
- return an array of indexes of every even/odd numbers depends on the given input
*/

const indexOddEven = (data, command) => {
  let answer = [];
  data.map((eachData, idx) => {
    if (
      eachData % 2 === 0 &&
      command === 'even'
    ) {
      answer.push(idx);
    }
    if (eachData % 2 !== 0 && command === 'odd') {
      answer.push(idx);
    }
  });
  return answer;
};

console.info(
  indexOddEven([1, 2, 3, 4], 'even'),
  [1, 3],
);

console.info(
  indexOddEven([10, 11, 31, 5, 8], 'even'),
  [0, 4],
);

console.info(
  indexOddEven([10, 11, 31, 5, 8], 'odd'),
  [1, 2, 3],
);
