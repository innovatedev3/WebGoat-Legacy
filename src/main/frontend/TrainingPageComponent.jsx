import React, { useState, useEffect } from 'react';

const TrainingPageComponent = () => {
    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        // Fetch training data from the backend API
        fetch('/api/trainings')
            .then(response => response.json())
            .then(data => setTrainings(data))
            .catch(error => console.error('Error fetching trainings:', error));
    }, []);

    return (
        <div className="training-page-container">
            <h1>Trainings</h1>
            <ul>
                {trainings.map(training => (
                    <li key={training.id}>
                        <h2>{training.title}</h2>
                        <p>{training.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TrainingPageComponent;