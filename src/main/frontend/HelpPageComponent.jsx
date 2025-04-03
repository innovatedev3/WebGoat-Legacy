import React, { useState, useEffect } from 'react';

const HelpPageComponent = () => {
    const [helpTopics, setHelpTopics] = useState([]);

    useEffect(() => {
        // Fetch help topics data from the backend API
        fetch('/api/help-topics')
            .then(response => response.json())
            .then(data => setHelpTopics(data))
            .catch(error => console.error('Error fetching help topics:', error));
    }, []);

    return (
        <div className="help-page-container">
            <h1>Help Topics</h1>
            <ul>
                {helpTopics.map(topic => (
                    <li key={topic.id}>
                        <h2>{topic.title}</h2>
                        <p>{topic.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HelpPageComponent;