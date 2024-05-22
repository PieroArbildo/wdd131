const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");
const title = document.querySelector("#title");

const headerDiv = document.querySelector("header div");
const dinamicHeading = document.querySelector("main h2");
const liA = document.querySelectorAll("header nav ul li a");

hambutton.addEventListener("click", () => {
  mainnav.classList.toggle("show");
  hambutton.classList.toggle("show");

  if (title.style.display === "none") {
    title.style.display = "block";
    hambutton.style.position = "";
    hambutton.style.right = "0";
    hambutton.style.marginTop = "0px";
    headerDiv.style.height = "80px";
  } else {
    title.style.display = "none";
    hambutton.style.position = "fixed";
    hambutton.style.right = "3px";
    hambutton.style.marginTop = "50px";
    headerDiv.style.height = "20px";
  }
});

liA.forEach(function (liA) {
  liA.addEventListener("click", function () {
    dinamicHeading.innerHTML = liA.innerHTML;
  });
});

const today = new Date();
const year = document.querySelector("#currentyear");
year.innerHTML = `<span
  class="highlight">${today.getFullYear()}</span>`;
const lastModified = document.querySelector("#lastmodification");
lastModified.innerHTML = `Last modification: <span class="highlight">${document.lastModified} (GMT-5)</span>`;

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  // Add more temple objects here...
  {
    templeName: "Winter Quarters Nebraska",
    location: "Quarters Nebraska, United States",
    dedicated: "2001, April, 22",
    area: 10700,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/winter-quarters-nebraska/400x250/winter-quarters-temple-766908-wallpaper.jpg",
  },
  {
    templeName: "Logan Utah",
    location: "Logan,United States",
    dedicated: "1979, March, 13 ",
    area: 131979,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/logan-utah/400x250/logan-temple-760446-wallpaper.jpg",
  },
  {
    templeName: "Winnipeg Manitoba",
    location: "Winnipeg, Canada",
    dedicated: "2021, October, 31 ",
    area: 16890,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/winnipeg-manitoba/400x250/winnipeg_manitoba_temple_exterior.jpeg",
  },
];

const card = document.getElementById("card");
let content = "";
function temple() {
  temples.forEach((temple) => {
    content += `
            <figure>
                <h2>${temple.templeName}</h2>
                <figcaption>Location: <p>${temple.location}</p></figcaption>
                <figcaption>Dedicated: <p>${temple.dedicated}</p></figcaption>
                <figcaption>Area: <p>${temple.area} sq ft</p></figcaption>
                <img src="${temple.imageUrl}" alt="${temple.templeName} temple" loading="lazy"/>
            </figure>
        `;
  });
  card.innerHTML = content;
}

temple();

const home = document.getElementById("home");
home.addEventListener("click", function () {
  temple();
});

function oldFunc() {
  temples.forEach((temple) => {
    let yearString = `${temple.dedicated[0]}${temple.dedicated[1]}${temple.dedicated[2]}${temple.dedicated[3]}`;
    let yearNumber = +yearString;
    temple.yearNumber = yearNumber;
  });

  let content = "";
  let oldFilter = temples.filter((temple) => temple.yearNumber <= 1900);
  oldFilter.forEach((temple) => {
    content += `
                <figure>
                    <h2>${temple.templeName}</h2>
                    <figcaption>Location: <p>${temple.location}</p></figcaption>
                    <figcaption>Dedicated: <p>${temple.dedicated}</p></figcaption>
                    <figcaption>Area: <p>${temple.area} sq ft</p></figcaption>
                    <img src="${temple.imageUrl}" alt="${temple.templeName} temple" loading="lazy"/>
                </figure>
            `;
  });
  card.innerHTML = content;
}

const old = document.getElementById("old");
old.addEventListener("click", function () {
  oldFunc();
});

/*new*/
function newFunc() {
  temples.forEach((temple) => {
    let yearString = `${temple.dedicated[0]}${temple.dedicated[1]}${temple.dedicated[2]}${temple.dedicated[3]}`;
    let yearNumber = +yearString;
    temple.yearNumber = yearNumber;
  });

  let content = "";
  let newFilter = temples.filter((temple) => temple.yearNumber >= 2000);
  newFilter.forEach((temple) => {
    content += `
                  <figure>
                      <h2>${temple.templeName}</h2>
                      <figcaption>Location: <p>${temple.location}</p></figcaption>
                      <figcaption>Dedicated: <p>${temple.dedicated}</p></figcaption>
                      <figcaption>Area: <p>${temple.area} sq ft</p></figcaption>
                      <img src="${temple.imageUrl}" alt="${temple.templeName} temple" loading="lazy"/>
                  </figure>
              `;
  });
  card.innerHTML = content;
}

const newTemple = document.getElementById("new");
newTemple.addEventListener("click", function () {
  newFunc();
});

/*large*/
function largeFunct() {
  let content = "";
  let large = temples.filter((temple) => temple.area > 90000);
  large.forEach((temple) => {
    content += `
                  <figure>
                      <h2>${temple.templeName}</h2>
                      <figcaption>Location: <p>${temple.location}</p></figcaption>
                      <figcaption>Dedicated: <p>${temple.dedicated}</p></figcaption>
                      <figcaption>Area: <p>${temple.area} sq ft</p></figcaption>
                      <img src="${temple.imageUrl}" alt="${temple.templeName} temple" loading="lazy"/>
                  </figure>
              `;
  });
  card.innerHTML = content;
}
const large = document.getElementById("large");
large.addEventListener("click", function () {
  largeFunct();
});

/*small */

function smallFunct() {
  let content = "";
  let small = temples.filter((temple) => temple.area < 10000);

  small.forEach((temple) => {
    content += `
                  <figure>
                      <h2>${temple.templeName}</h2>
                      <figcaption>Location: <p>${temple.location}</p></figcaption>
                      <figcaption>Dedicated: <p>${temple.dedicated}</p></figcaption>
                      <figcaption>Area: <p>${temple.area} sq ft</p></figcaption>
                      <img src="${temple.imageUrl}" alt="${temple.templeName} temple" loading="lazy"/>
                  </figure>
              `;
  });
  card.innerHTML = content;
}

const small = document.getElementById("small");
small.addEventListener("click", function () {
  smallFunct();
});