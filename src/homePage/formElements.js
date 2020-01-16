export const createTitledInput = (title, placeholder, inputID) => {
    const textFieldContainer = document.createElement('div');
    const textFieldTitle = document.createElement('label');
    const textField = document.createElement('input');

    textFieldTitle.innerHTML = `<label class="form-title" for="${inputID}">${title}</label>`;

    textField.id = inputID;
    textField.type = 'text';
    textField.classList.add('form-input');
    textField.placeholder = placeholder;

    textFieldContainer.classList.add('form-element')
    textFieldContainer.appendChild(textFieldTitle);
    textFieldContainer.appendChild(textField);

    return textFieldContainer;
};

export const createTitledSelect = (title, selectID) => {
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
    selectInput.classList.add('form-input');
    selectInput.add(optionLow);
    selectInput.add(optionMedium);
    selectInput.add(optionHigh);

    selectContainer.classList.add('form-element');
    selectContainer.appendChild(selectTitle);
    selectContainer.appendChild(selectInput);
    return selectContainer;
};

export const createSubmitButton = (title) => {
    const button = document.createElement('button');
    button.innerHTML = `${title}`;
    button.type = 'submit';
    button.classList.add('button');

    return button;
};

// const createAndAppendCard = (header, body) => {
//     const cardFragment = document.createDocumentFragment();
//     const cardElement = document.createElement('div');
//     const cardHeader = `<h2 class="card-header">${header}</h2>`;
//     const cardBody = `<div class='card-body">${body}</div>`;

//     cardElement.innerHTML = `
//         <div class="card">
//             ${cardHeader}
//             ${cardBody}
//         </div>
//     `;

//     cardFragment.appendChild(cardElement);
//     document.body.appendChild(cardFragment);
// };

// export default createAndAppendCard