import React, { useState, useEffect } from 'react';

const EventsPageComponent = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Fetch events data from the backend API
        fetch('/api/events')
            .then(response => response.json())
            .then(data => setEvents(data))
            .catch(error => console.error('Error fetching events:', error));
    }, []);

    return (
        <div className="events-page-container">
            <h1>Events</h1>
            <ul>
                {events.map(event => (
                    <li key={event.id}>
                        <h2>{event.title}</h2>
                        <p>{event.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventsPageComponent;