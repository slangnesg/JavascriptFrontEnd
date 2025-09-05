// Helper to parse JSON body from POST requests
function parseBody(req) {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
            try { resolve(JSON.parse(body)); } catch { resolve({}); }
        });
        req.on('error', reject);
    });
}

export default parseBody;
