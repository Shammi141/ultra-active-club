import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
        // for loading data 
    const [courses, setCourses] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);


    const handleAddToCart = (course) => {
        // console.log(course)  
        const newCart = [...cart, course];
        setCart(newCart);
    }

    return (
        <div className='courses-container'>
            <div className="course-container">
                {
                    courses.map(course => <Course 
                        key={course.id}
                        course = {course}
                        handleAddToCart={handleAddToCart}
                        ></Course>)
                }
            </div>
            <div className="cart-container cart-position">
                
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Courses;