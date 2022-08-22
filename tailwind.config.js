/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundImage:{
      'coffee-background': "url('../public/other_images/wooden-table-with-cup-coffee.jpg')",
      'woman-drinking': "url('../public/other_images/young-woman-eating-croissants-cafe.jpg')",
      'learning-to-bake': "url('../public/other_images/grangmother-teaching-her-granddaughter-make-homemade-sweets.jpg')",
      'takeaway': "url('../public/other_images/takeaway.jpg')",
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
