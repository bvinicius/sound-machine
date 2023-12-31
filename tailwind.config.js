/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Karla', 'sans-serif']
        },
        extend: {
            fontSize: {
                '4xl': '2.375rem'
            },
            colors: {
                primary: {
                    500: '#A0B4E8'
                },
                'on-primary': {
                    400: '#F5F5F5',
                    500: '#D9D9D9'
                },
                'primary-container': {
                    400: '#F5F5F5',
                    500: '#D9D9D9'
                }
            },
            spacing: {
                4.5: '1.125rem',
                15: '3.75rem',
                18: '4.5rem',
                27.5: '6.875rem',
                68: '17rem',
                94: '23.5rem'
            },
            dropShadow: {
                primary: '0px 2px 2px rgba(0, 0, 0, 0.25)',
                'primary-active': '0px 0px 6px #F5F5F5'
            }
        }
    },
    plugins: []
};
