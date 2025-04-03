import React, { useState, useEffect } from 'react';

const WhitePapersPageComponent = () => {
    const [whitePapers, setWhitePapers] = useState([]);

    useEffect(() => {
        // Fetch white papers data from the backend API
        fetch('/api/white-papers')
            .then(response => response.json())
            .then(data => setWhitePapers(data))
            .catch(error => console.error('Error fetching white papers:', error));
    }, []);

    return (
        <div className="white-papers-page-container">
            <h1>White Papers</h1>
            <ul>
                {whitePapers.map(paper => (
                    <li key={paper.id}>
                        <h2>{paper.title}</h2>
                        <p>{paper.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WhitePapersPageComponent;