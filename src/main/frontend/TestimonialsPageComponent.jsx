import React, { useState, useEffect } from 'react';

const TestimonialsPageComponent = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        // Fetch testimonials data from the backend API
        fetch('/api/testimonials')
            .then(response => response.json())
            .then(data => setTestimonials(data))
            .catch(error => console.error('Error fetching testimonials:', error));
    }, []);

    return (
        <div className="testimonials-page-container">
            <h1>Testimonials</h1>
            <ul>
                {testimonials.map(testimonial => (
                    <li key={testimonial.id}>
                        <blockquote>{testimonial.message}</blockquote>
                        <p>- {testimonial.author}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TestimonialsPageComponent;