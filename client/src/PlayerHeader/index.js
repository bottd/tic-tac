import React from 'react';
import './PlayerHeader.css';

function PlayerHeader({ playerX, playerO, setPlayerX, setPlayerO }) {
  return (
    <div className="PlayerHeader">
      <div className="name-wrapper">
        <h1>X</h1>
        <input
          className="name-input"
          value={playerX}
          onChange={event => setPlayerX(event.target.value)}
          placeholder="Enter X player's name"
        />
      </div>
      <div className="name-wrapper">
        <h1>O</h1>
        <input
          className="name-input"
          value={playerO}
          onChange={event => setPlayerO(event.target.value)}
          placeholder="Enter X player's name"
        />
      </div>
    </div>
  );
}

export default PlayerHeader;
