import _ from 'lodash';
import print from './print.js';


import styles from './style.scss';
import octoCat from './icons8-github.png';


function component() {
    const element = document.createElement('div');
    const image = new Image();
    const button = document.createElement('button');

    element.innerHTML = _.join(['Hello', ' ', 'webpack!'], ' ');
    element.classList.add('red');

    image.src = octoCat;

    button.innerHTML = 'Tap to print into console';
    button.onclick = print;

    element.appendChild(button);
    element.appendChild(image);

    return element;
}

document.body.appendChild(component());