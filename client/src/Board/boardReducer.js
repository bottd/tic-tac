export const initialBoard = {
  board: [[null, null, null], [null, null, null], [null, null, null]],
  winner: null,
};

export const boardReducer = (
  oldBoard,
  { symbol, rowIndex, columnIndex, type },
) => {
  switch (type) {
    case 'PLAYER_MOVE':
      const newBoard = [...oldBoard.board];
      newBoard[rowIndex] = [...oldBoard.board[rowIndex]];
      newBoard[rowIndex][columnIndex] = symbol;
      return { board: newBoard, winner: checkForWinner(newBoard) };
    case 'NEW_GAME':
      return initialBoard;
    default:
      return oldBoard;
  }
};

function checkForWinner(board) {
  let winner = null;
  board.forEach(row => {
    if (row[0] === row[1] && row[0] === row[2]) {
      winner = row[0] ? row[0] : winner;
    }
  });
  for (let column = 0; column <= 2; column++) {
    if (
      board[0][column] === board[1][column] &&
      board[0][column] === board[2][column]
    ) {
      winner = board[0][column] ? board[0][column] : winner;
    }
  }
  if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
    winner = board[0][0] ? board[0][0] : winner;
  } else if (board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
    winner = board[0][2] ? board[0][2] : winner;
  }
  return winner;
}
