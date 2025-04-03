import React, { useState, useEffect } from 'react';

const SystemStatusPageComponent = () => {
    const [systemStatus, setSystemStatus] = useState([]);

    useEffect(() => {
        // Fetch system status data from the backend API
        fetch('/api/system-status')
            .then(response => response.json())
            .then(data => setSystemStatus(data))
            .catch(error => console.error('Error fetching system status:', error));
    }, []);

    return (
        <div className="system-status-page-container">
            <h1>System Status</h1>
            <ul>
                {systemStatus.map(status => (
                    <li key={status.id}>
                        <h2>{status.component}</h2>
                        <p>{status.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SystemStatusPageComponent;