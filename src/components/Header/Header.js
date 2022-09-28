import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='text-start ms-2'>
            <div className='d-flex header-style'>
                <FontAwesomeIcon className='icon-style' icon={faSchool}></FontAwesomeIcon>
                <h2 className='text-primary my-3'>For First Learner - FFL</h2>
            </div>
            <h5 className='mb-5'>Click to Grab Your Courses</h5>
        </div>
    );
};

export default Header;