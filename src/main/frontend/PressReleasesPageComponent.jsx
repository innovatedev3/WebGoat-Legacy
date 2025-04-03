import React, { useState, useEffect } from 'react';

const PressReleasesPageComponent = () => {
    const [pressReleases, setPressReleases] = useState([]);

    useEffect(() => {
        // Fetch press releases data from the backend API
        fetch('/api/press-releases')
            .then(response => response.json())
            .then(data => setPressReleases(data))
            .catch(error => console.error('Error fetching press releases:', error));
    }, []);

    return (
        <div className="press-releases-page-container">
            <h1>Press Releases</h1>
            <ul>
                {pressReleases.map(release => (
                    <li key={release.id}>
                        <h2>{release.title}</h2>
                        <p>{release.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PressReleasesPageComponent;