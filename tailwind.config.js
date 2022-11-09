/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                bg: "url(../public/bg.jpg)",
            },
            colors: {
                "brand-1": "#1e0703",
                "brand-2": "#47180E",
                "brand-3": "#7C2F1E",
                "brand-4": "#120403",
                "brand-5": "#582815",
                "brand-text": "#FFE6D8",
            },
        },
    },
    plugins: [],
};
