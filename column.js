//fills bottom up
//where's the next available square for this next token to fall into?
//game will an arr with 7 instances of Column class


export class Column{
  constructor(colNum) {
    this.colNum = colNum
  }
  add(currentPlayerNum){
    //!store currentPlayerNum to bottommost entry in column
  }
  getTokenAt(row) {
    //if square is empty return null
      //return 1 if player1's token is there
      //return 2 if player2's token is there
    const square = document.getElementById(`square-${row}-${this.colNum}`)
    if (square.className.includes('red')) return 1  //is return necessary?
    if (square.className.includes('black')) return 2
    if (!square.className.includes('red', 'black')) return null
  }
}
