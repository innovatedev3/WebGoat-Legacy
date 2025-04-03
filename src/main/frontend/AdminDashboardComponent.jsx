import React, { useState, useEffect } from 'react';
import ResponsiveContainer from './ResponsiveContainer';

const AdminDashboardComponent = () => {
    const [dashboardData, setDashboardData] = useState([]);

    useEffect(() => {
        // Fetch admin dashboard data from the backend API
        fetch('/api/admin-dashboard')
            .then(response => response.json())
            .then(data => setDashboardData(data))
            .catch(error => console.error('Error fetching admin dashboard data:', error));
    }, []);

    return (
        <ResponsiveContainer>
            <header>
                <h1>Admin Dashboard</h1>
            </header>
            <main>
                <ul>
                    {dashboardData.map(item => (
                        <li key={item.id}>
                            <h2>{item.name}</h2>
                            <p>{item.details}</p>
                        </li>
                    ))}
                </ul>
            </main>
        </ResponsiveContainer>
    );
};

export default AdminDashboardComponent;