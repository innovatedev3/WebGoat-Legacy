import React, { useState, useEffect } from 'react';

const FAQsPageComponent = () => {
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        // Fetch FAQs data from the backend API
        fetch('/api/faqs')
            .then(response => response.json())
            .then(data => setFaqs(data))
            .catch(error => console.error('Error fetching FAQs:', error));
    }, []);

    return (
        <div className="faqs-page-container">
            <h1>FAQs</h1>
            <ul>
                {faqs.map(faq => (
                    <li key={faq.id}>
                        <h2>{faq.question}</h2>
                        <p>{faq.answer}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FAQsPageComponent;