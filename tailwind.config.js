/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'th-primary': '#e56e0c',
                'th-secondary': '#ebd6c3',
                'th-accent': '#54433a',
                'th-background': '#f3ede1',
                'th-text': '#1d2544',
            },
        },
    },
    plugins: [],
};
