let getElementFromTemplate = (template) => {
  const section = document.createElement(`section`);
  section.innerHTML = template;
  return section;
};

export default getElementFromTemplate;
