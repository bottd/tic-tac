import React from 'react';
import './Box.css';

function Box({
  activePlayer,
  columnIndex,
  dispatchBoard,
  setActivePlayer,
  rowIndex,
  value,
}) {
  return (
    <div
      className="Box"
      onClick={() => {
        dispatchBoard({
          symbol: activePlayer,
          columnIndex,
          rowIndex,
          type: 'PLAYER_MOVE',
        });
        setActivePlayer(activePlayer === 'X' ? 'O' : 'X');
      }}>
      {value}
    </div>
  );
}

export default Box;
