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
    if (answer.result && (answer.time <= 30)) {
      result += 2;
    } else if (answer.result && (answer.time > 30)) {
      result++;
    } else if ((!answer.result && (answer.time <= 30)) || (!answer.result && (answer.time > 30))) {
      result -= 2;
    }
  });
  const isWinCombination = (result > 0) && answers.every((answer) => {
    return ((answer.result && (answer.time <= 30)) || (answer.result && (answer.time > 30)));
  });
  if ((notes > 0) && isWinCombination) {
    return 10;
  }
  return result;
};

export default countScore;
