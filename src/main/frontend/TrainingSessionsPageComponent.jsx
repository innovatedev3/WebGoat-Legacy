import React, { useState, useEffect } from 'react';

const TrainingSessionsPageComponent = () => {
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        // Fetch training sessions data from the backend API
        fetch('/api/training-sessions')
            .then(response => response.json())
            .then(data => setSessions(data))
            .catch(error => console.error('Error fetching training sessions:', error));
    }, []);

    return (
        <div className="training-sessions-page-container">
            <h1>Training Sessions</h1>
            <ul>
                {sessions.map(session => (
                    <li key={session.id}>
                        <h2>{session.title}</h2>
                        <p>{session.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TrainingSessionsPageComponent;