import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav({ setPlayerO, setPlayerX, setWinner }) {
  return (
    <nav className="Nav">
      <NavLink
        to="/"
        onClick={() => {
          setPlayerO('');
          setPlayerX('');
          setWinner(null);
        }}>
        Play
      </NavLink>
      <NavLink to="/match-history">Match History</NavLink>
    </nav>
  );
}

export default Nav;
