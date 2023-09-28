/*
Implement a function "approve" which takes 1 array input containing the names of people who approve an item. 
it must return the display text as shown in the example

Example: 
[] => 'on one approve this'
['Tao'] => 'Tao approves this'
['Tao', 'Gong'] => 'Tao and Gong approve this'
['Tao', 'Gong', 'Big'] => 'Tao, Gong and Big approve this'
['Tao', 'Gong', 'Big', 'Benz'] => 'Tao, Gong and 2 others approve this'

*/

const approve = (data) => {
  const singleContent = 'approves this';
  const content = 'approve this';
  if (data.length === 0) {
    return 'no one'.concat(content);
  } else if (data.length === 1) {
    return `${data[0]}`.concat(singleContent);
  } else if (data.length === 2) {
    return `${data[0]} and ${data[1]}`.concat(
      content,
    );
  } else {
    return `${data[0]}, ${data[1]} and ${
      data.length < 3
        ? `${data.length - 2} others`
        : data[2]
    }`.concat(content);
  }
};

console.info([], 'on one approve this');
console.info(['Tao'], 'Tao approves this');
console.info(
  ['Tao', 'Gong'],
  'Tao and Gong approve this',
);
console.info(
  ['Tao', 'Gong', 'Big'],
  'Tao, Gong and Big approve this',
);
console.info(
  ['Tao', 'Gong', 'Big', 'Benz'],
  'Tao, Gong and 2 others approve this',
);
