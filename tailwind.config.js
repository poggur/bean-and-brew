/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundImage:{
      'coffee-background': "url('../public/wooden-table-with-cup-coffee.jpg')",
      'woman-drinking': "url('../public/young-woman-eating-croissants-cafe.jpg')",
      'learning-to-bake': "url('../public/grangmother-teaching-her-granddaughter-make-homemade-sweets.jpg')",
      'takeaway': "url('../public/takeaway.jpg')",
    },
    colors: {
      coffee : '#8E542D',

    },
    extend: {
      spacing: {
        '30': '7.5rem',
        '100': '25rem',
        '108': '27rem',
      }
    },
  },
  plugins: [],
}
