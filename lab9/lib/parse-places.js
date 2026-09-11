const placesList = document.querySelector("#places");

async function loadPlaces() {
  try {
    const response = await fetch("places.json");

    if (!response.ok) {
      throw new Error(`Unable to load places.json (${response.status})`);
    }

    const data = await response.json();

    data.results.forEach((place) => {
      const listItem = document.createElement("li");
      const nameLine = document.createElement("div");
      const locationLine = document.createElement("div");
      const name = document.createElement("span");
      const location = document.createElement("span");

      name.classList.add("place-name");
      location.classList.add("place-location");
      name.textContent = place.name;
      location.textContent = `${place.geometry.location.lat} ${place.geometry.location.lng}`;

      nameLine.append("name = ", name);
      locationLine.append("location = ", location);
      listItem.append(nameLine, locationLine);
      placesList.appendChild(listItem);
    });
  } catch (error) {
    const errorMessage = document.createElement("li");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = `Error: ${error.message}`;
    placesList.replaceChildren(errorMessage);
  }
}

loadPlaces();
