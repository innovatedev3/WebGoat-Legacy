import React, { useState, useEffect } from 'react';

const TermsOfServicePageComponent = () => {
    const [termsOfService, setTermsOfService] = useState('');

    useEffect(() => {
        // Fetch terms of service content from the backend API
        fetch('/api/terms-of-service')
            .then(response => response.json())
            .then(data => setTermsOfService(data.content))
            .catch(error => console.error('Error fetching terms of service content:', error));
    }, []);

    return (
        <div className="terms-of-service-page-container">
            <h1>Terms of Service</h1>
            <p>{termsOfService}</p>
        </div>
    );
};

export default TermsOfServicePageComponent;