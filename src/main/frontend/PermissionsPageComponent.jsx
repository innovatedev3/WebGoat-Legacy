import React, { useState, useEffect } from 'react';
import ResponsiveContainer from './ResponsiveContainer';

const PermissionsPageComponent = () => {
    const [permissions, setPermissions] = useState([]);

    useEffect(() => {
        // Fetch permissions data from the backend API
        fetch('/api/permissions')
            .then(response => response.json())
            .then(data => setPermissions(data))
            .catch(error => console.error('Error fetching permissions:', error));
    }, []);

    return (
        <ResponsiveContainer>
            <header>
                <h1>Permissions</h1>
            </header>
            <main>
                <ul>
                    {permissions.map(permission => (
                        <li key={permission.id}>
                            <h2>{permission.name}</h2>
                            <p>{permission.description}</p>
                        </li>
                    ))}
                </ul>
            </main>
        </ResponsiveContainer>
    );
};

export default PermissionsPageComponent;