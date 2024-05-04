const today = new Date();
const year = document.querySelector("#currentyear");
year.innerHTML = `<span
class="highlight">${today.getFullYear()}</span>`;
const lastModified = document.querySelector("#lastmodification");
lastModified.innerHTML=`Last modification: <span class="highlight">${document.lastModified} (GMT-5)</span>`;