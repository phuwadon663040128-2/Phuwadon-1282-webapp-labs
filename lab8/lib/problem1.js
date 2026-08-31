const universityImage = document.querySelector("#university-image");
const originalDescription = document.querySelector("#original-description");

universityImage.src = "images/engineering-building.jpg";
universityImage.alt = "Faculty of Engineering, Khon Kaen University";

const facultyLink = document.createElement("a");
facultyLink.href = "https://www.en.kku.ac.th";
facultyLink.classList.add("faculty-link");

universityImage.parentNode.insertBefore(facultyLink, universityImage);
facultyLink.appendChild(universityImage);

const welcomeMessage = document.createElement("p");
welcomeMessage.textContent = "We hope you enjoy learning";
welcomeMessage.classList.add("welcome-message");
document.querySelector("section").appendChild(welcomeMessage);

originalDescription.remove();
document.title = "KKU Engineering";
