import React, { useState, useEffect } from 'react';

const GalleryPageComponent = () => {
    const [galleryItems, setGalleryItems] = useState([]);

    useEffect(() => {
        // Fetch gallery items data from the backend API
        fetch('/api/gallery')
            .then(response => response.json())
            .then(data => setGalleryItems(data))
            .catch(error => console.error('Error fetching gallery items:', error));
    }, []);

    return (
        <div className="gallery-page-container">
            <h1>Gallery</h1>
            <ul>
                {galleryItems.map(item => (
                    <li key={item.id}>
                        <img src={item.imageUrl} alt={item.title} />
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GalleryPageComponent;