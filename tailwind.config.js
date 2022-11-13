/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                bg: "url(../public/bg.jpg)",
                landing: "url(../public/landing.jpg)"
            },
            colors: {
                "brand-1": "#7C2F1E",
                "brand-2": "#7B2C3E",
                "brand-3": "#6A3458",
                "brand-4": "#503E64",
                "brand-5": "#384563",
                "brand-6": "#2F4858",
                "brand-7": "#1e0703",
                "brand-text": "#FFE6D8"
            },
            keyframes: {
                "zoom-in": {
                    "0%": {
                        transform: "scale(125%)"
                    },
                    "100%": {
                        transform: "scale(100%)"
                    }
                }
            },
            animation: {
                "zoom-in": "zoom-in 2000ms ease-out"
            },
            boxShadow: {
                landing: "0 0 40px 30px rgba(30, 7, 3, .3)"
            }
        }
    },
    plugins: [
        require("tailwind-scrollbar")({ nocompatible: true }),
        plugin(function ({ addUtilities }) {
            addUtilities({
                ".polygon": {
                    "clip-path": "polygon(63.5% 0%, 91.1% 30.5%, 93.1% 67.8%, 67.2% 100%, 20.8% 94.3%, 9.7% 55.5%, 23.9% 15.5%);"
                }
            });
        })
    ]
};
