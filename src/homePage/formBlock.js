import * as formElemnts from './formElements';

const createIssueForm = (header, firstLabel, secondLabel, thirdLabel) => {
    const formFragment = document.createDocumentFragment();
    const formContainer = document.createElement('div');
    const formHeader = document.createElement('p');
    const form = document.createElement('form');
    
    // formheader.classList.add('form-header');
    formHeader.innerText = 'Add New Issue:';

    form.id = 'issueInputForm';
    form.appendChild(formElemnts.createTitledInput('Description', 'Describe the issue ...', 'issueDescInput'));
    form.appendChild(formElemnts.createTitledSelect('Severity', 'issueSeverityInput'));
    form.appendChild(formElemnts.createTitledInput('Assigned To', 'Enter responsible ...', 'issueAssignedToInput'));
    form.appendChild(formElemnts.createSubmitButton('Add'));

    formContainer.classList.add('form');
    formContainer.appendChild(formHeader);
    formContainer.appendChild(form);

    formFragment.appendChild(formContainer);
    return formFragment;
};

export default createIssueForm