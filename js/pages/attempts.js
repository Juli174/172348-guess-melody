import getElementFromTemplate from '../append-tempate.js';
import changeScreen from '../change-screen.js';
import welcome from './welcome.js';

const template = `<section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

<h2 class="title">Какая жалость!</h2>
<div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>
<span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>`;

const attempts = getElementFromTemplate(template, `main`, `main--result`);

const replay = attempts.querySelector(`.main-replay`);
replay.addEventListener(`click`, () => {
  changeScreen(welcome);
});

export default attempts;
