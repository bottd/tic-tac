import React from 'react';
import './Row.css';
import Box from '../Box';

function Row({
  activePlayer,
  dispatchBoard,
  setActivePlayer,
  rowIndex,
  rowValue,
}) {
  return (
    <div className="Row">
      {rowValue.map((value, index) => (
        <Box
          activePlayer={activePlayer}
          setActivePlayer={setActivePlayer}
          dispatchBoard={dispatchBoard}
          rowIndex={rowIndex}
          value={value}
          columnIndex={index}
          key={`Box${rowIndex}-${index}`}
        />
      ))}
    </div>
  );
}

export default Row;
