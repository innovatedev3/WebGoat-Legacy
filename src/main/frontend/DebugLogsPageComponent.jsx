import React, { useState, useEffect } from 'react';

const DebugLogsPageComponent = () => {
    const [debugLogs, setDebugLogs] = useState([]);

    useEffect(() => {
        // Fetch debug logs data from the backend API
        fetch('/api/debug-logs')
            .then(response => response.json())
            .then(data => setDebugLogs(data))
            .catch(error => console.error('Error fetching debug logs:', error));
    }, []);

    return (
        <div className="debug-logs-page-container">
            <h1>Debug Logs</h1>
            <ul>
                {debugLogs.map(log => (
                    <li key={log.id}>
                        <h2>{log.event}</h2>
                        <p>{log.timestamp}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DebugLogsPageComponent;