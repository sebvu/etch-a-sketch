main();

function main() {
  const containerDiv = document.querySelector("div");
  // generate 16x16 grid square
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      const square = document.createElement("div");

      square.classList.add("square");

      square.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "red";
      });

      square.addEventListener("mouseout", (e) => {
        e.target.style.backgroundColor = "blue";
      });

      containerDiv.appendChild(square);
    }
  }
}
