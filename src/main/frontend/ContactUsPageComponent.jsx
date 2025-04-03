import React, { useState, useEffect } from 'react';

const ContactUsPageComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit contact form data to the backend API
        fetch('/api/contact-us', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to send message');
                }
                return response.json();
            })
            .then(() => {
                setSuccessMessage('Message sent successfully!');
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch(error => console.error('Error sending message:', error));
    };

    return (
        <div className="contact-us-page-container">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <button type="submit">Send</button>
            </form>
            {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
    );
};

export default ContactUsPageComponent;