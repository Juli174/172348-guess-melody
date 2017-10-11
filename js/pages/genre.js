import getElementFromTemplate from '../append-tempate.js';
import changeScreen from '../change-screen.js';
import result from './result.js';
import attempts from './attempts.js';
import timeover from './timeover.js';
import infoTemplate from './score.js';
import {initialState, pages} from '../data/data.js';
import genreLevel from './genre-level.js';

let template = ``;

template += infoTemplate(initialState);

template += genreLevel(pages.genre);

const genre = getElementFromTemplate(template, `main`, `main--level`, `main--level-genre`);

const button = genre.querySelector(`.genre-answer-send`);
button.setAttribute(`disabled`, `disabled`);
const melodies = [...genre.getElementsByClassName(`genre-answer`)];
melodies.forEach((melody) => {
  melody.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    button.removeAttribute(`disabled`);
  });
});

const results = [result, attempts, timeover];

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
  changeScreen(results[ind]);
});

export default genre;
