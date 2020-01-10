import _ from 'lodash';
import styles from './style.scss';
import Icon from './icons8-github.png';

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', ' ', 'webpack'], '');
    element.classList.add('red');

    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());