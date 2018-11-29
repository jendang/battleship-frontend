//(x,y) will be coordinates of a square
export const free = (board, x,y) => {
  return (board[x][y] === '0' || board[x][y]==='h')
} // check if a square is free


export const rows = (board) => {
  return board
}

// Returns a transposed array of columns on the board
export const cols = (board) => {
  return board
    .map((row, y) => row.map((v, x) => board[x][y]))
}

//check if left side of a square is free for the boat
export const leftFree = (board, x, y, boatLength) => {
  if (y < boatLength-1) return false
  const last = y-(boatLength-1)
  //console.log(last);
  for (let i=last; i<y; i++) {
     if (!free(board, x, i)) return false
  }
  return true
}

//check if the right side of a square is free for the boat
export const rightFree = (board, x, y, boatLength) => {
  if ((board.length-y) < boatLength) return false

  for (let i=y+1; i<y+boatLength; i++)
    if (!free(board, x, i)) return false

  return true
}

//check if the above of a square is free for the boat
export const topFree = (board, x, y, boatLength) => {
  if (x < boatLength-1) return false
  const init = x-(boatLength-1)
  //console.log(last);
  for (let i=init; i<x; i++) {
     if (!free(board, i, y)) return false
  }
  return true
}

//check if below side of a square is free for the boat
export const bottomFree = (board, x, y, boatLength) => {
  if ((board.length-x) < boatLength) return false

  for (let i=x+1; i<x+boatLength; i++)
    if (!free(board, i, y)) return false

  return true
}

export const shipCanFit = (board, x, y, boatLength) => {
  return leftFree(board,x,y,boatLength) || rightFree(board,x,y,boatLength) ||
         topFree(board,x,y,boatLength) || bottomFree(board,x,y,boatLength)
}

export const numberOfValues = (row: string[], value: string) => {
  return row
    .filter(v => v === value)
    .length
}

export const existsOnBoard = (board, ship) => {
  let number
  switch (ship) {
    case '1':
      number=2
      break;
    case '2':
      number=3
      break;
    case '3':
      number=3
      break;
    case '4':
      number=4
      break;
    case '5':
      number=5
      break;
    default:
      number=0

  }

  const count = board
    .map(r => numberOfValues(r, ship))
    .reduce((sum, i) => sum + i, 0)
  return (count === number)
}

export const updateBoard = (board, guessBoard) => {
  const newBoard=board.map((row,x) => row.map(
    (value,y) => {
      if ((guessBoard[x][y]==='s' || guessBoard[x][y]==='w') && (!value.includes('x')))
        return value+='x'
      return value
    }
  ))
  return newBoard;
}
