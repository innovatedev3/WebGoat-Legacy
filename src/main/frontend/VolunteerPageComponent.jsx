import React, { useState, useEffect } from 'react';

const VolunteerPageComponent = () => {
    const [volunteerOpportunities, setVolunteerOpportunities] = useState([]);

    useEffect(() => {
        // Fetch volunteer opportunities data from the backend API
        fetch('/api/volunteer')
            .then(response => response.json())
            .then(data => setVolunteerOpportunities(data))
            .catch(error => console.error('Error fetching volunteer opportunities:', error));
    }, []);

    return (
        <div className="volunteer-page-container">
            <h1>Volunteer Opportunities</h1>
            <ul>
                {volunteerOpportunities.map(opportunity => (
                    <li key={opportunity.id}>
                        <h2>{opportunity.title}</h2>
                        <p>{opportunity.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VolunteerPageComponent;