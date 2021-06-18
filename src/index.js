'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import addDot from './modules/addDot';
import setCommandImg from './modules/setCommandImg';
import checkInput from './modules/checkInput';
import calc from './modules/calc';
import slider from './modules/slider';
import sendForm from './modules/sendForm';

maskPhone('.form-phone');
countTimer('10 july 2021');
toggleMenu();
togglePopup();
tabs();
addDot();
setCommandImg();
checkInput();
calc(100);
slider();
sendForm();