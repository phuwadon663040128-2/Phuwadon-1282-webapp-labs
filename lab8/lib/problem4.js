const cat = document.querySelector("#cat");
const staticCatImage = "images/cat.png";
const walkingSpeed = 200;

function startWalking() {
  const catWidth = cat.getBoundingClientRect().width;
  let startTime;

  function moveCat(currentTime) {
    if (startTime === undefined) {
      startTime = currentTime;
    }

    const seconds = (currentTime - startTime) / 1000;
    const distance = seconds * walkingSpeed;
    const stoppingPoint = Math.max(0, window.innerWidth - catWidth);

    if (distance < stoppingPoint) {
      cat.style.transform = `translateX(${distance}px)`;
      requestAnimationFrame(moveCat);
      return;
    }

    cat.style.transform = `translateX(${stoppingPoint}px)`;
    cat.style.width = `${catWidth}px`;
    cat.src = staticCatImage;
    cat.alt = "A cat standing at the right edge";
  }

  requestAnimationFrame(moveCat);
}

window.addEventListener("load", startWalking);
