import React, { useState, useEffect } from 'react';

const DonationsPageComponent = () => {
    const [donationOptions, setDonationOptions] = useState([]);

    useEffect(() => {
        // Fetch donation options data from the backend API
        fetch('/api/donations')
            .then(response => response.json())
            .then(data => setDonationOptions(data))
            .catch(error => console.error('Error fetching donation options:', error));
    }, []);

    return (
        <div className="donations-page-container">
            <h1>Donations</h1>
            <ul>
                {donationOptions.map(option => (
                    <li key={option.id}>
                        <h2>{option.title}</h2>
                        <p>{option.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DonationsPageComponent;