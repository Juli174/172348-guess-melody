let getElementFromTemplate = (template, ...classes) => {
  const section = document.createElement(`section`);
  if (classes && classes.length) {
    classes.forEach((name) => {
      section.classList.add(name);
    });
  }
  section.innerHTML = template;
  return section;
};

export default getElementFromTemplate;
