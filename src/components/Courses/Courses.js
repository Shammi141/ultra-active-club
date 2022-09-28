import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
        // for loading data 
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    return (
        <div className='courses-container'>
            <div className="course-container">
                {
                    courses.map(course => <Course 
                        key={course.id}
                        course = {course}
                        ></Course>)
                }
            </div>
            <div className="cart-container">
                <h4>Calcuation</h4>
            </div>
        </div>
    );
};

export default Courses;