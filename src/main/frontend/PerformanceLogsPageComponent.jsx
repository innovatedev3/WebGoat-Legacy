import React, { useState, useEffect } from 'react';

const PerformanceLogsPageComponent = () => {
    const [performanceLogs, setPerformanceLogs] = useState([]);

    useEffect(() => {
        // Fetch performance logs data from the backend API
        fetch('/api/performance-logs')
            .then(response => response.json())
            .then(data => setPerformanceLogs(data))
            .catch(error => console.error('Error fetching performance logs:', error));
    }, []);

    return (
        <div className="performance-logs-page-container">
            <h1>Performance Logs</h1>
            <ul>
                {performanceLogs.map(log => (
                    <li key={log.id}>
                        <h2>{log.metric}</h2>
                        <p>{log.value}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PerformanceLogsPageComponent;