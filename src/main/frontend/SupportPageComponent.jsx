import React, { useState, useEffect } from 'react';

const SupportPageComponent = () => {
    const [supportTopics, setSupportTopics] = useState([]);

    useEffect(() => {
        // Fetch support topics data from the backend API
        fetch('/api/support-topics')
            .then(response => response.json())
            .then(data => setSupportTopics(data))
            .catch(error => console.error('Error fetching support topics:', error));
    }, []);

    return (
        <div className="support-page-container">
            <h1>Support Topics</h1>
            <ul>
                {supportTopics.map(topic => (
                    <li key={topic.id}>
                        <h2>{topic.title}</h2>
                        <p>{topic.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SupportPageComponent;