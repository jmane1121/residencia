/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}', './components/**/*.{js, jsx, ts, tsx}'],
  theme: {
    extend: {
      colors: {
        //colores personalizados
        "color-verde": "#0C231E",
        "color-azul01": "#1B396A",
        "color-azul02": "#314C79",
        "color-azul03": "#0038e3",
        "color-gris": "#F7F7F7",
      },
    },
  },
  plugins: [],
}

