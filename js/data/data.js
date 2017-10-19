export let initialState = {
  _page: 0,
  get page() {
    return this._page;
  },
  set page(num) {
    this._page += num;
  },
  setPage(num) {
    this._page = num;
  },
  minutes: `05`,
  seconds: `00`,
  _mistakes: 2,
  get mistakes() {
    return this._mistakes;
  },
  set mistakes(count) {
    this._mistakes += count;
  },
  setMistakes(num) {
    this._mistakes = num;
  },
  _score: 0,
  get score() {
    return this._score;
  },
  set score(res) {
    this._score += res;
  },
  setScore(num) {
    this._score = num;
  }
};

export const resetState = () => {
  initialState.setPage(0);
  initialState.setMistakes(0);
  initialState.setScore(0);
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
    _melody: ``,
    get melody() {
      return this._melody;
    },
    set melody(url) {
      this._melody = url;
    },
    _answers: [
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
    ],
    get answers() {
      return this._answers;
    },
    set answer(item) {
      this._answers[0] = item;
    }
  },
  genre: {
    id: `genre`,
    title: `Выберите инди-рок треки`,
    melodies: new Set([
      `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
      `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
      `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
      `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`
    ]),
    genre: ``
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

export const data = [
  {
    artist: `Kevin MacLeod`,
    name: `Long Stroll`,
    image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
    src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
    genre: `Jazz`
  },
  {
    artist: `Jingle Punks`,
    name: `In the Land of Rhinoplasty`,
    image: `https://i.vimeocdn.com/portrait/992615_300x300`,
    src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
    genre: `Rock`
  },
  {
    artist: `Audionautix`,
    name: `Travel Light`,
    image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
    src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
    genre: `Country`
  },
  {
    artist: `Riot`,
    name: `	Level Plane`,
    image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
    src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
    genre: `R&B`
  },
  {
    artist: `Jingle Punks`,
    name: `Lucky Day`,
    image: `https://i.vimeocdn.com/portrait/992615_300x300`,
    src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
    genre: `Pop`
  },
  {
    artist: `Gunnar Olsen`,
    name: `Home Stretch`,
    image: `https://f4.bcbits.com/img/0004181452_10.jpg`,
    src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
    genre: `Electronic`
  }
];
