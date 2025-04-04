import React, { useState, useEffect } from 'react';
import ResponsiveContainer from './ResponsiveContainer';

const AuditLogsPageComponent = () => {
    const [auditLogs, setAuditLogs] = useState([]);

    useEffect(() => {
        // Fetch audit logs data from the backend API
        fetch('/api/audit-logs')
            .then(response => response.json())
            .then(data => setAuditLogs(data))
            .catch(error => console.error('Error fetching audit logs:', error));
    }, []);

    return (
        <ResponsiveContainer>
            <header>
                <h1>Audit Logs</h1>
            </header>
            <main>
                <ul>
                    {auditLogs.map(log => (
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

export default AuditLogsPageComponent;