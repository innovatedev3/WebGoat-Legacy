import React, { useState, useEffect } from 'react';

const CareersPageComponent = () => {
    const [jobListings, setJobListings] = useState([]);

    useEffect(() => {
        // Fetch job listings data from the backend API
        fetch('/api/careers')
            .then(response => response.json())
            .then(data => setJobListings(data))
            .catch(error => console.error('Error fetching job listings:', error));
    }, []);

    return (
        <div className="careers-page-container">
            <h1>Careers</h1>
            <ul>
                {jobListings.map(job => (
                    <li key={job.id}>
                        <h2>{job.title}</h2>
                        <p>{job.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CareersPageComponent;