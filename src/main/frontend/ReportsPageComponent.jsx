import React, { useState, useEffect } from 'react';

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
        <div className="reports-page-container">
            <h1>Reports</h1>
            <ul>
                {reports.map(report => (
                    <li key={report.id}>
                        <h2>{report.title}</h2>
                        <p>{report.summary}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReportsPageComponent;