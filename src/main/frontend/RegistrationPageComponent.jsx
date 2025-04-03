import React, { useState, useEffect } from 'react';
import ResponsiveContainer from './ResponsiveContainer';

const RegistrationPageComponent = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegistration = (e) => {
        e.preventDefault();
        // Perform registration API call
        fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Registration failed');
                }
                return response.json();
            })
            .then(data => {
                console.log('Registration successful:', data);
                setError('');
                setSuccess('Registration successful!');
            })
            .catch(err => {
                setError(err.message);
                setSuccess('');
            });
    };

    return (
        <ResponsiveContainer>
            <header>
                <h1>Register</h1>
            </header>
            <main>
                <form onSubmit={handleRegistration}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    {success && <p className="success-message">{success}</p>}
                    <button type="submit">Register</button>
                </form>
            </main>
        </ResponsiveContainer>
    );
};

export default RegistrationPageComponent;