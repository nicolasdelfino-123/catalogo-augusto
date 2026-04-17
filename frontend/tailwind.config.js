// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        ipad: { min: "1024px", max: "1279px" },
      }
    },
  },
  plugins: [],
}
