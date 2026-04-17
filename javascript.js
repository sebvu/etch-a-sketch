main();

function main() {
  const DEFAULT_SIZE = 16;
  const btn = document.querySelector("button");
  const containerDiv = document.querySelector("div");

  rewriteGrid(DEFAULT_SIZE, containerDiv);

  // btn to change grid size

  btn.addEventListener("click", () => {
    let promptText = "choose a number between 5 and 30";

    outer: while (true) {
      input = prompt(promptText);
      newGridSize = parseInt(input);

      switch (true) {
        case input === null:
          break outer;
        case isNaN(newGridSize):
          promptText = "not a number, can u do this again";
          break;
        case newGridSize < 5 || newGridSize > 30:
          promptText = "not between 5 and 30, try again";
          break;
        default:
          rewriteGrid(newGridSize);
          break outer;
      }
    }
  });
}

function rewriteGrid(gridSize, containerDiv) {
  for (let _ = 0; _ < gridSize ** 2; _++) {
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
