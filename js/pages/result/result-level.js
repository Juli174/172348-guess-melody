const resultLevel = (state) => `
<section class="main main--result">
    <section class="logo" title="${state.topTitle}"><h1>${state.topTitle}</h1></section>

    <h2 class="title">${state.title}</h2>
    <div class="main-stat">
    ${[...state.stat].map((item) => item).join(`<br>`)}
    </div>
    <span class="main-comparison">${state.comparison}</span>
    <span role="button" tabindex="0" class="main-replay">${state.replay}</span>
  </section>
`;

export default resultLevel;
