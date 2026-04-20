main();

function main() {
  const DEFAULT_SIZE = 16;
  const MAX_GRID_SIZE = 100;
  const MIN_GRID_SIZE = 5;
  const btn = document.querySelector("button");

  resizeGrid(DEFAULT_SIZE);

  // btn to change grid size
  btn.addEventListener("click", () => {
    let promptText = `choose a number between ${MIN_GRID_SIZE} and ${MAX_GRID_SIZE}`;

    outer: while (true) {
      input = prompt(promptText);
      newGridSize = parseInt(input);

      switch (true) {
        case input === null: // exit button handler for btn
          break outer;
        case isNaN(newGridSize):
          promptText = "not a number, retry!";
          break;
        case newGridSize < MIN_GRID_SIZE || newGridSize > MAX_GRID_SIZE:
          promptText = `not between ${MIN_GRID_SIZE} and ${MAX_GRID_SIZE}, try again!`;
          break;
        default:
          resizeGrid(newGridSize);
          break outer;
      }
    }
  });
}

function resizeGrid(newGridSize) {
  const containerDiv = document.getElementById("main-container");
  const oldTotalSquares = containerDiv.childNodes.length;

  // clear container div completely
  for (let square = 0; square < oldTotalSquares; square++) {
    containerDiv.removeChild(containerDiv.firstChild);
  }

  // create new row container to populate w/squares
  for (let row = 0; row < newGridSize; row++) {
    const rowContainer = document.createElement("div");

    rowContainer.classList.add("row-container");

    // populate rowcontainer w/squares
    for (let square = 0; square < newGridSize; square++) {
      const squareContainer = document.createElement("div");
      squareContainer.classList.add("square");

      squareContainer.style.opacity = "1"; // ensure opacity is ALWAYS one on creation

      squareContainer.addEventListener("mouseover", (e) => {
        let R = Math.floor(Math.random() * 255);
        let G = Math.floor(Math.random() * 255);
        let B = Math.floor(Math.random() * 255);
        squareContainer.style.opacity -= 0.1;
        e.target.style.backgroundColor = `rgb(${R}, ${G}, ${B}`;
      });

      rowContainer.appendChild(squareContainer);
    }

    containerDiv.appendChild(rowContainer);
  }
}
