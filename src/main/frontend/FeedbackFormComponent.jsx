import React, { useState, useEffect } from 'react';

const FeedbackFormComponent = () => {
    const [feedback, setFeedback] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit feedback to the backend API
        fetch('/api/submit-feedback', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ feedback })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to submit feedback');
                }
                return response.json();
            })
            .then(() => {
                setSuccessMessage('Feedback submitted successfully!');
                setFeedback('');
            })
            .catch(error => console.error('Error submitting feedback:', error));
    };

    return (
        <div className="feedback-form-container">
            <h1>Submit Feedback</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Enter your feedback here..."
                />
                <button type="submit">Submit</button>
            </form>
            {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
    );
};

export default FeedbackFormComponent;