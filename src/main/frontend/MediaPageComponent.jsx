import React, { useState, useEffect } from 'react';

const MediaPageComponent = () => {
    const [mediaItems, setMediaItems] = useState([]);

    useEffect(() => {
        // Fetch media items data from the backend API
        fetch('/api/media')
            .then(response => response.json())
            .then(data => setMediaItems(data))
            .catch(error => console.error('Error fetching media items:', error));
    }, []);

    return (
        <div className="media-page-container">
            <h1>Media</h1>
            <ul>
                {mediaItems.map(item => (
                    <li key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">View</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MediaPageComponent;