import getElementFromTemplate from '../../append-tempate.js';
import changeScreen, {renderScreen} from '../../change-screen.js';
import renderArtist, {artistEvents} from './../artist/artist.js';
import {pages} from '../../data/data.js';

//const template = `
//<section class="main main--welcome">
//<section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
//<button class="main-play">Начать игру</button>
//<h2 class="title main-title">Правила игры</h2>
//<p class="text main-text">
//  Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
//Ошибиться можно 3 раза.<br>
//Удачи!
//</p>
//</section>`;
//
//const welcome = getElementFromTemplate(template);
//
//let play = welcome.querySelector(`.main-play`);
//
//play.addEventListener(`click`, () => {
//  //renderArtist();
//  console.log('pages welcome', pages);
//  renderScreen(pages.artist, artistEvents);
//});



export const welcomeEvents = (welcome) => {
  let play = welcome.querySelector(`.main-play`);
  play.addEventListener(`click`, () => {
    //renderArtist();
    console.log('pages welcome', pages);
    renderScreen(pages.artist, artistEvents);
  });

};

export default welcome;
