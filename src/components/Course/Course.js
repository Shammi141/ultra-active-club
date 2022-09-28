import React from 'react';
import './Course.css'

const Course = (props) => {
    const {picture, time, title, about} = props.course;

    return (
        <div className='course-img'>
            <img src= {picture} alt="" />
        </div>
    );
};

export default Course;