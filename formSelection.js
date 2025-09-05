// formSelection: Renders a selector and a form from a forms object
function formSelection(formType = 'barcode', forms = defaultForms) {
    // Default forms object if none provided
    forms = forms || defaultForms;
    const formNames = Object.keys(forms);
    // Build selector
    const selector = `
        <select id="formTypeSelector" onchange="handleFormTypeChange(event)">
            ${formNames.map(name => `<option value="${name}" ${name === formType ? 'selected' : ''}>${name}</option>`).join('')}
        </select>
    `;
    // Render selected form
    const { html: formHtml, script } = forms[formType] ? forms[formType]() : { html: '<div>Unknown form type</div>', script: '' };
    // Main script for selector
    const selectorScript = `
    <script>
    function handleFormTypeChange(event) {
        const type = event.target.value;
        window.location.search = '?formType=' + type;
    }
    </script>
    `;
    return `
        <div class="formSelector">
            ${selector}
            ${formHtml}
            <div id="responseBox" class="responseBox"></div>
        </div>
        ${selectorScript}
        ${script}
    `;
}

// Default forms object
const defaultForms = {
    barcode: () => ({
        html: `
            <form id="inputForm" onsubmit="return handleSubmit(event)">
                <input class="input" id="userInput" type="text" placeholder="Input Barcode" />
                <button class="button" type="submit">Send</button>
            </form>
        `,
        script: `
        <script>
        async function handleSubmit(event) {
            event.preventDefault();
            const input = document.getElementById('userInput').value;
            const res = await fetch('/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ input })
            });
            const data = await res.text();
            document.getElementById('responseBox').innerText = data;
            return false;
        }
        </script>
        `
    }),
    login: () => ({
        html: `
            <form id="loginForm" onsubmit="return handleLogin(event)">
                <input class="input" id="username" type="text" placeholder="Username" />
                <input class="input" id="password" type="password" placeholder="Password" />
                <button class="button" type="submit">Login</button>
            </form>
        `,
        script: `
        <script>
        async function handleLogin(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const res = await fetch('/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            const data = await res.text();
            document.getElementById('responseBox').innerText = data;
            return false;
        }
        </script>
        `
    }),
    email: () => ({
        html: `
            <form id="emailForm" onsubmit="return handleEmail(event)">
                <input class="input" id="email" type="email" placeholder="Email Address" />
                <button class="button" type="submit">Send</button>
            </form>
        `,
        script: `
        <script>
        async function handleEmail(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const res = await fetch('/email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });
            const data = await res.text();
            document.getElementById('responseBox').innerText = data;
            return false;
        }
        </script>
        `
    }),
    "destructure input": () => ({
        html: `
            <form id="destructureForm" onsubmit="return handleDestructure(event)">
                <input class="input" id="destructureInput" type="text" placeholder="Input to Destructure" />
                <button class="button" type="submit">Destructure</button>
            </form>
        `,
        script: `
        <script>
        function handleDestructure(event) {
            event.preventDefault();
            const input = document.getElementById('destructureInput').value;
            // Destructure input into characters and display as array
            const result = input.split("");
            document.getElementById('responseBox').innerText = JSON.stringify(result);
            return false;
        }
        </script>
        `
    }),
    "reverse input": () => ({
        html: `
            <form id="reverseForm" onsubmit="return handleReverse(event)">
                <input class="input" id="reverseInput" type="text" placeholder="Input to Reverse" />
                <button class="button" type="submit">Reverse</button>
            </form>
        `,
        script: `
        <script>
        function handleReverse(event) {
            event.preventDefault();
            const input = document.getElementById('reverseInput').value;
            // Reverse the input string
            const result = input.split("").reverse().join("");
            document.getElementById('responseBox').innerText = result;
            return false;
        }
        </script>
        `
    })
};

export default formSelection;
