import getElementFromTemplate from '../../append-tempate.js';
import changeScreen, {renderScreen} from '../../change-screen.js';
import renderGenre, {genreEvents} from './../genre/genre.js';
import {initialState, pages} from '../../data/data.js';
import artistLevel from './artist-level.js';

export const artistEvents = (artist) => {
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
      //renderGenre();
      renderScreen(pages.genre, genreEvents);
    });
  });
};

export default renderArtist;
