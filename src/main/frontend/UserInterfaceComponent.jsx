import React, { useState, useEffect } from 'react';

const UserInterfaceComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from the backend API
        fetch('/api/data')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="ui-container">
            <h1>User Interface</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.details}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserInterfaceComponent;