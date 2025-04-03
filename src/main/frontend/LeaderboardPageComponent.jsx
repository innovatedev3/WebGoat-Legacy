import React, { useState, useEffect } from 'react';

const LeaderboardPageComponent = () => {
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        // Fetch leaderboard data from the backend API
        fetch('/api/leaderboard')
            .then(response => response.json())
            .then(data => setLeaderboard(data))
            .catch(error => console.error('Error fetching leaderboard:', error));
    }, []);

    return (
        <div className="leaderboard-page-container">
            <h1>Leaderboard</h1>
            <ul>
                {leaderboard.map(entry => (
                    <li key={entry.id}>
                        <h2>{entry.name}</h2>
                        <p>Score: {entry.score}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LeaderboardPageComponent;