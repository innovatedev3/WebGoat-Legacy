import React, { useState, useEffect } from 'react';
import ResponsiveContainer from './ResponsiveContainer';

const SettingsPageComponent = () => {
    const [settings, setSettings] = useState([]);

    useEffect(() => {
        // Fetch settings data from the backend API
        fetch('/api/settings')
            .then(response => response.json())
            .then(data => setSettings(data))
            .catch(error => console.error('Error fetching settings:', error));
    }, []);

    return (
        <ResponsiveContainer>
            <header>
                <h1>Settings</h1>
            </header>
            <main>
                <ul>
                    {settings.map(setting => (
                        <li key={setting.id}>
                            <h2>{setting.name}</h2>
                            <p>{setting.value}</p>
                        </li>
                    ))}
                </ul>
            </main>
        </ResponsiveContainer>
    );
};

export default SettingsPageComponent;