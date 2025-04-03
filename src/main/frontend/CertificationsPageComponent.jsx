import React, { useState, useEffect } from 'react';

const CertificationsPageComponent = () => {
    const [certifications, setCertifications] = useState([]);

    useEffect(() => {
        // Fetch certifications data from the backend API
        fetch('/api/certifications')
            .then(response => response.json())
            .then(data => setCertifications(data))
            .catch(error => console.error('Error fetching certifications:', error));
    }, []);

    return (
        <div className="certifications-page-container">
            <h1>Certifications</h1>
            <ul>
                {certifications.map(certification => (
                    <li key={certification.id}>
                        <h2>{certification.title}</h2>
                        <p>{certification.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CertificationsPageComponent;