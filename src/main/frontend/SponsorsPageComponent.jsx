import React, { useState, useEffect } from 'react';

const SponsorsPageComponent = () => {
    const [sponsors, setSponsors] = useState([]);

    useEffect(() => {
        // Fetch sponsors data from the backend API
        fetch('/api/sponsors')
            .then(response => response.json())
            .then(data => setSponsors(data))
            .catch(error => console.error('Error fetching sponsors:', error));
    }, []);

    return (
        <div className="sponsors-page-container">
            <h1>Our Sponsors</h1>
            <ul>
                {sponsors.map(sponsor => (
                    <li key={sponsor.id}>
                        <h2>{sponsor.name}</h2>
                        <p>{sponsor.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SponsorsPageComponent;