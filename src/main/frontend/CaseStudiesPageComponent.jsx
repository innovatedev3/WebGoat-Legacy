import React, { useState, useEffect } from 'react';

const CaseStudiesPageComponent = () => {
    const [caseStudies, setCaseStudies] = useState([]);

    useEffect(() => {
        // Fetch case studies data from the backend API
        fetch('/api/case-studies')
            .then(response => response.json())
            .then(data => setCaseStudies(data))
            .catch(error => console.error('Error fetching case studies:', error));
    }, []);

    return (
        <div className="case-studies-page-container">
            <h1>Case Studies</h1>
            <ul>
                {caseStudies.map(study => (
                    <li key={study.id}>
                        <h2>{study.title}</h2>
                        <p>{study.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CaseStudiesPageComponent;