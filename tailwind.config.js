/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/index.css",
    // O Tailwind precisa analisar todos os seus arquivos React para encontrar as classes
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  // Adicione a configuração de Dark Mode aqui
  darkMode: 'class', 
  theme: {
    extend: {},
  },
  plugins: [],
}