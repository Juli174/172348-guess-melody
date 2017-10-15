const welcomeLevel = (state) => `
<section class="main main--welcome">
    <section class="logo" title="${state.title}"><h1>${state.title}</h1></section>
    <button class="main-play">${state.play}</button>
    <h2 class="title main-title">${state.mainTitle}</h2>
    <p class="text main-text">
    ${[...state.text].map((item) => item).join(`<br>`)}
    </p>
  </section>
`;

export default welcomeLevel;
