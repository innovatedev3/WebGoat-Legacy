import React, { useState, useEffect } from 'react';

const DashboardComponent = () => {
    const [dashboardData, setDashboardData] = useState([]);

    useEffect(() => {
        // Fetch dashboard data from the backend API
        fetch('/api/dashboard')
            .then(response => response.json())
            .then(data => setDashboardData(data))
            .catch(error => console.error('Error fetching dashboard data:', error));
    }, []);

    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            <ul>
                {dashboardData.map(item => (
                    <li key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DashboardComponent;