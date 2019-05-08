// let is another way to define variables.
let form = document.getElementById("chessKnight")
let knightBtn = document.getElementById("button")
let result = document.getElementById("result")
knightBtn.addEventListener("click", showPossibleMoves)
//this function will run the script as soon as the button "knight moves" is pressed.

function showPossibleMoves() {
  let cell = form.value
  // convert letter to number
  let x = parseInt(cell.substring(0,1).charCodeAt() - 64)
  let y = parseInt(cell.substring(1,2))
// the chessboard only has whole numbers so we use parseInt
  let knightMoves = [
    {x:2, y:-1},{x:2, y:1},{x:1, y:-2},{x:1, y:2},
    {x:-2, y:-1},{x:-2, y:1},{x:-1, y:-2},{x:-1, y:2}
  ]
  //a knight can only move like an English "L" letter so these are all the possible...
  //... moves for a knight(2 to the right 1 to the top,or two to the left one to the top etc.)

  let possibleMoves = []
  //the rows in chess are defined by letters thus we use a string to respresent them.
  //the columns are numbers so we use an array to represent them.
  //i is the index of "knightmoves array".
  for(let i of knightMoves) {
    let row = String.fromCharCode(x + i.x + 64)
    let column = y+i.y
    possibleMoves.push(row + "" + column)
  }
  console.log('Possible Coordinates:', possibleMoves);
  result.innerHTML = possibleMoves.toString()
}
