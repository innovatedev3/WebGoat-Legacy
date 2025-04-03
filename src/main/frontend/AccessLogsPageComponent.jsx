import React, { useState, useEffect } from 'react';

const AccessLogsPageComponent = () => {
    const [accessLogs, setAccessLogs] = useState([]);

    useEffect(() => {
        // Fetch access logs data from the backend API
        fetch('/api/access-logs')
            .then(response => response.json())
            .then(data => setAccessLogs(data))
            .catch(error => console.error('Error fetching access logs:', error));
    }, []);

    return (
        <div className="access-logs-page-container">
            <h1>Access Logs</h1>
            <ul>
                {accessLogs.map(log => (
                    <li key={log.id}>
                        <h2>{log.user}</h2>
                        <p>{log.timestamp}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AccessLogsPageComponent;