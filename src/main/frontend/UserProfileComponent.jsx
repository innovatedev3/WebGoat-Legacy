import React, { useState, useEffect } from 'react';
import ResponsiveContainer from './ResponsiveContainer';

const UserProfileComponent = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        // Fetch user profile data from the backend API
        fetch('/api/user-profile')
            .then(response => response.json())
            .then(data => setProfile(data))
            .catch(error => console.error('Error fetching user profile:', error));
    }, []);

    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <ResponsiveContainer>
            <header>
                <h1>{profile.name}</h1>
            </header>
            <main>
                <p>Email: {profile.email}</p>
                <p>Role: {profile.role}</p>
            </main>
        </ResponsiveContainer>
    );
};

export default UserProfileComponent;