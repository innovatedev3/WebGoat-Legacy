import React, { useState, useEffect } from 'react';

const PrivacyPolicyPageComponent = () => {
    const [privacyPolicy, setPrivacyPolicy] = useState('');

    useEffect(() => {
        // Fetch privacy policy content from the backend API
        fetch('/api/privacy-policy')
            .then(response => response.json())
            .then(data => setPrivacyPolicy(data.content))
            .catch(error => console.error('Error fetching privacy policy content:', error));
    }, []);

    return (
        <div className="privacy-policy-page-container">
            <h1>Privacy Policy</h1>
            <p>{privacyPolicy}</p>
        </div>
    );
};

export default PrivacyPolicyPageComponent;