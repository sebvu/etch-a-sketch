main();

function main() {
  const containerDiv = document.querySelector("div");
  // generate 16x16 grid square
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      const square = document.createElement("div");

      square.classList.add("square");

      containerDiv.appendChild(square);
    }
  }
}
