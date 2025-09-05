// Helper to render a page from modules/components
import { css } from './style.js';
function renderPage(components) {
    return {
        status: 200,
        headers: { 'Content-Type': 'text/html' },
        body: `
            <html>
                <head>
                    <style>
                        ${css}
                    </style>
                </head>
                <body>
                    ${components.join('\n')}
                </body>
            </html>
        `
    };
}

export default renderPage;