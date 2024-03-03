/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    darkMode: "class",
    
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            colors: {
                'purple-dark': '#090B1A',
                'purple-container': '#3C427F ',
                'purple-active': '#121534 ',
                'fill-dark': '#4A55D0 '
            }
        },
    },

    plugins: [],
};
