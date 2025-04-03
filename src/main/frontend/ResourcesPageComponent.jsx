import React, { useState, useEffect } from 'react';

const ResourcesPageComponent = () => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        // Fetch resources data from the backend API
        fetch('/api/resources')
            .then(response => response.json())
            .then(data => setResources(data))
            .catch(error => console.error('Error fetching resources:', error));
    }, []);

    return (
        <div className="resources-page-container">
            <h1>Resources</h1>
            <ul>
                {resources.map(resource => (
                    <li key={resource.id}>
                        <h2>{resource.title}</h2>
                        <p>{resource.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResourcesPageComponent;