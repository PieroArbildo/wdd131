const today = new Date();
const year = document.querySelector("#currentyear");
year.innerHTML = `<span
class="highlight">${today.getFullYear()}</span>`;
const lastModified = document.querySelector("#lastmodification");
lastModified.innerHTML = `Last modification: <span class="highlight">${document.lastModified} (GMT-5)</span>`;

const temperature = 20;
const windSpeed = 8;
const conditions = "Partly Cloudy";

function calculateWindChill(temp, wind) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(wind, 0.16) +
    0.3965 * temp * Math.pow(wind, 0.16)
  );
}

function displayWindChill() {
  let windChillFactor;

  if (temperature <= 10 && windSpeed > 4.8) {
    windChillFactor = calculateWindChill(temperature, windSpeed).toFixed(2);
  } else {
    windChillFactor = "N/A";
  }

  document.getElementById(
    "windChill"
  ).innerText = `Wind Chill: ${windChillFactor}`;
}

window.onload = displayWindChill;

document.getElementById("temp").innerText = `Temperature: ${temperature} Cº`;
document.getElementById("cond").innerText = `Conditions: ${conditions} `;
document.getElementById("wind").innerText = `Wind: ${windSpeed} km/h`;
