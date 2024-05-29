const today = new Date();
const year = document.querySelector("#currentyear");
year.innerHTML = `<span
class="highlight">${today.getFullYear()}</span>`;
const lastModified = document.querySelector("#lastmodification");
lastModified.innerHTML = `Last modification: <span class="highlight">${document.lastModified} (GMT-5)</span>`;

const radioButtons = document.querySelectorAll('.radios input[type="radio"]');
radioButtons.forEach(radioButton => {
  radioButton.addEventListener('change', function() {
    if (this.checked) {
      document.querySelector('.radios').style.borderColor = 'green';
    } else {
      document.querySelector('.radios').style.borderColor = 'red';
    }
  });
});

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0,
  },
];

window.onload = () => {
  setTimeout(() => {
    const selectElement = document.getElementById("productName");
      products.forEach((product) => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        selectElement.appendChild(option);
      });
  }, 2000);
};

function countSubmits() {
  const submitDisplay = document.querySelector(".displayReview");
  let numSubmit = Number(window.localStorage.getItem("numVisits"));
  numSubmit++;
  submitDisplay.textContent = numSubmit;
  localStorage.setItem("numVisits", numSubmit);
}
countSubmits();