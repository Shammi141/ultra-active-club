import React from 'react';
import './Cart.css'
//for toast
import { ToastContainer, toast } from 'react-toastify';

const Cart = ({cart}) => {
    let totalTime = 0;
    for(const course of cart){
        totalTime = totalTime + course.time;
    }
    
    const showToastMessage = () => {
        toast.success('Congratulation! You have completed your activity.', {
            position: toast.POSITION.TOP_RIGHT
        });
    };
    return (
        <div>
            <h5 className='mt-2 mb-1'>Add A Break</h5>
            <div>
                <button className='m-1 rounded hover-effect'>10M</button>
                <button className='m-1 rounded hover-effect'>20M</button>
                <button className='m-1 rounded hover-effect'>25M</button>
                <button className='m-1 rounded hover-effect'>30M</button>
            </div>
            <h5 className='mt-3'>Practice Details</h5>
            <p className='text-start ps-2 time-field'>Exercise Time: {totalTime} Hours</p>
            <p className='text-start ps-2 time-field'>Break Time: Mins</p>
            
            <button onClick={showToastMessage} className='btn btn-primary btn-lg mt-3'>Activity Completed</button><ToastContainer/>
            
        </div>
    );
};

export default Cart;