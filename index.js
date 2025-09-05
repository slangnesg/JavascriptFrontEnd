//respond to a http request with an html fragment
import http from 'http';
const port = 3000;
import DivContent from './divContent.js';
import parseBody from './parseBody.js';
import renderPage from './renderPage.js';


// Store user inputs for later processing
const userInputs = [];

// Unified request handler with routing logic
const requestHandler = async (request, response) => {
    console.log(request.method, request.url);
    const url = request.url.split('?')[0];
    let result;
    if (url === '/') {
        // Get formType from query string if present
        const urlObj = new URL(request.url, `http://${request.headers.host}`);
        const formType = urlObj.searchParams.get('formType') || 'barcode';
        result = renderPage([
            DivContent('JJV Front End Example', formType)
        ]);
    } else if (url === '/submit') {
        const body = await parseBody(request);
        const userInput = body.input || '';
        userInputs.push(userInput); // Capture input
        result = {
            status: 200,
            headers: { 'Content-Type': 'text/plain' },
            body: `You sent: ${userInput}\nAll inputs: ${JSON.stringify(userInputs)}`
        };
    } else if (url === '/destructure') {
        const body = await parseBody(request);
        const input = body.input || '';
        // Destructure input into array of characters
        const resultArr = input.split("");
        result = {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(resultArr)
        };
    } else if (url === '/reverse') {
        const body = await parseBody(request);
        const input = body.input || '';
        // Reverse the input string
        const reversed = input.split("").reverse().join("");
        result = {
            status: 200,
            headers: { 'Content-Type': 'text/plain' },
            body: reversed
        };
    } else {
        // 404 Not Found
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('404 Not Found');
        return;
    }
    response.writeHead(result.status, result.headers);
    response.end(result.body);
}




const server = http.createServer(requestHandler);
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});