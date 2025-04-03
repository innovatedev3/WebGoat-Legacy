import React, { useState, useEffect } from 'react';

const BlogPageComponent = () => {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        // Fetch blog posts data from the backend API
        fetch('/api/blog-posts')
            .then(response => response.json())
            .then(data => setBlogPosts(data))
            .catch(error => console.error('Error fetching blog posts:', error));
    }, []);

    return (
        <div className="blog-page-container">
            <h1>Blog</h1>
            <ul>
                {blogPosts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogPageComponent;