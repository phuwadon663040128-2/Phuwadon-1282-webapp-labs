const facultyImage = document.querySelector("#university-image");
const originalDescription = document.querySelector("#original-description");

facultyImage.src =
  "https://www.en.kku.ac.th/web/wp-content/uploads/2024/05/C-2-of-23-cccccc.jpg";
facultyImage.alt = "Faculty of Engineering, Khon Kaen University";

const facultyLink = document.createElement("a");
facultyLink.href = "https://www.en.kku.ac.th";
facultyLink.classList.add("faculty-link");
facultyLink.setAttribute("aria-label", "Visit the Faculty of Engineering website");

facultyImage.parentNode.insertBefore(facultyLink, facultyImage);
facultyLink.appendChild(facultyImage);

const welcomeMessage = document.createElement("p");
welcomeMessage.textContent = "We hope you enjoy learning";
welcomeMessage.classList.add("welcome-message");
document.body.appendChild(welcomeMessage);

originalDescription.remove();
document.title = "KKU Engineering";
