import React, { useState, useEffect } from 'react';
import ResponsiveContainer from './ResponsiveContainer';

const ReportsPageComponent = () => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        // Fetch reports data from the backend API
        fetch('/api/reports')
            .then(response => response.json())
            .then(data => setReports(data))
            .catch(error => console.error('Error fetching reports:', error));
    }, []);

    return (
        <ResponsiveContainer>
            <header>
                <h1>Reports</h1>
            </header>
            <main>
                <ul>
                    {reports.map(report => (
                        <li key={report.id}>
                            <h2>{report.title}</h2>
                            <p>{report.summary}</p>
                        </li>
                    ))}
                </ul>
            </main>
        </ResponsiveContainer>
    );
};

export default ReportsPageComponent;