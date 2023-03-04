/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
        colors: {
            gradientBackground: "#331143",
            gradientBgFrom: "#6B0BEA",
            gradientBgTo: "#3E067F",
            headerGrayColor: "#241c3a",
            customTurquiose: "#3bdbc7",
            buttonText: "#140628",
        },
        fontFamily: {
            manrope: ["Manrope", "roboto"],
        },
    },
    plugins: [],
};
