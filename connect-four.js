import Game from "./game.js";

let game = undefined;

const updateUI = () => {
  const gameName = document.getElementById("game-name");
  const boardHolder = document.getElementById("board-holder");
  game === undefined
    ? boardHolder.add.className("is-invisible")
    : boardHolder.removeClass("is-invisible");
  gameName.innerHTML = getName();
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 7; c++) {
      const square = document.getElementById(`square-${r}-${c}`);
      square.innerHTML = "";
      const playerNum = game.getTokenAt(r, c); //will
      const tokenDiv = document.createElement("div");
      tokenDiv.classList.add(
        "token",
        playerNum === 1 && playerNum ? "red" : "black"
      );
      square.appendChild(tokenDiv)
    }
  }
};

window.addEventListener("DOMContentLoaded", (e) => {
  const p1Name = document.getElementById("player-1-name");
  const p2Name = document.getElementById("player-2-name");
  const clickTargetContainer = document.getElementById("click-targets");
  p1NameValue = p1Name;
  p2NameValue = p2Name;
  const newGameBtn = document.getElementById("new-game");

  p1Name.addEventListener("keyup", () =>
    p1NameValue ? (newGameBtn.disabled = false) : (newGameBtn.disabled = true)
  );
  p2Name.addEventListener("keyup", () =>
    p2NameValue ? (newGameBtn.disabled = false) : (newGameBtn.disabled = true)
  );

  newGameBtn.addEventListener("click", () => {
    game = new Game(p1NameValue, p2NameValue);
    p1NameValue = "";
    p2NameValue = "";
    newGameBtn.disabled = true;
    updateUI();
  });

  clickTargetContainer.addEventListener("focus", (e) => {
    columnIsFullPlaceholder
      ? e.target.classList.add("full")
      : e.target.classList.add(
          "token",
          game.currentPlayer === 1 ? "red" : "black"
        );
  });
  clickTargetContainer.addEventListener("blur", (e) => {
    columnIsFullPlaceholder
      ? e.target.classList.remove("full")
      : e.target.classList.remove(
          "token",
          game.currentPlayer === 1 ? "red" : "black"
        );
  });
  clickTargetContainer.addEventListener("click", (e) => {
    let colIdStr = e.target.id;
    let colNum = parseInt(colIdStr[colIdStr.length - 1]);
    game.playInColumn(colNum);
    updateUI();
    columnIsFullPlaceholder
      ? e.target.classList.add("full")
      : e.target.classList.remove(
          "token",
          game.currentPlayer === 1 ? "red" : "black"
        );
    //append new div to column
    //need to located specific column
    //div = <div class="token red"></div>
    //condition or access player's color for class name
    const newTokenDiv = document.createElement("div");
    const columnDiv = document.getElementById(placeholderForTheSpecificColumn);
    newTokenDiv.classList.add(
      "token",
      game.currentPlayer === 1 ? "red" : "black"
    );
  });
});
