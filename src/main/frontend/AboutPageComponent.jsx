import React, { useState, useEffect } from 'react';

const AboutPageComponent = () => {
    const [aboutInfo, setAboutInfo] = useState('');

    useEffect(() => {
        // Fetch about page content from the backend API
        fetch('/api/about')
            .then(response => response.json())
            .then(data => setAboutInfo(data.content))
            .catch(error => console.error('Error fetching about page content:', error));
    }, []);

    return (
        <div className="about-page-container">
            <h1>About Us</h1>
            <p>{aboutInfo}</p>
        </div>
    );
};

export default AboutPageComponent;