const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`
  );
  return returns;
}

array.reduce(reducer);

/*accumulator: 15, currentValue: 16, prevv: 1, index: 15,16,17,18,19, returns: 32
accumulator: 32, currentValue: 17, prevv: 2, index: 15,16,17,18,19, returns: 51
accumulator: 51, currentValue: 18, prevv: 3, index: 15,16,17,18,19, returns: 72
accumulator: 72, currentValue: 19, prevv: 4, index: 15,16,17,18,19, returns: 95*/
