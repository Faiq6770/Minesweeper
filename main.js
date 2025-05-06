function createBoard() {
  document.getElementById("root").innerHTML = "";
  const numberOfRows = parseInt(document.getElementById("numberOfRows").value);

  // Validate if the input is a valid number and within the range of 1 to 10
  if (isNaN(numberOfRows) || numberOfRows < 1 || numberOfRows > 10) {
    alert("Please enter a valid number between 1 and 10");
    return; // Stop further execution if input is invalid
  }

  console.log(numberOfRows);

  let mines = Array.from(createRandomArray(numberOfRows));
  let temp = 0,
    temp2 = 0;
  mines.sort(function (a, b) {
    return a - b;
  });
  console.log(mines[temp2]);

  for (let i = 0; i < numberOfRows; i++) {
    const row = document.createElement("div");
    document.getElementById("root").appendChild(row);
    row.className = "gameRow";
    for (let j = 0; j < numberOfRows; j++) {
      const tile = document.createElement("button");
      row.appendChild(tile);
      tile.style.backgroundColor = "grey";
      tile.style.height = "80px";
      tile.style.width = "80px";
      tile.style.border = "none";
      tile.style.margin = "5px";
      tile.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
      tile.style.cursor = "pointer";

      if (temp + 1 == mines[temp2]) {
        tile.id = "Mine";
        temp2++;
      } else {
        tile.id = "Nuteral";
      }
      tile.onclick = () => {
        mineChecker(tile);
      };

      temp++;
    }
  }
}

function createRandomArray(numberOfRows) {
  const numberOfTiles = numberOfRows * numberOfRows;
  const numberOfMines = Math.round(0.2 * numberOfTiles);
  const mines = new Set([]);

  while (mines.size != numberOfMines) {
    mines.add(parseInt(Math.random() * numberOfTiles + 1));
  }

  return mines;
}

function mineChecker(tile) {
  if (tile.id == "Mine") {
    const allTiles = document.querySelectorAll(".gameRow button");
    allTiles.forEach((t) => {
      if (t.id === "Mine") {
        t.style.backgroundColor = "red";
        t.onmouseout = () => {
          t.style.backgroundColor = "red";
        };
      } else {
        t.style.backgroundColor = "green";
        t.onmouseout = () => {
          t.style.backgroundColor = "green";
        };
      }
    });
  } else {
    tile.style.backgroundColor = "Green";
    tile.onmouseout = () => {
      tile.style.backgroundColor = "Green";
    };
  }
}
