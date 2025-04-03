import React, { useState, useEffect } from 'react';

const SitemapPageComponent = () => {
    const [sitemapLinks, setSitemapLinks] = useState([]);

    useEffect(() => {
        // Fetch sitemap links from the backend API
        fetch('/api/sitemap')
            .then(response => response.json())
            .then(data => setSitemapLinks(data))
            .catch(error => console.error('Error fetching sitemap links:', error));
    }, []);

    return (
        <div className="sitemap-page-container">
            <h1>Sitemap</h1>
            <ul>
                {sitemapLinks.map(link => (
                    <li key={link.id}>
                        <a href={link.url}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SitemapPageComponent;