import React, { useState, useEffect } from 'react';

const AlertsPageComponent = () => {
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        // Fetch alerts data from the backend API
        fetch('/api/alerts')
            .then(response => response.json())
            .then(data => setAlerts(data))
            .catch(error => console.error('Error fetching alerts:', error));
    }, []);

    return (
        <div className="alerts-page-container">
            <h1>Alerts</h1>
            <ul>
                {alerts.map(alert => (
                    <li key={alert.id}>
                        <h2>{alert.title}</h2>
                        <p>{alert.message}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AlertsPageComponent;