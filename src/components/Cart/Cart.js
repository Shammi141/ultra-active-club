import './Cart.css'
//for toast
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { addFakeDataToLocalStorage } from '../../utilities/fakeDb';

const Cart = ({cart}) => {
    //for adding exercise time
    let totalTime = 0;
    for(const course of cart){
        totalTime = totalTime + course.time;
    }
    
    //for showing break time on ui
    const [breakTime, setBreakTime] =useState(0);

    useEffect(() => {
        let storedData = localStorage.getItem('break-time');
        storedData = JSON.parse(storedData);
        setBreakTime(storedData);
    }, []);

    const handleBreakTime = (time) => {
        addFakeDataToLocalStorage(time);
    }

    //for showing toast message
    const showToastMessage = () => {
        toast.success('Congratulation! You have completed your activity.', {
            position: toast.POSITION.TOP_RIGHT
        });
    };
    return (
        <div>
            <h5 className='mt-2 mb-1'>Add A Break</h5>
            <div>
                <button onClick={() => { setBreakTime(10); handleBreakTime(10)}} className='m-1 rounded hover-effect'>10M</button>
                <button onClick={() => { setBreakTime(20); handleBreakTime(20)}} className='m-1 rounded hover-effect'>20M</button>
                <button onClick={() => { setBreakTime(25); handleBreakTime(25)}} className='m-1 rounded hover-effect'>25M</button>
                <button onClick={() => { setBreakTime(30); handleBreakTime(30)}} className='m-1 rounded hover-effect'>30M</button>
            </div>
            <h5 className='mt-3'>Practice Details</h5>
            <p className='text-start ps-2 time-field'>Exercise Time: {totalTime} Hours</p>
            <p className='text-start ps-2 time-field break-time'>Break Time:{breakTime} Mins</p>
            
            <button onClick={showToastMessage} className='btn btn-primary btn-lg mt-3'>Activity Completed</button><ToastContainer/> 
        </div>
    );
};

export default Cart;