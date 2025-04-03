import React, { useState, useEffect } from 'react';

const ProgressPageComponent = () => {
    const [progressData, setProgressData] = useState([]);

    useEffect(() => {
        // Fetch progress data from the backend API
        fetch('/api/progress')
            .then(response => response.json())
            .then(data => setProgressData(data))
            .catch(error => console.error('Error fetching progress data:', error));
    }, []);

    return (
        <div className="progress-page-container">
            <h1>Progress</h1>
            <ul>
                {progressData.map(progress => (
                    <li key={progress.id}>
                        <h2>{progress.title}</h2>
                        <p>{progress.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProgressPageComponent;