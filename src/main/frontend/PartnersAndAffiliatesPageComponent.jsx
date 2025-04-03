import React, { useState, useEffect } from 'react';

const PartnersAndAffiliatesPageComponent = () => {
    const [partners, setPartners] = useState([]);
    const [affiliates, setAffiliates] = useState([]);

    useEffect(() => {
        // Fetch partners data from the backend API
        fetch('/api/partners')
            .then(response => response.json())
            .then(data => setPartners(data))
            .catch(error => console.error('Error fetching partners:', error));

        // Fetch affiliates data from the backend API
        fetch('/api/affiliates')
            .then(response => response.json())
            .then(data => setAffiliates(data))
            .catch(error => console.error('Error fetching affiliates:', error));
    }, []);

    return (
        <div className="partners-affiliates-page-container">
            <h1>Partners and Affiliates</h1>
            <div>
                <h2>Our Partners</h2>
                <ul>
                    {partners.map(partner => (
                        <li key={partner.id}>
                            <h3>{partner.name}</h3>
                            <p>{partner.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Our Affiliates</h2>
                <ul>
                    {affiliates.map(affiliate => (
                        <li key={affiliate.id}>
                            <h3>{affiliate.name}</h3>
                            <p>{affiliate.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PartnersAndAffiliatesPageComponent;