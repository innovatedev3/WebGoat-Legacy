import React, { useState, useEffect } from 'react';

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
        <div className="settings-page-container">
            <h1>Settings</h1>
            <ul>
                {settings.map(setting => (
                    <li key={setting.id}>
                        <h2>{setting.name}</h2>
                        <p>{setting.value}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SettingsPageComponent;