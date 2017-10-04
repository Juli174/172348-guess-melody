import getElementFromTemplate from '../append-tempate.js';
import changeScreen from '../change-screen.js';
import welcome from './welcome.js';

const tempalate = `<section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

<h2 class="title">Увы и ах!</h2>
<div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
<span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>`;

const timeover = getElementFromTemplate(tempalate);

const replay = timeover.querySelector(`.main-replay`);
replay.addEventListener(`click`, () => {
  changeScreen(welcome);
});

export default timeover;
