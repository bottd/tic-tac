import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Board from '../Board';
import GameOver from '../GameOver';
import MatchHistory from '../MatchHistory';
import Nav from '../Nav';
import PlayerHeader from '../PlayerHeader';

function App() {
  const [playerX, setPlayerX] = useState('');
  const [playerO, setPlayerO] = useState('');
  const [activePlayer, setActivePlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  let displayPlayer = activePlayer;
  if (activePlayer === 'X' && playerX.length) {
    displayPlayer = playerX;
  } else if (playerO.length) {
    displayPlayer = playerO;
  }
  return (
    <div className="App">
      <BrowserRouter>
        {winner ? <Redirect to="/gameover" /> : null}
        <Nav
          setWinner={setWinner}
          setPlayerX={setPlayerX}
          setPlayerO={setPlayerO}
        />
        <Switch>
          <Route
            path="/gameover"
            exact
            render={() => (
              <GameOver
                setWinner={setWinner}
                setPlayerX={setPlayerX}
                setPlayerO={setPlayerO}
                playerX={playerX}
                playerO={playerO}
                winner={winner}
              />
            )}
          />
          <Route path="/match-history" exact component={MatchHistory} />
          <Route
            path="/"
            render={() => (
              <div className="game">
                <PlayerHeader
                  playerX={playerX}
                  setPlayerX={setPlayerX}
                  playerO={playerO}
                  setPlayerO={setPlayerO}
                />
                <h2 className="active-player">
                  {displayPlayer}
                  's turn
                </h2>
                <Board
                  activePlayer={activePlayer}
                  setActivePlayer={setActivePlayer}
                  setWinner={setWinner}
                />
              </div>
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
