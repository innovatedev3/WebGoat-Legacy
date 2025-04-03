import React, { useState, useEffect } from 'react';

const ApplicationLogsPageComponent = () => {
    const [applicationLogs, setApplicationLogs] = useState([]);

    useEffect(() => {
        // Fetch application logs data from the backend API
        fetch('/api/application-logs')
            .then(response => response.json())
            .then(data => setApplicationLogs(data))
            .catch(error => console.error('Error fetching application logs:', error));
    }, []);

    return (
        <div className="application-logs-page-container">
            <h1>Application Logs</h1>
            <ul>
                {applicationLogs.map(log => (
                    <li key={log.id}>
                        <h2>{log.event}</h2>
                        <p>{log.timestamp}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ApplicationLogsPageComponent;