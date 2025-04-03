import React, { useState, useEffect } from 'react';

const SecurityLogsPageComponent = () => {
    const [securityLogs, setSecurityLogs] = useState([]);

    useEffect(() => {
        // Fetch security logs data from the backend API
        fetch('/api/security-logs')
            .then(response => response.json())
            .then(data => setSecurityLogs(data))
            .catch(error => console.error('Error fetching security logs:', error));
    }, []);

    return (
        <div className="security-logs-page-container">
            <h1>Security Logs</h1>
            <ul>
                {securityLogs.map(log => (
                    <li key={log.id}>
                        <h2>{log.event}</h2>
                        <p>{log.timestamp}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SecurityLogsPageComponent;