const menu = document.querySelector("#menu");
const selection = document.querySelector("#selection");
const count = document.querySelector("#count");

let picks = 0;

function handleMenuClick(e) {
  if (!e.target.matches("li")) {
    return;
  }

  selection.textContent = `You picked: ${e.target.textContent}`;
  e.target.style.backgroundColor = "yellow";
  picks++;
  count.textContent = `Total picks: ${picks}`;
}

menu.addEventListener("click", handleMenuClick);
