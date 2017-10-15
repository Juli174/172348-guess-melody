import infoTemplate from '../score.js';
import {initialState} from '../../data/data.js';

const genreLevel = (state) => `<section class="main main--level main--level-genre">` +
infoTemplate(initialState) + `
<div class="main-wrap">
      <h2 class="title">Выберите инди-рок треки</h2>
      <form class="genre">

        ${[...state.melodies].map((melody, i) => `
          <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio src="${melody}"></audio>
              <button class="player-control player-control--pause"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-${i + 1}" id="a-${i + 1}">
          <label class="genre-answer-check" for="a-${i + 1}"></label>
        </div>
        `).join(``)}

        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
    </div>
   </section>
`;

export default genreLevel;

