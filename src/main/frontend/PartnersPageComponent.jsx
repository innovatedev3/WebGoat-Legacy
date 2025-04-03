import React, { useState, useEffect } from 'react';

const PartnersPageComponent = () => {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        // Fetch partners data from the backend API
        fetch('/api/partners')
            .then(response => response.json())
            .then(data => setPartners(data))
            .catch(error => console.error('Error fetching partners:', error));
    }, []);

    return (
        <div className="partners-page-container">
            <h1>Our Partners</h1>
            <ul>
                {partners.map(partner => (
                    <li key={partner.id}>
                        <h2>{partner.name}</h2>
                        <p>{partner.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PartnersPageComponent;