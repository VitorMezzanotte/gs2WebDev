/** @type {import('tailwindcss').Config} */
export default {
  // ⬅️ CRUCIAL: Adicionar .jsx para que o Tailwind compile as classes usadas nos componentes
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}