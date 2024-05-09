const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", function () {
  if (input.value.trim() === "") {
    input.focus();
  } else {
    const li = document.createElement("li");

    const inputValue = input.value;
    li.innerHTML = inputValue;
    li.style.fontWeight = "bold";
    list.appendChild(li);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "❌";
    li.append(deleteButton);

    deleteButton.addEventListener("click", function () {
      li.remove();
    });
  }
});
