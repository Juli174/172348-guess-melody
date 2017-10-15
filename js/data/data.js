export let initialState = {
  _page: `welcome`,
  get page() {
    return page;
  },
  set page (name) {
    this._page = name;
  },
  minutes: '05',
  seconds: '00',
  _mistakes: 2,
  get mistakes () {
    return this._mistakes;
  },
  set mistakes (count) {
    this._mistakes = count;
  }
};

export let pages = {
  welcome: {
    id: `welcome`,
    title: `Угадай мелодию`,
    play: `Начать игру`,
    mainTitle: `Правила игры`,
    text: new Set([
      `Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.`,
      `Ошибиться можно 3 раза.`,
      `Удачи!`
    ])
  },
  artist: {
    id: `artist`,
    title: `Кто исполняет эту песню?`,
    melody: ``,
    answers: new Set([
      {
        name: `Пелагея`,
        photo: `http://placehold.it/134x134`
      },
      {
        name: `Краснознаменная дивизия имени моей бабушки`,
        photo: `http://placehold.it/134x134`
      },
      {
        name: `Lorde`,
        photo: `http://placehold.it/134x134`
      }
    ])
  },
  genre: {
    id: `genre`,
    title: `Выберите инди-рок треки`,
    melodies: new Set([
      `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
      `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
      `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
      `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`
    ])
  },
  win: {
    id: `result`,
    topTitle: `Угадай мелодию`,
    title: `Вы настоящий меломан!`,
    stat: new Set([
      `За&nbsp;3&nbsp;минуты и 25&nbsp;секунд`,
      `вы&nbsp;набрали 12 баллов (8 быстрых)`,
      `совершив 3 ошибки`
    ]),
    comparison: `Вы заняли 2 место из 10. Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков`,
    replay: `Сыграть ещё раз`
  },
  attempts: {
    id: `result`,
    topTitle: `Угадай мелодию`,
    title: `Увы и ах!`,
    stat: new Set([
      `Время вышло!`,
      `Вы не успели отгадать все мелодии`
    ]),
    replay: `Попробовать ещё раз`
  },
  timeover: {
    id: `result`,
    topTitle: `Угадай мелодию`,
    title: `Какая жалость!`,
    stat: new Set([
      `У вас закончились все попытки.`,
      `Ничего, повезёт в следующий раз!`
    ]),
    replay: `Попробовать ещё раз`
  }
};
