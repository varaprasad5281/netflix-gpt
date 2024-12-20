/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "description-gradient":
          "linear-gradient(to right, rgba(31.5, 10.5, 10.5, 1) 100%, rgba(31.5, 10.5, 10.5, 0.84) 50%, rgba(31.5, 10.5, 10.5, 0.84) 100%)",
      },
    },
  },
  plugins: [],
};
