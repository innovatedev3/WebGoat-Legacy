import React, { useState, useEffect } from 'react';

const LessonDetailsComponent = () => {
    const [lessonDetails, setLessonDetails] = useState(null);

    useEffect(() => {
        // Fetch lesson details from the backend API
        fetch('/api/lesson-details')
            .then(response => response.json())
            .then(data => setLessonDetails(data))
            .catch(error => console.error('Error fetching lesson details:', error));
    }, []);

    if (!lessonDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="lesson-details-container">
            <h1>{lessonDetails.title}</h1>
            <p>{lessonDetails.description}</p>
            <div>{lessonDetails.content}</div>
        </div>
    );
};

export default LessonDetailsComponent;