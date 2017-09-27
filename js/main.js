const template = document.querySelector('template');
const links = template.content.childNodes;

let fragment = document.createDocumentFragment();

let currentIndex = 0;

let displaySection = document.querySelector('section.main');

let getScreens = () => {
	let screens = Object.keys(links).filter((ind) => {
		return links[ind].tagName && links[ind].tagName.toLowerCase() === 'section';
	});
	return screens.map((screen) => {
		return links[screen];
	});
};

let setScreen = () => {
	let screens = getScreens();
	if(displaySection.firstChild) {
		displaySection.replaceWith(screens[currentIndex.toString()]);
	} else {
		displaySection.appendChild(screens[currentIndex.toString()]);
	}
}

setScreen(currentIndex);

document.addEventListener('keydown', (event) => {
	if (event.code == 'AltRight') {
		currentIndex = currentIndex ? currentIndex - 1 : currentIndex;
		setScreen(currentIndex);
	} else if(event.code == 'AltLeft') {
		currentIndex = currentIndex == 5 ? currentIndex : currentIndex + 1;
		setScreen(currentIndex);
	}
})
