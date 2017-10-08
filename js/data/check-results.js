const countScore = (notes, answers) => {
  let result = 0;
  if (typeof notes !== `number`) {
    return -1;
  }
  if (!answers || (answers.length === 0) || !Array.isArray(answers)) {
    return -1;
  }
  if (((answers.length < 10) && notes === 0)) {
    return -1;
  }
  answers.forEach((answer) => {
    if (answer === 1) {
      result += 2;
    } else if (answer === 2) {
      result++;
    } else if ((answer === 3) || (answer === 4)) {
      result -= 2;
    }
  });
  const isWinCombination = (result > 0) && answers.every((answer) => {
    return (answer === 1) || (answer === 3);
  });
  if ((notes > 0) && isWinCombination) {
    return 10;
  }
  return result;
};

export default countScore;
