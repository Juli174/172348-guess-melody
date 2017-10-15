import {initialState} from './data/data.js';

const displaySection = document.querySelector(`section.main`);

let changeScreen = (node) => {
  if (node) {
    if (displaySection.firstChild) {
      displaySection.removeChild(displaySection.firstChild);
    }
    displaySection.appendChild(node);
  }
};


export let newChangeScreen = (node, callback) => {
  if (node) {
    if (displaySection.firstChild) {
      displaySection.removeChild(displaySection.firstChild);
    }
    displaySection.appendChild(node);
  }
  callback(node);
};
export default changeScreen;
