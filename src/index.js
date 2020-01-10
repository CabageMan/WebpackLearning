import _ from 'lodash';
import styles from './style.scss';

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', ' ', 'webpack'], '');
    element.classList.add('red');
    return element;
}

document.body.appendChild(component());