import React, { useState, useEffect } from 'react';

const MetricsPageComponent = () => {
    const [metrics, setMetrics] = useState([]);

    useEffect(() => {
        // Fetch metrics data from the backend API
        fetch('/api/metrics')
            .then(response => response.json())
            .then(data => setMetrics(data))
            .catch(error => console.error('Error fetching metrics:', error));
    }, []);

    return (
        <div className="metrics-page-container">
            <h1>Metrics</h1>
            <ul>
                {metrics.map(metric => (
                    <li key={metric.id}>
                        <h2>{metric.name}</h2>
                        <p>{metric.value}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MetricsPageComponent;