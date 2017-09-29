const template = document.querySelector(`template`);
const links = template.content.childNodes;

let currentIndex = 0;

const displaySection = document.querySelector(`section.main`);

let getScreens = () => {
  let screens = Object.keys(links).filter((ind) => {
    return links[ind].tagName && links[ind].tagName.toLowerCase() === `section`;
  });
  return screens.map((screen) => {
    return links[screen];
  });
};

let screens = getScreens();

let sortScreens = () => {
  let actions = {};
  let results = [];
  screens.forEach((screen) => {
    if (screen.classList.contains(`main--welcome`)) {
      actions[`0`] = screen;
    } else if (screen.classList.contains(`main--level-artist`)) {
      actions[`1`] = screen;
    } else if (screen.classList.contains(`main--level-genre`)) {
      actions[`2`] = screen;
    } else {
      results.push(screen);
    }
  });
  screens = Object.values(actions).concat(results);
};

sortScreens();

let setScreen = () => {
  if (displaySection.firstChild) {
    displaySection.removeChild(displaySection.firstChild);
  }

  displaySection.appendChild(screens[currentIndex.toString()]);
};

setScreen(currentIndex);

document.addEventListener(`keydown`, (event) => {
  if (event.altKey && event.key === `ArrowLeft`) {
    currentIndex = currentIndex ? currentIndex - 1 : currentIndex;
    setScreen(currentIndex);
  } else if (event.altKey && event.key === `ArrowRight`) {
    currentIndex = currentIndex === 5 ? currentIndex : currentIndex + 1;
    setScreen(currentIndex);
  }
});
