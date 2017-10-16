import getElementFromTemplate from '../../append-tempate.js';
import changeScreen, {renderScreen} from '../../change-screen.js';
import {artistEvents, setArtistQuestion} from './../artist/artist.js';
import {pages, data, resetState} from '../../data/data.js';

export const welcomeEvents = (welcome) => {
  resetState();
  setArtistQuestion();
  let play = welcome.querySelector(`.main-play`);
  play.addEventListener(`click`, () => {
    //renderArtist();
    console.log('pages welcome', pages);
    renderScreen(pages.artist, artistEvents);
  });

};

export default welcome;
