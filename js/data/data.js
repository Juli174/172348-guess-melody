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

  },
  artist: {
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
    title: `Выберите инди-рок треки`,
    melodies: new Set([
      `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
      `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
      `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
      `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`
    ])
  }
};
