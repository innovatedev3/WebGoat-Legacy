import React, { useState, useEffect } from 'react';

const AchievementsPageComponent = () => {
    const [achievements, setAchievements] = useState([]);

    useEffect(() => {
        // Fetch achievements data from the backend API
        fetch('/api/achievements')
            .then(response => response.json())
            .then(data => setAchievements(data))
            .catch(error => console.error('Error fetching achievements:', error));
    }, []);

    return (
        <div className="achievements-page-container">
            <h1>Achievements</h1>
            <ul>
                {achievements.map(achievement => (
                    <li key={achievement.id}>
                        <h2>{achievement.title}</h2>
                        <p>{achievement.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AchievementsPageComponent;