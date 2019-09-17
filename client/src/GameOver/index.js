import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import './GameOver.css';

function GameOver({
  playerO,
  playerX,
  setPlayerX,
  setPlayerO,
  setWinner,
  winner,
}) {
  const [postedMatch, setPostedMatch] = useState(false);
  let displayWinner = '';
  let displayLoser = '';
  if (winner === 'X') {
    displayWinner = playerX.length ? playerX : 'X';
    displayLoser = playerO.length ? playerO : 'O';
  } else {
    displayWinner = playerO.length ? playerO : 'O';
    displayLoser = playerX.length ? playerX : 'X';
  }
  useEffect(() => {
    if (winner && !postedMatch) {
      const body = {
        winner_name: displayWinner,
        loser_name: displayLoser,
      };
      fetch('/api/matches', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(() => setPostedMatch(false));
    }
  });
  return (
    <div className="GameOver">
      {!winner ? <Redirect to="/" /> : null}
      <h1>
        Game over {displayWinner} won and {displayLoser} lost!
      </h1>
      <button
        className="play-again"
        onClick={() => {
          setPlayerX('');
          setPlayerO('');
          setWinner(null);
        }}>
        Play again
      </button>
    </div>
  );
}

export default GameOver;
