import React, { useState, useEffect } from 'react';
import ResponsiveContainer from './ResponsiveContainer';

const LessonComponent = () => {
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        // Fetch lessons data from the backend API
        fetch('/api/lessons')
            .then(response => response.json())
            .then(data => setLessons(data))
            .catch(error => console.error('Error fetching lessons:', error));
    }, []);

    return (
        <ResponsiveContainer>
            <header>
                <h1>Lessons</h1>
            </header>
            <main>
                <ul>
                    {lessons.map(lesson => (
                        <li key={lesson.id}>
                            <h2>{lesson.title}</h2>
                            <p>{lesson.description}</p>
                        </li>
                    ))}
                </ul>
            </main>
        </ResponsiveContainer>
    );
};

export default LessonComponent;