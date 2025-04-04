import React, { useState, useEffect } from 'react';
import ResponsiveContainer from './ResponsiveContainer';

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
        <ResponsiveContainer>
            <header>
                <h1>System Status</h1>
            </header>
            <main>
                <ul>
                    {systemStatus.map(status => (
                        <li key={status.id}>
                            <h2>{status.component}</h2>
                            <p>{status.status}</p>
                        </li>
                    ))}
                </ul>
            </main>
        </ResponsiveContainer>
    );
};

export default SystemStatusPageComponent;