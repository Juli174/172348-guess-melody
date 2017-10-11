import getElementFromTemplate from '../append-tempate.js';
import changeScreen from '../change-screen.js';
import genre from './genre.js';
import {initialState, pages} from '../data/data.js';
import infoTemplate from './score.js';
import artistLevel from './artist-level.js';

let template = ``;

template += infoTemplate(initialState);

template += artistLevel(pages.artist);

const artist = getElementFromTemplate(template, `main`, `main--level`, `main--level-artist`);

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
    changeScreen(genre);
  });
});

export default artist;
