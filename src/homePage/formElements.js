export const createTitledInput = (title, placeholder, inputID, name) => {
    const textFieldContainer = document.createElement('div');
    const textFieldTitle = document.createElement('label');
    const textField = document.createElement('input');

    textFieldTitle.innerHTML = `<label class="form-title" for="${inputID}">${title}</label>`;

    textField.id = inputID;
    textField.name = name;
    textField.type = 'text';
    textField.classList.add('form-input');
    textField.placeholder = placeholder;

    textFieldContainer.classList.add('form-element')
    textFieldContainer.appendChild(textFieldTitle);
    textFieldContainer.appendChild(textField);

    return textFieldContainer;
};

export const createTitledSelect = (title, selectID, name) => {
    const selectContainer = document.createElement('div');
    const selectTitle = document.createElement('label');
    const selectInput = document.createElement('select');
    const optionLow = document.createElement('option');
    const optionMedium = document.createElement('option');
    const optionHigh = document.createElement('option');

    selectTitle.innerHTML = `<label class="form-title" for="${selectID}">${title}</label>`;

    optionLow.value = 'Low';
    optionLow.text = 'Low';
    optionMedium.value = 'Medium';
    optionMedium.text = 'Medium';
    optionHigh.value = 'High';
    optionHigh.text = 'High';

    selectInput.id = selectID;
    selectInput.name = name;
    selectInput.classList.add('form-input');
    selectInput.add(optionLow);
    selectInput.add(optionMedium);
    selectInput.add(optionHigh);

    selectContainer.classList.add('form-element');
    selectContainer.appendChild(selectTitle);
    selectContainer.appendChild(selectInput);
    return selectContainer;
};

export const createSubmitButton = (title, buttonID) => {
    const button = document.createElement('button');
    button.id = `${buttonID}`;
    button.innerHTML = `${title}`;
    button.type = 'submit';
    button.classList.add('button');

    return button;
};