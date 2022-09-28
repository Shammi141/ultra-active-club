import React from 'react';
import './Course.css'

const Course = (props) => {
    const {picture, time, age, title, about} = props.course;

    return (
        <div className='course text-start'>
            <img src= {picture} alt="" />
            <div className='mx-2'>
                <p className='course-name mb-2'>{title}</p>
                <p>{about}</p>
                <p className='mb-0'>For Age: {age}</p>
                <p className='mb-1'>Time Required: {time}</p>
            </div>
            <button className='btn btn-primary ms-2 btn-cart'>Add To List</button>
        </div>
    );
};

export default Course;