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
            homeTextRadiusColor: "rgba(255,255,255,var(--tw-bg-opacity))",
            homeTextInsideRadiusColor: "#650ADD",
        },
        fontFamily: {
            manrope: ["Manrope", "roboto"],
        },
        borderRadius: {
            homeTextRadius: "91% 9% 90% 10% / 29% 82% 18% 71%;",
        },
    },
    plugins: [],
};
