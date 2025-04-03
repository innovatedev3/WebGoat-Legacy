import React, { useState, useEffect } from 'react';

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
        <div className="user-management-page-container">
            <h1>User Management</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserManagementPageComponent;