import React, { useReducer } from 'react';
import { boardReducer, initialBoard } from './boardReducer';
import Row from '../Row';
import './Board.css';

function Board({ activePlayer, setActivePlayer, setWinner }) {
  const [boardValue, dispatchBoard] = useReducer(boardReducer, initialBoard);
  if (boardValue.winner) {
    setWinner(boardValue.winner);
  }
  return (
    <div className="Board">
      {boardValue.board.map((row, index) => (
        <Row
          activePlayer={activePlayer}
          setActivePlayer={setActivePlayer}
          dispatchBoard={dispatchBoard}
          rowIndex={index}
          rowValue={boardValue.board[index]}
          key={`ROW${index}`}
        />
      ))}
    </div>
  );
}

export default Board;
