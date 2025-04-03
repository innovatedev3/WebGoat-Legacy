import React, { useState, useEffect } from 'react';

const WebinarsPageComponent = () => {
    const [webinars, setWebinars] = useState([]);

    useEffect(() => {
        // Fetch webinars data from the backend API
        fetch('/api/webinars')
            .then(response => response.json())
            .then(data => setWebinars(data))
            .catch(error => console.error('Error fetching webinars:', error));
    }, []);

    return (
        <div className="webinars-page-container">
            <h1>Webinars</h1>
            <ul>
                {webinars.map(webinar => (
                    <li key={webinar.id}>
                        <h2>{webinar.title}</h2>
                        <p>{webinar.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WebinarsPageComponent;