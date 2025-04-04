import React, { useState, useEffect } from 'react';
import ResponsiveContainer from './ResponsiveContainer';

const NotificationsPageComponent = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        // Fetch notifications data from the backend API
        fetch('/api/notifications')
            .then(response => response.json())
            .then(data => setNotifications(data))
            .catch(error => console.error('Error fetching notifications:', error));
    }, []);

    return (
        <ResponsiveContainer>
            <header>
                <h1>Notifications</h1>
            </header>
            <main>
                <ul>
                    {notifications.map(notification => (
                        <li key={notification.id}>
                            <h2>{notification.title}</h2>
                            <p>{notification.message}</p>
                        </li>
                    ))}
                </ul>
            </main>
        </ResponsiveContainer>
    );
};

export default NotificationsPageComponent;