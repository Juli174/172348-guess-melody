let getResultString = (statistics, score) => {
  statistics.push(score);
  statistics.sort((a, b) => {
    return b - a;
  });
  const i = statistics.indexOf(score);
  const t = statistics.length;
  const n = (t - i) / t;
  return `Вы заняли ${i}-ое место из ${t} игроков. Это лучше чем у ${n} игроков`;
};

let results = (statistics, current) => {
  if (!Array.isArray(statistics)) {
    return false;
  }
  if ((current.score !== 0) && !current.score) {
    return false;
  }
  if ((current.notes !== 0) && !current.notes) {
    return false;
  }
  if ((current.time !== 0) && !current.time) {
    return false;
  }
  if ((current.time === 0) && (current.score < 0)) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  } else if ((current.notes === 0) && (current.score < 0)) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }
  return getResultString(statistics, current.score);

};

export default results;
