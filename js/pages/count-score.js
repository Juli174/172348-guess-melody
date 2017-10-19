import {setArtistQuestion, artistEvents} from './artist/artist.js';
import {pages, initialState} from '../data/data.js';
import {renderScreen} from '../change-screen.js';
import {winEvent} from './result/result.js';
import {timeoverEvent} from './result/timeover.js';
import {genreEvents} from './genre/genre.js';

export const countScore = (i) => {
  if (i === 0) {
    initialState.score = 1;
  } else if (initialState.mistakes === 2) {
    renderScreen(pages.attempts, timeoverEvent);
    return;
  } else {
    initialState.score = -2;
    initialState.mistakes = 1;
  }
  initialState.page = 1;
  if (initialState.page >= 10) {
    renderScreen(pages.win, winEvent);
    return;
  } else {
    let screen = Math.ceil(Math.random() * 2);
    if (screen === 2) {
      renderScreen(pages.genre, genreEvents);
    } else {
      setArtistQuestion();
      renderScreen(pages.artist, artistEvents);
    }
    return;
  }
};
