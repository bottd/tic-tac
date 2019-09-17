import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav({ setPlayerO, setPlayerX, setWinner }) {
  return (
    <nav className="Nav">
      <NavLink
        className="Nav-item"
        to="/"
        onClick={() => {
          setPlayerO('');
          setPlayerX('');
          setWinner(null);
        }}>
        Play
      </NavLink>
      <NavLink to="/match-history" className="Nav-item">
        Match History
      </NavLink>
    </nav>
  );
}

export default Nav;
