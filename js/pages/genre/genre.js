import getElementFromTemplate from '../../append-tempate.js';
import {renderScreen} from '../../change-screen.js';
import result, {winEvent} from './../result/result.js';
import attempts, {attemptEvent} from './../result/attempts.js';
import timeover, {timeoverEvent} from './../result/timeover.js';
import infoTemplate from './../score.js';
import {initialState, pages} from '../../data/data.js';
import genreLevel from './genre-level.js';
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

  const results = [
    {
      name: pages.win,
      event: winEvent
    },
    {
      name: pages.attempts,
      event: attemptEvent
    },
    {
      name: pages.timeover,
      event: timeoverEvent
    }
  ];

  const min = 0;
  const max = 3;
  let randomResult = () => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  button.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    const ind = randomResult();
    button.setAttribute(`disabled`, `disabled`);
    /**
     * следующий экран определяется по аналогии с artist
     * */
    countScore(0);
    //renderScreen(results[ind].name, results[ind].event);
  });
};



export default renderGenre;
