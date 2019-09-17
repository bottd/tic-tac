import React, { useEffect, useState } from 'react';
import './MatchHistory.css';

function MatchHistory() {
  const [dataFetched, setDataFetched] = useState(false);
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    if (!dataFetched) {
      fetch('/api/matches')
        .then(res => res.json())
        .then(matches => setMatches(matches))
        .then(() => setDataFetched(true));
    }
  });
  return (
    <table className="MatchHistory">
      <thead>
        <tr>
          <th colspan="3">Tic Tac Toe Matches</th>
        </tr>
        <tr>
          <th>Winner</th>
          <th>Loser</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {matches.map(match => {
          const date = new Date(match.created_at);
          return (
            <tr>
              <td>{match.winner_name}</td>
              <td>{match.loser_name}</td>
              <td>{date.toLocaleString()}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default MatchHistory;
