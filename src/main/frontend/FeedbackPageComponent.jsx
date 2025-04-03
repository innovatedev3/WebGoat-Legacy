import React, { useState, useEffect } from 'react';

const FeedbackPageComponent = () => {
    const [feedbackList, setFeedbackList] = useState([]);

    useEffect(() => {
        // Fetch feedback data from the backend API
        fetch('/api/feedback')
            .then(response => response.json())
            .then(data => setFeedbackList(data))
            .catch(error => console.error('Error fetching feedback:', error));
    }, []);

    return (
        <div className="feedback-page-container">
            <h1>Feedback</h1>
            <ul>
                {feedbackList.map(feedback => (
                    <li key={feedback.id}>
                        <h2>{feedback.user}</h2>
                        <p>{feedback.comment}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FeedbackPageComponent;