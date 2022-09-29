import { faSchool, faPerson } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='text-start ms-2'>
            <div className='d-flex developer-info mb-0'>
                <div className='d-flex header-style text-center'>
                    <FontAwesomeIcon className='icon-style' icon={faSchool}></FontAwesomeIcon>
                    <h2 className='text-primary my-3'>For Fast Learner - FFL</h2>
                </div>
                <div className='d-flex header-style'>
                    <FontAwesomeIcon className='profile-icon' icon={faPerson}></FontAwesomeIcon>
                    <div className=''>
                        <p className='my-0 fw-semibold'>Shammi Akter</p>
                        <small>Junior Developer</small>
                    </div>
                </div>
            </div>
            <h5 className='mb-5 fw-bold'>Study Like A Pro-Learner</h5>
        </div>
    );
};

export default Header;