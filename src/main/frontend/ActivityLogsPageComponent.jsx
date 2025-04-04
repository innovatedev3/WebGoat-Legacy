import React, { useState, useEffect } from 'react';
import ResponsiveContainer from './ResponsiveContainer';

const ActivityLogsPageComponent = () => {
    const [activityLogs, setActivityLogs] = useState([]);

    useEffect(() => {
        // Fetch activity logs data from the backend API
        fetch('/api/activity-logs')
            .then(response => response.json())
            .then(data => setActivityLogs(data))
            .catch(error => console.error('Error fetching activity logs:', error));
    }, []);

    return (
        <ResponsiveContainer>
            <header>
                <h1>Activity Logs</h1>
            </header>
            <main>
                <ul>
                    {activityLogs.map(log => (
                        <li key={log.id}>
                            <h2>{log.action}</h2>
                            <p>{log.timestamp}</p>
                        </li>
                    ))}
                </ul>
            </main>
        </ResponsiveContainer>
    );
};

export default ActivityLogsPageComponent;