import React, { useState, useEffect } from 'react';

const AffiliatesPageComponent = () => {
    const [affiliates, setAffiliates] = useState([]);

    useEffect(() => {
        // Fetch affiliates data from the backend API
        fetch('/api/affiliates')
            .then(response => response.json())
            .then(data => setAffiliates(data))
            .catch(error => console.error('Error fetching affiliates:', error));
    }, []);

    return (
        <div className="affiliates-page-container">
            <h1>Our Affiliates</h1>
            <ul>
                {affiliates.map(affiliate => (
                    <li key={affiliate.id}>
                        <h2>{affiliate.name}</h2>
                        <p>{affiliate.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AffiliatesPageComponent;