import {countScore} from '../count-score.js';

export const genreEvents = (genre) => {
  const button = genre.querySelector(`.genre-answer-send`);
  button.setAttribute(`disabled`, `disabled`);
  const melodies = [...genre.getElementsByClassName(`genre-answer`)];
  melodies.forEach((melody) => {
    melody.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      button.removeAttribute(`disabled`);
    });
  });

  button.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    button.setAttribute(`disabled`, `disabled`);
    /**
     * следующий экран определяется по аналогии с artist
     * */
    countScore(0);
  });
};
