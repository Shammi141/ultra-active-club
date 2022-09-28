import React from 'react';
import './Course.css'

const Course = ({course, handleAddToCart}) => {
    const {picture, time, age, title, about} = course;
    
    return (
        <div className='course text-start ms-2'>
            <img src= {picture} alt="" />
            <div className='mx-2'>
                <p className='course-name mb-2'>{title}</p>
                <p>{about}</p>
                <p className='mb-0'>For Age: {age}</p>
                <p className='mb-1'>Time Required: {time}</p>
            </div>
            <button onClick={() => handleAddToCart(course)} className='btn btn-primary ms-2 btn-cart'>Add To List</button>
        </div>
    );
};

export default Course;