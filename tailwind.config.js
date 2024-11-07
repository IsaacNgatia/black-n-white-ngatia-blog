/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionDuration: {
        1500: "1.5s", // Add custom duration here (optional)
        // ...other durations
      },
    },
    // ...other theme configurations
  },
  plugins: [],
};
