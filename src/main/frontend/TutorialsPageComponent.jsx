import React, { useState, useEffect } from 'react';

const TutorialsPageComponent = () => {
    const [tutorials, setTutorials] = useState([]);

    useEffect(() => {
        // Fetch tutorials data from the backend API
        fetch('/api/tutorials')
            .then(response => response.json())
            .then(data => setTutorials(data))
            .catch(error => console.error('Error fetching tutorials:', error));
    }, []);

    return (
        <div className="tutorials-page-container">
            <h1>Tutorials</h1>
            <ul>
                {tutorials.map(tutorial => (
                    <li key={tutorial.id}>
                        <h2>{tutorial.title}</h2>
                        <p>{tutorial.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TutorialsPageComponent;