main();

function main() {
  const DEFAULT_SIZE = 16;
  const btn = document.querySelector("button");

  resizeGrid(DEFAULT_SIZE);

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
          resizeGrid(newGridSize);
          break outer;
      }
    }
  });
}

function resizeGrid(newGridSize) {
  const containerDiv = document.getElementById("main-container");
  const totalNewSquares = newGridSize ** 2;

  function increaseGridBy(incAmount) {
    for (let _ = 0; _ < incAmount; _++) {
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

  function decreaseGridBy(decAmount) {
    for (let _ = 0; _ < decAmount; _++) {
      containerDiv.removeChild(containerDiv.firstChild);
    }
  }

  let diffGridSize = containerDiv.childNodes.length - totalNewSquares;

  switch (true) {
    case diffGridSize < 0: // increase grid size
      increaseGridBy(Math.abs(diffGridSize));
      break;
    case diffGridSize > 0: // decrease grid size
      decreaseGridBy(diffGridSize);
    default:
      break; // no grid changes
  }
}
