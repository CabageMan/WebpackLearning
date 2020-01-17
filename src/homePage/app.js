"use strict";

import _ from 'lodash';
import print from './print.js';
import * as issueForm from './formBlock';
import styles from './style.scss';
import octoCat from './icons8-github.png';

function createIssueComponent() {
    const element = document.createElement('div');
    
    element.innerHTML = '<h1 style="huge-text">JS Issue Tracker <small class="small-text" style="color: #939393;">for Webpack learning</small></h1>';
    element.appendChild(issueForm.createIssueForm());

    return element;
}

document.body.appendChild(createIssueComponent());

// Need to improve form creating. It's not clear where ID of button is set.
document.getElementById("issueSubmitButton").addEventListener("click", function(event){
    event.preventDefault();
    issueForm.validateIssueForm();
});