import React, { useState, useEffect } from 'react';

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
        <div className="permissions-page-container">
            <h1>Permissions</h1>
            <ul>
                {permissions.map(permission => (
                    <li key={permission.id}>
                        <h2>{permission.name}</h2>
                        <p>{permission.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PermissionsPageComponent;