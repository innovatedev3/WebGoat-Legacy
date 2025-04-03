import React, { useState, useEffect } from 'react';

const CoursePageComponent = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // Fetch course data from the backend API
        fetch('/api/courses')
            .then(response => response.json())
            .then(data => setCourses(data))
            .catch(error => console.error('Error fetching courses:', error));
    }, []);

    return (
        <div className="course-page-container">
            <h1>Courses</h1>
            <ul>
                {courses.map(course => (
                    <li key={course.id}>
                        <h2>{course.title}</h2>
                        <p>{course.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CoursePageComponent;