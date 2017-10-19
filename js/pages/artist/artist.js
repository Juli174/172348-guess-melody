import getElementFromTemplate from '../../append-tempate.js';
import {renderScreen} from '../../change-screen.js';
import renderGenre, {genreEvents} from './../genre/genre.js';
import {initialState, pages, data} from '../../data/data.js';
import artistLevel from './artist-level.js';
import {countScore} from '../count-score.js';

export const setArtistQuestion = () => {
  let question = Math.floor(Math.random() * (data.length - 1));
  pages.artist.answer = {
    name: data[question].artist,
    photo: data[question].image
  };
  pages.artist.melody = data[question].src;
};

export const artistEvents = (artist) => {
  const answers = [...artist.getElementsByClassName(`main-answer`)];

  answers.forEach((answer, i) => {
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
      countScore(i);
    });
  });
};

export default renderArtist;
