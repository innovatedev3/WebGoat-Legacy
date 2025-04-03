import React, { useState, useEffect } from 'react';

const DownloadsPageComponent = () => {
    const [downloads, setDownloads] = useState([]);

    useEffect(() => {
        // Fetch downloads data from the backend API
        fetch('/api/downloads')
            .then(response => response.json())
            .then(data => setDownloads(data))
            .catch(error => console.error('Error fetching downloads:', error));
    }, []);

    return (
        <div className="downloads-page-container">
            <h1>Downloads</h1>
            <ul>
                {downloads.map(download => (
                    <li key={download.id}>
                        <h2>{download.title}</h2>
                        <p>{download.description}</p>
                        <a href={download.url} download>Download</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DownloadsPageComponent;