import React, { useState, useEffect } from 'react';

const ErrorLogsPageComponent = () => {
    const [errorLogs, setErrorLogs] = useState([]);

    useEffect(() => {
        // Fetch error logs data from the backend API
        fetch('/api/error-logs')
            .then(response => response.json())
            .then(data => setErrorLogs(data))
            .catch(error => console.error('Error fetching error logs:', error));
    }, []);

    return (
        <div className="error-logs-page-container">
            <h1>Error Logs</h1>
            <ul>
                {errorLogs.map(log => (
                    <li key={log.id}>
                        <h2>{log.error}</h2>
                        <p>{log.timestamp}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ErrorLogsPageComponent;