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
    <div className="MatchHistory">
      <ul>
        {matches.map(match => {
          const date = new Date(match.created_at);
          return <li>{match.winner_name} won against {match.loser_name} at {date.toLocaleString()}</li>;
        })}
      </ul>
    </div>
  );
}

export default MatchHistory;
