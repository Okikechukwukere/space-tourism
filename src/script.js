const navBar = document.querySelector("[data-visible]");
const menuOpen = document.querySelector("[data-menu-open]");
const menuClose = document.querySelector("[data-menu-close]");
const changeCrew = document.querySelectorAll("[data-dot] p");
const changeDest = document.querySelectorAll("[data-dest] button");
const changeTech = document.querySelectorAll("[data-tech] button");

changeCrew.forEach((crew) => {
  crew.addEventListener("click", () => {
    location.replace(`./crew-${crew.id}.html`);
  });
});
changeDest.forEach((dest) => {
  dest.addEventListener("click", () => {
    location.replace(`./destination-${dest.id}.html`);
  });
});
changeTech.forEach((tech) => {
  tech.addEventListener("click", () => {
    location.replace(`./technology-${tech.id}.html`);
  });
});

menuOpen.addEventListener("click", () => {
  navBar.classList.replace("right-[-100%]", "right-[0]");
  menuOpen.classList.add("hidden");
});
menuClose.addEventListener("click", () => {
  menuOpen.classList.replace("hidden", "block");
  navBar.classList.replace("right-[0]", "right-[-100%]");
});
