import React, { useState, useEffect } from 'react';
import ResponsiveContainer from './ResponsiveContainer';

const UserManagementPageComponent = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch user management data from the backend API
        fetch('/api/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <ResponsiveContainer>
            <header>
                <h1>User Management</h1>
            </header>
            <main>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            <h2>{user.name}</h2>
                            <p>{user.email}</p>
                        </li>
                    ))}
                </ul>
            </main>
        </ResponsiveContainer>
    );
};

export default UserManagementPageComponent;