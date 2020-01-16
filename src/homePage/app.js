import _ from 'lodash';
import print from './print.js';
import createIssueForm from './formBlock';
import styles from './style.scss';
import octoCat from './icons8-github.png';


function component() {
    const element = document.createElement('div');
    const image = new Image();
    const printButton = document.createElement('button');
    
    const secondButton = document.createElement('button');
    const thirdButton = document.createElement('button');

    element.innerHTML = _.join(['Hello', ' ', 'webpack!'], ' ');
    element.classList.add('red');

    image.src = octoCat;

    printButton.innerHTML = 'Tap to print into console';
    printButton.onclick = print;

    secondButton.innerHTML = 'Go to second page';

    thirdButton.innerHTML = 'Go to third page';

    element.appendChild(image);
    element.appendChild(printButton);
    element.appendChild(createFirstButton());
    element.appendChild(secondButton);
    element.appendChild(thirdButton);

    return element;
}

function createFirstButton() {
    const button = document.createElement('button');
    button.innerHTML = 'Go to First Page';
    button.onclick = onFirstButtonClick;
    return button;
}

function onFirstButtonClick() {
    window.location = /about/;
}

// function createA() {
//     const link = document.createElement('a');
//     link.title = 'Go to About';
//     link.innerHTML = 'Go to About';
//     link.href = "/about/";
//     link.classList.add('button');
//     return link;
// }

// document.body.appendChild(component());
document.body.appendChild(createIssueForm());