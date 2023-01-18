const block = document.querySelector(".block");

function changeColor() {
  block.addEventListener("click", () => {
    block.style.color = "blue";
  });
}

changeColor();
