import React, { useState, useEffect } from 'react';
import ResponsiveContainer from './ResponsiveContainer';

const RoleManagementPageComponent = () => {
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        // Fetch role management data from the backend API
        fetch('/api/roles')
            .then(response => response.json())
            .then(data => setRoles(data))
            .catch(error => console.error('Error fetching roles:', error));
    }, []);

    return (
        <ResponsiveContainer>
            <header>
                <h1>Role Management</h1>
            </header>
            <main>
                <ul>
                    {roles.map(role => (
                        <li key={role.id}>
                            <h2>{role.name}</h2>
                            <p>{role.description}</p>
                        </li>
                    ))}
                </ul>
            </main>
        </ResponsiveContainer>
    );
};

export default RoleManagementPageComponent;