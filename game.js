import Column from "./column.js";

export class Game {
  constructor(player1Name, player2Name) {
    this.player2Name = player2Name;
    this.player1Name = player1Name;
    this.currentPlayer = 1;
    let colObjArray = [];
    for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
      colObjArray.push(new Column(columnIndex));
    }
  }
  getName() {
    `${this.player1Name} vs. ${this.player2Name}`;
  }

  //use columnNum to access and specifies which of the array of 7 instances of Column class
  playInColumn(columnIndex) {
    colObjArray[columnIndex].add(this.currentPlayer);
    this.currentPlayer === 1
      ? (this.currentPlayer = 2)
      : (this.currentPlayer = 1);
  }

  getTokenAt(rowIndex, columnIndex) {
    //return null if empty, 1 if red, 2 if black
    colObjArray[columnIndex].getTokenAt(rowIndex);
  }

}
