import React, { useState, useEffect } from 'react';

const NewsPageComponent = () => {
    const [newsArticles, setNewsArticles] = useState([]);

    useEffect(() => {
        // Fetch news articles from the backend API
        fetch('/api/news')
            .then(response => response.json())
            .then(data => setNewsArticles(data))
            .catch(error => console.error('Error fetching news articles:', error));
    }, []);

    return (
        <div className="news-page-container">
            <h1>News</h1>
            <ul>
                {newsArticles.map(article => (
                    <li key={article.id}>
                        <h2>{article.title}</h2>
                        <p>{article.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsPageComponent;