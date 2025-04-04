import React, { useState, useEffect } from 'react';
import ResponsiveContainer from './ResponsiveContainer';

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
        <ResponsiveContainer>
            <header>
                <h1>Help Topics</h1>
            </header>
            <main>
                <ul>
                    {helpTopics.map(topic => (
                        <li key={topic.id}>
                            <h2>{topic.title}</h2>
                            <p>{topic.description}</p>
                        </li>
                    ))}
                </ul>
            </main>
        </ResponsiveContainer>
    );
};

export default HelpPageComponent;