import React, { useState, useEffect } from 'react';

const SpecificFunctionalityComponent = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Fetch items from the backend API
        fetch('/api/items')
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.error('Error fetching items:', error));
    }, []);

    return (
        <div className="functionality-container">
            <h1>Specific Functionality</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SpecificFunctionalityComponent;