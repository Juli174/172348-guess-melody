import getElementFromTemplate from '../append-tempate.js';
import changeScreen from '../change-screen.js';
import artist from './artist.js';

const template = `<section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
<button class="main-play">Начать игру</button>
<h2 class="title main-title">Правила игры</h2>
<p class="text main-text">
  Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
Ошибиться можно 3 раза.<br>
Удачи!
</p>`;

const welcome = getElementFromTemplate(template, `main`, `main--welcome`);

let play = welcome.querySelector(`.main-play`);

play.addEventListener(`click`, () => {
  changeScreen(artist);
});

export default welcome;
