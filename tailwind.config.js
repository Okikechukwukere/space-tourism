/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-tab": "url('./src/assets/home/background-home-tablet.jpg')",
        "hero-desk": "url('./src/assets/home/background-home-desktop.jpg')",
        "hero-mob": "url('./src/assets/home/background-home-mobile.jpg')",
        "dest-mob":
          "url('/src/assets/destination/background-destination-mobile.jpg')",
        "dest-tab":
          "url('/src/assets/destination/background-destination-tablet.jpg')",
        "dest-desk":
          "url('/src/assets/destination/background-destination-desktop.jpg')",
        "crew-mob": "url('/src/assets/crew/background-crew-mobile.jpg')",
        "crew-tab": "url('/src/assets/crew/background-crew-tablet.jpg')",
        "crew-desk": "url('/src/assets/crew/background-crew-desktop.jpg')",
        "tech-mob":
          "url('/src/assets/technology/background-technology-mobile.jpg')",
        "tech-tab":
          "url('/src/assets/technology/background-technology-tablet.jpg')",
        "tech-desk":
          "url('/src/assets/technology/background-technology-desktop.jpg')",
      },
      colors: {
        "nav-color": "rgba(150,150,150,0.15)",
        "nav-color-sm": "rgba(20,20,20,0.6)",
      },
    },
  },
  plugins: [],
};
