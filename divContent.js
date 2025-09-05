import formSelection from './formSelection.js';

// DivContent: renders a container with a title and a form selector
function DivContent(innerText, formType = 'barcode', forms = undefined) {
    return `
        <div class="container">
            <h1 class="title">${innerText}</h1>
            ${formSelection(formType, forms)}
        </div>
    `;
}

export default DivContent;
