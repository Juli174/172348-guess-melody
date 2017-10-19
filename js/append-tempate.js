let getElementFromTemplate = (template) => {
  const section = document.createElement(`div`);
  section.innerHTML = template;
  return section.firstElementChild;
};

export default getElementFromTemplate;
