const planet = document.createElement("div");
planet.classList.add("planet");
planet.style.backgroundColor = "gray";

const moon = document.createElement("div");
moon.classList.add("moon");
moon.style.backgroundColor = "yellow";
planet.appendChild(moon);

const description = document.createElement("div");
description.textContent = "The planet and the moon";
description.style.color = "white";
description.style.fontSize = "1.25rem";

document.body.style.minHeight = "100vh";
document.body.style.margin = "0";
document.body.style.boxSizing = "border-box";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";

document.body.appendChild(planet);
document.body.appendChild(description);
