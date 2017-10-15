import getElementFromTemplate from '../../append-tempate.js';
import changeScreen from '../../change-screen.js';
import renderGenre from './../genre/genre.js';
import {initialState, pages} from '../../data/data.js';
import artistLevel from './artist-level.js';

const renderArtist = () => {
  const artist = getElementFromTemplate(artistLevel(pages.artist), `main`, `main--level`, `main--level-artist`);

  changeScreen(artist);

  const answers = [...artist.getElementsByClassName(`main-answer`)];

  answers.forEach((answer) => {
    answer.addEventListener(`click`, () => {
      /**
       * тут должна быть проверка правильности ответа
       * если ответ верный
       *   - переход к след экрану
       *   - переход к результатам (отвечено на 10 вопросов)
       * если ответ неверный
       *   - количество нот < 3, переход к след экрану
       *   - количество нот = 3, переход к экрану поражения
       * */
      initialState.mistakes = 1;
      renderGenre();
    });
  });
};

export default renderArtist;
