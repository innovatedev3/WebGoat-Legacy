import React, { useState, useEffect } from 'react';

const ResearchPageComponent = () => {
    const [researchPapers, setResearchPapers] = useState([]);

    useEffect(() => {
        // Fetch research papers data from the backend API
        fetch('/api/research-papers')
            .then(response => response.json())
            .then(data => setResearchPapers(data))
            .catch(error => console.error('Error fetching research papers:', error));
    }, []);

    return (
        <div className="research-page-container">
            <h1>Research Papers</h1>
            <ul>
                {researchPapers.map(paper => (
                    <li key={paper.id}>
                        <h2>{paper.title}</h2>
                        <p>{paper.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResearchPageComponent;