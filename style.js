// A component that exports an object containing some styles
const styles = {
    body: {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        backgroundColor: '#030327',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '200px',
        minWidth: '280px',
        maxWidth: '90vw',
        width: '100%',
        maxHeight: '90vh',
        margin: '5vh auto',
        padding: '2rem',
        backgroundColor: '#6fc4ab',
        borderRadius: '1.5rem',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        fontFamily: 'Arial, sans-serif',
        boxSizing: 'border-box',
    },
    title: {
        fontSize: '2rem',
        color: '#C8102E'
    },
    button: {
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        color: '#fff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '0.25rem',
        cursor: 'pointer',
    },
    input: {
        padding: '0.5rem 0',
        fontSize: '1rem',
        border: 'none',
        borderBottom: '2px solid #007bff',
        borderRadius: '0',
        outline: 'none',
        marginBottom: '0.5rem',
        width: '250px',
        boxSizing: 'border-box',
        background: 'transparent',
        transition: 'border-color 0.2s',
    },
    responseBox: {
        background: '#f9f9f9',
        minHeight: '32px',
        fontFamily: 'monospace',
        whiteSpace: 'pre-wrap',
    },
    formSelector: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        padding: '1.5rem 1rem',
        background: '#fff',
        borderRadius: '1rem',
        boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
        marginBottom: '2rem',
        marginTop: '1rem',
        width: '100%',
        maxWidth: '400px',
    },
    select: {
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        border: '1px solid #007bff',
        borderRadius: '0.5rem',
        background: '#f0f8ff',
        color: '#222',
        outline: 'none',
        transition: 'border-color 0.2s',
        cursor: 'pointer',
        marginBottom: '0.5rem',
        width: '100%',
        maxWidth: '300px',
        boxSizing: 'border-box',
    },
    subtitle: {
        color: '#004d40',
    },

};

// Helper to convert JS style object to CSS string
function objectToCss(selector, styleObj) {
    const rules = Object.entries(styleObj)
        .map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}:${value}`)
        .join(';');
    return `${selector} { ${rules} }`;
}

// Generate CSS for all keys in the styles object, mapping camelCase keys to class selectors
function generateCssFromStyles(stylesObj) {
    return Object.entries(stylesObj)
        .map(([key, style]) => {
            // Use 'body' as is, otherwise prefix with '.'
            const selector = key === 'body' ? 'body' : `.${key}`;
            return objectToCss(selector, style);
        })
        .join('\n');
}

// Export a css string for use in HTML, always up-to-date with styles object
export const css = generateCssFromStyles(styles);

export default styles;
