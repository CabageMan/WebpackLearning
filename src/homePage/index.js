import _ from 'lodash';
import print from './print.js';


import styles from './style.scss';
import octoCat from './icons8-github.png';


function component() {
    const element = document.createElement('div');
    const image = new Image();
    const printButton = document.createElement('button');
    const firstButton = document.createElement('button');
    const secondButton = document.createElement('button');
    const thirdButton = document.createElement('button');

    element.innerHTML = _.join(['Hello', ' ', 'webpack!'], ' ');
    element.classList.add('red');

    image.src = octoCat;

    printButton.innerHTML = 'Tap to print into console';
    printButton.onclick = print;

    firstButton.innerHTML = 'Go to first page';

    secondButton.innerHTML = 'Go to second page';

    thirdButton.innerHTML = 'Go to third page';

    element.appendChild(image);
    element.appendChild(printButton);
    element.appendChild(firstButton);
    element.appendChild(secondButton);
    element.appendChild(thirdButton);

    return element;
}

document.body.appendChild(component());