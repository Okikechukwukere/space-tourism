/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-tab": "url('./assets/home/background-home-tablet.jpg')",
        "hero-desk": "url('./assets/home/background-home-desktop.jpg')",
        "hero-mob": "url('./assets/home/background-home-mobile.jpg')",
        "dest-mob":
          "url('.assets/destination/background-destination-mobile.jpg')",
        "dest-tab":
          "url('./assets/destination/background-destination-tablet.jpg')",
        "dest-desk":
          "url('./assets/destination/background-destination-desktop.jpg')",
        "crew-mob": "url('./assets/crew/background-crew-mobile.jpg')",
        "crew-tab": "url('./assets/crew/background-crew-tablet.jpg')",
        "crew-desk": "url('./assets/crew/background-crew-desktop.jpg')",
        "tech-mob":
          "url('./assets/technology/background-technology-mobile.jpg')",
        "tech-tab":
          "url('./assets/technology/background-technology-tablet.jpg')",
        "tech-desk":
          "url('./assets/technology/background-technology-desktop.jpg')",
      },
      colors: {
        "nav-color": "rgba(150,150,150,0.15)",
        "nav-color-sm": "rgba(20,20,20,0.6)",
      },
    },
  },
  plugins: [],
};
