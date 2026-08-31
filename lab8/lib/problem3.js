const catPicture = document.querySelector("#cat-pic");
const mustachePicture = document.querySelector("#mustache-pic");

catPicture.addEventListener("click", (event) => {
  const halfMustacheWidth = mustachePicture.offsetWidth / 2;
  const halfMustacheHeight = mustachePicture.offsetHeight / 2;

  mustachePicture.style.left = `${event.pageX - halfMustacheWidth}px`;
  mustachePicture.style.top = `${event.pageY - halfMustacheHeight}px`;
});
