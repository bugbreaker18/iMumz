/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', 'sans-serif']
            },
            backgroundImage: {
                'hero-desktop': 'url("/public/components/Hero/frame.svg")',
                'hero-mobile': 'url("/public/components/Hero/frame2.svg")',
            },
        },
    },
    plugins: [],
};
