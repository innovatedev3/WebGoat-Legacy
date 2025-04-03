import React, { useState, useEffect } from 'react';
import ResponsiveContainer from './ResponsiveContainer';

const ErrorPageComponent = () => {
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        // Fetch error message from the backend API or set a default message
        fetch('/api/error-message')
            .then(response => response.json())
            .then(data => setErrorMessage(data.message || 'An unexpected error occurred.'))
            .catch(() => setErrorMessage('An unexpected error occurred.'));
    }, []);

    return (
        <ResponsiveContainer>
            <header>
                <h1>Error</h1>
            </header>
            <main>
                <p>{errorMessage}</p>
            </main>
        </ResponsiveContainer>
    );
};

export default ErrorPageComponent;