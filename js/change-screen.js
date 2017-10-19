import {initialState} from './data/data.js';
import artistLevel from './pages/artist/artist-level.js';
import genreLevel from './pages/genre/genre-level.js';
import welcomeLevel from './pages/welcome/welcome-level.js';
import resultLevel from './pages/result/result-level.js';
import getElementFromTemplate from './append-tempate.js';

const displaySection = document.querySelector(`section.main`);

const pages = {
  artist: artistLevel,
  genre: genreLevel,
  welcome: welcomeLevel,
  result: resultLevel
};

let getTemplateByName = (name) => {
  return pages[name];
};

export let renderScreen = (page, callback) => {
  let node = getElementFromTemplate(getTemplateByName(page.id)(page));
  if (node) {
    if (displaySection.firstChild) {
      displaySection.removeChild(displaySection.firstChild);
    }
    displaySection.appendChild(node);
  }
  callback(node);
};
export default changeScreen;
