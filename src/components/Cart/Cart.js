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
        <div className='sticky-top pt-2 pb-4'>
            <h5 className='mt-3'>Add A Break</h5>
            <div className='add-a-break'>
                <button>10M</button>
                <button>20M</button>
                <button>25M</button>
                <button>30M</button>
            </div>
            <h5 className='mt-5'>Practice Details</h5>
            <p className='text-start ps-2 add-a-break'>Exercise Time: {totalTime} Hours</p>
            <p className='text-start ps-2 add-a-break'>Break Time: Mins</p>
            
            <button onClick={showToastMessage} className='btn btn-primary btn-lg mt-5'>Activity Completed</button><ToastContainer/>
            
        </div>
    );
};

export default Cart;