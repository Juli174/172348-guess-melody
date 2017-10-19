import {renderScreen} from '../../change-screen.js';
import {artistEvents, setArtistQuestion} from './../artist/artist.js';
import {pages, resetState} from '../../data/data.js';

export const welcomeEvents = (welcome) => {
  resetState();
  setArtistQuestion();
  let play = welcome.querySelector(`.main-play`);
  play.addEventListener(`click`, () => {
    renderScreen(pages.artist, artistEvents);
  });
};
