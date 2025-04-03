import React, { useState, useEffect } from 'react';

const TrainingMaterialsPageComponent = () => {
    const [materials, setMaterials] = useState([]);

    useEffect(() => {
        // Fetch training materials data from the backend API
        fetch('/api/training-materials')
            .then(response => response.json())
            .then(data => setMaterials(data))
            .catch(error => console.error('Error fetching training materials:', error));
    }, []);

    return (
        <div className="training-materials-page-container">
            <h1>Training Materials</h1>
            <ul>
                {materials.map(material => (
                    <li key={material.id}>
                        <h2>{material.title}</h2>
                        <p>{material.description}</p>
                        <a href={material.url} download>Download</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TrainingMaterialsPageComponent;