import changeScreen, {renderScreen} from './change-screen.js';
import {welcomeEvents} from './pages/welcome/welcome';
import {pages} from './data/data.js';

renderScreen(pages.welcome, welcomeEvents);
