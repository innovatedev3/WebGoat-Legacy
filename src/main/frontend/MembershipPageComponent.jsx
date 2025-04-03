import React, { useState, useEffect } from 'react';

const MembershipPageComponent = () => {
    const [membershipOptions, setMembershipOptions] = useState([]);

    useEffect(() => {
        // Fetch membership options data from the backend API
        fetch('/api/membership')
            .then(response => response.json())
            .then(data => setMembershipOptions(data))
            .catch(error => console.error('Error fetching membership options:', error));
    }, []);

    return (
        <div className="membership-page-container">
            <h1>Membership Options</h1>
            <ul>
                {membershipOptions.map(option => (
                    <li key={option.id}>
                        <h2>{option.title}</h2>
                        <p>{option.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MembershipPageComponent;