const displaySection = document.querySelector(`section.main`);

let changeScreen = (node) => {
  if (node) {
    if (displaySection.firstChild) {
      displaySection.removeChild(displaySection.firstChild);
    }
    displaySection.appendChild(node);
  }

};

export default changeScreen;
