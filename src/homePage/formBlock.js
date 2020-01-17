import * as formElemnts from './formElements';

export const createIssueForm = (header, firstLabel, secondLabel, thirdLabel) => {
    const formFragment = document.createDocumentFragment();
    const formContainer = document.createElement('div');
    const form = document.createElement('form');

    form.id = 'issueInputForm';
    form.name = 'issueForm';
    form.appendChild(formElemnts.createTitledInput('Description', 'Describe the issue ...', 'issueDescInput', 'description'));
    form.appendChild(formElemnts.createTitledSelect('Severity', 'issueSeverityInput', 'severity'));
    form.appendChild(formElemnts.createTitledInput('Assigned To', 'Enter responsible ...', 'issueAssignedToInput', 'assignedTo'));
    form.appendChild(formElemnts.createSubmitButton('Add', 'issueSubmitButton'));

    formContainer.classList.add('form');
    formContainer.innerHTML = '<span class="form-header">Add New Issue:</span>';
    formContainer.appendChild(form);

    formFragment.appendChild(formContainer);
    return formFragment;
};

// Validation
export function validateIssueForm() {
    let descriptionValue = document.forms["issueForm"]["description"].value;
    let assignedToValue = document.forms["issueForm"]["assignedTo"].value;

    if (!isValid(descriptionValue) && !isValid(assignedToValue)) {
        alert("\"Description\" and \"Assigned to\" must be filled out");
    } else if (!isValid(descriptionValue)) {
        alert("\"Description\" must be filled out");
    } else if (!isValid(assignedToValue)) {
        alert("\"Assigned to\" must be filled out");
    } else {
        let severityValue = document.forms["issueForm"]["severity"].value;
        let alertString = `You entered:\nDescription: ${descriptionValue}\nSeverity: ${severityValue}\nAssigned to: ${assignedToValue}`;
        alert(alertString);
    }
}

// Validation Helpers
function isValid(str) {
    return (!isEmpty(str) && !isBlank(str) && !hasOnlyWhiteSpaces(str));
}

function isEmpty(str) {
    return (!str || 0 === str.length);
}

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

function hasOnlyWhiteSpaces(str) {
    return (str.length === 0 || !str.trim());
}