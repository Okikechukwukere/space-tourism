const navBar = document.querySelector("[data-visible]");
const menuOpen = document.querySelector("[data-menu-open]");
const menuClose = document.querySelector("[data-menu-close]");
const menuItems = document.querySelectorAll("li a");
// const destinationsSection = document.querySelector(".destination");

const fetchData = async () => {
  const res = await fetch("./data.json");
  const data = await res.json();

  let createSection = (id) => {
    let sectionItem = `${id}Section`;
    sectionItem = document.querySelector(`.${id}`);
    sectionItem.innerHTML = "";
    if (id == dataKeys[0]) {
      // console.log(data.destinations);

      // for (i in data) {
      //   console.log(data[i]);
      // }

      sectionItem.innerHTML = `<section
      class="flex flex-col items-center text-center md:mt-32 px-[6%] lg:px-0 md:px-[10%] lg:flex-row lg:justify-between"
    >
      <div class="lg:w-[60vw] lg:flex flex-col items-start">
        <p
          class="text-2xl uppercase tracking-[0.15rem] mb-10 md:absolute lg:relative top-40 left-10 lg:top-auto lg:text-4xl lg:left-[18%]"
        >
          <span class="mr-2 text-slate-500">01</span> Pick your destination
        </p>
        <img
          src="./assets/destination/image-europa.webp"
          alt=""
          class="w-[50vw] mx-auto md:mt-10 lg:mt-14 lg:w-[40%] lg:mr-[20%]"
        />
      </div>
      <div class="lg:w-[40vw] lg:text-justify lg:pr-[8%] lg:-ml-[20%]">
        <div
          class="flex justify-center text-2xl md:text-3xl m-8 text-slate-300 lg:justify-start lg:ml-0"
        >
          <button class="pb-3 id='moon' uppercase" data-dest="false">Moon</button>
          <button class="pb-3 id='mars' ml-6 mr-3 uppercase" data-dest="false">Mars</button>
          <button class="pb-3 id='europa' ml-3 mr-6 uppercase border-b-[3px] data-dest="false"">
            Europa
          </button>
          <button class="pb-3 id='titan' uppercase" data-dest="false">Titan</button>
        </div>
        <p class="text-8xl uppercase mb-4 lg:text-9xl lg:mb-10">Europa</p>
        <p class="text-xl text-slate-300">
          The smallest of the four Galilean moons orbiting Jupiter, Europa
          is a winter lover’s dream. With an icy surface, it’s perfect for a
          bit of ice skating, curling, hockey, or simple relaxation in your
          snug wintery cabin.
        </p>
        <hr
          class="my-10 w-[90vw] mx-auto md:w-[80vw] opacity-25 lg:w-full"
        />
        <div class="lg:flex lg:justify-between lg:pr-20">
          <div>
            <p class="text-slate-300 text-x md:text-2xl uppercase">
              Avg. distance
            </p>
            <p class="text-4xl md:text-5xl py-5 uppercase">628 mil. km</p>
          </div>
          <div>
            <p class="text-slate-300 text-xl md:text-2xl uppercase">
              Est. travel time
            </p>
            <p class="text-4xl md:text-5xl py-5 uppercase">3 years</p>
          </div>
        </div>
      </div>
    </section>`;

      const desTabs = document.querySelectorAll("[data-dest]");

      // let changeTab = () => {
      //   console.log(des);

      //   // for (i in data) {
      //   //   if (i == id) {
      //   //     for (j of data[i]) {
      //   //       for (k of desTabs) {
      //   //         if (k == j) {
      //   //           console.log(j, k);
      //   //         }
      //   //       }
      //   //     }
      //   //     // console.log(data[i]);
      //   //     // const { name, images, description, distance, travel } = data[i][0];
      //   //     // console.log(name);
      //   //     // console.log(desTabs);
      //   //   }
      //   // }
      // };
      desTabs.forEach((des) => {
        des.addEventListener("click", () => {
          console.log(des);
        });
      });

      // console.log(travel, typeof travel);
    }
  };

  const dataKeys = Object.keys(data);
  logTheItem = (item) => {
    dataKeys.forEach((dataKey) => {
      if (item.id == dataKey) {
        // let sectionItem = `${dataKey}Section`;
        // sectionItem = document.querySelector(`.${dataKey}`);
        createSection(item.id);
        // window.location.replace(item.href);
      }
      if (item.id == "home") {
        window.location.replace("index.html");
      }
    });
  };
};

let logTheItem;

menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(item.id);
    logTheItem(item);
  });
});

// menuItems.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     e.preventDefault();
//     menuItems.forEach((item) => {
//       // item.classList.remove("md:border-b-4");
//       console.log(item.parentElement);
//     });
//     // console.log(item.parentElement);

//     item.classList.add("md:border-b-4");
//     logTheItem();
//   });
// });

menuOpen.addEventListener("click", () => {
  navBar.classList.replace("right-[-100%]", "right-[0]");
  menuOpen.classList.add("hidden");
});
menuClose.addEventListener("click", () => {
  menuOpen.classList.replace("hidden", "block");
  navBar.classList.replace("right-[0]", "right-[-100%]");
});

fetchData();
