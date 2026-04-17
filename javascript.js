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
          promptText = "not a number, can u do this again";
          break;
        case newGridSize < MIN_GRID_SIZE || newGridSize > MAX_GRID_SIZE:
          promptText = `not between ${MIN_GRID_SIZE} and ${MAX_GRID_SIZE}, try again`;
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
  const totalNewSquares = newGridSize ** 2;

  // clear container div completely
  for (let _ = 0; _ < oldTotalSquares; _++) {
    containerDiv.removeChild(containerDiv.firstChild);
  }

  // populate with new squares
  for (let _ = 0; _ < totalNewSquares; _++) {
    const square = document.createElement("div");

    square.classList.add("square");

    // temporary clamping size logic
    square.style.maxWidth = `${containerDiv.offsetWidth / newGridSize}px`;
    square.style.maxHeight = `${containerDiv.offsetHeight / newGridSize}px`;
    square.style.minWidth = `${containerDiv.offsetWidth / newGridSize}px`;
    square.style.minHeight = `${containerDiv.offsetHeight / newGridSize}px`;

    square.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "red";
    });

    square.addEventListener("mouseout", (e) => {
      e.target.style.backgroundColor = "blue";
    });

    containerDiv.appendChild(square);
  }
}
