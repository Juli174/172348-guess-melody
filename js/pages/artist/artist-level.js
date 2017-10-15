import infoTemplate from '../score.js';
import {initialState} from '../../data/data.js';

const artistLevel = (state) => infoTemplate(initialState) + `
<div class="main-wrap">
      <h2 class="title main-title">${state.title}</h2>
      <div class="player-wrapper">
        <div class="player">
          <audio src="${state.melody}"></audio>
          <button class="player-control player-control--pause"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <form class="main-list">
        ${[...state.answers].map((answer, i) => `
          <div class="main-answer-wrapper">
            <input class="main-answer-r" type="radio" id="answer-${i + 1}" name="answer" value="val-${i + 1}"/>
            <label class="main-answer" for="answer-${i + 1}">
              <img class="main-answer-preview" src="${answer.photo}"
                 alt="${answer.name}" width="134" height="134">
                 ${answer.name}
            </label>
          </div>
        `).join(``)}
      </form>
    </div>
`;

export default artistLevel;
