import flasherooni from './flasherooni';
import imgSrc from './boop.gif';
import './index.css';
import initThreeScene from './threeing';

const title = document.getElementById('dog');
const bigHeader = document.getElementById('big-header');
flasherooni(title);
flasherooni(bigHeader);

const image = document.createElement('img');


image.src = imgSrc;

document.body.appendChild(image);

initThreeScene();
