# JJV Front End Example

This project is a simple Node.js HTTP server that serves a dynamic HTML frontend with multiple interactive forms. It demonstrates how to render different forms, handle user input, and respond with processed results, all styled with custom CSS.

## What It Does
- Serves a web page with a form selector, allowing users to choose between different forms (Barcode, Login, Email, Destructure Input, Reverse Input).
- Handles form submissions via AJAX (fetch API) and updates the page with the server's response.
- Processes user input on the server for certain forms (e.g., barcode, destructure, reverse) and returns the result.
- Maintains a list of all barcode inputs submitted during the session.

## How It Works
- The server is started with `index.js` using Node.js's built-in `http` module.
- The main page is rendered using the `renderPage` and `DivContent` modules, which assemble HTML and inject CSS styles from `style.js`.
- The `formSelection` module provides a form selector and renders the appropriate form based on the user's choice. Each form has its own HTML and JavaScript for handling submissions.
- Form submissions are sent to the server as POST requests. The server parses the request body using `parseBody.js` and responds accordingly:
  - `/submit`: Accepts barcode input, stores it, and returns all inputs so far.
  - `/destructure`: Splits the input string into an array of characters and returns it as JSON.
  - `/reverse`: Reverses the input string and returns it as plain text.
  - `/login` and `/email`: (Handlers not implemented in server, but forms exist in UI.)
- All pages are styled using a JS object in `style.js`, which is converted to CSS and injected into the HTML.

## File Overview
- `index.js`: Main server file, handles routing and request processing.
- `DivContent.js`: Renders the main container with a title and form selector.
- `formSelection.js`: Provides the form selector and form rendering logic.
- `parseBody.js`: Helper to parse JSON bodies from POST requests.
- `renderPage.js`: Assembles the final HTML page and injects CSS.
- `style.js`: Defines and exports styles as both a JS object and a CSS string.

## How to Run
1. **Install Node.js** (if not already installed).
2. **Start the server:**
   ```bash
   node index.js
   ```
3. **Open your browser** and go to [http://localhost:3000](http://localhost:3000)
4. **Use the form selector** to try different forms and see the results.

## Notes
- The server does not use any external dependencies; all logic is implemented with built-in Node.js modules and plain JavaScript.
- Only the barcode, destructure, and reverse forms are handled on the server. The login and email forms exist in the UI but do not have server-side logic implemented.
- All styles are managed in `style.js` and injected into the page dynamically.

---

Feel free to extend the forms or add new routes as needed!
