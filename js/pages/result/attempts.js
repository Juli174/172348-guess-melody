import {renderScreen} from '../../change-screen.js';
import {welcomeEvents} from './../welcome/welcome.js';
import {pages} from '../../data/data.js';

export const attemptEvent = (attempts) => {
  const replay = attempts.querySelector(`.main-replay`);
  replay.addEventListener(`click`, () => {
    renderScreen(pages.welcome, welcomeEvents);
  });
};
