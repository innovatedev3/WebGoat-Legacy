import React, { useState, useEffect } from 'react';

const AnnouncementsPageComponent = () => {
    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        // Fetch announcements data from the backend API
        fetch('/api/announcements')
            .then(response => response.json())
            .then(data => setAnnouncements(data))
            .catch(error => console.error('Error fetching announcements:', error));
    }, []);

    return (
        <div className="announcements-page-container">
            <h1>Announcements</h1>
            <ul>
                {announcements.map(announcement => (
                    <li key={announcement.id}>
                        <h2>{announcement.title}</h2>
                        <p>{announcement.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AnnouncementsPageComponent;