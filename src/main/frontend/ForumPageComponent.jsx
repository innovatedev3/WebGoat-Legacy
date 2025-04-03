import React, { useState, useEffect } from 'react';

const ForumPageComponent = () => {
    const [forumThreads, setForumThreads] = useState([]);

    useEffect(() => {
        // Fetch forum threads data from the backend API
        fetch('/api/forum-threads')
            .then(response => response.json())
            .then(data => setForumThreads(data))
            .catch(error => console.error('Error fetching forum threads:', error));
    }, []);

    return (
        <div className="forum-page-container">
            <h1>Forum</h1>
            <ul>
                {forumThreads.map(thread => (
                    <li key={thread.id}>
                        <h2>{thread.title}</h2>
                        <p>{thread.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ForumPageComponent;