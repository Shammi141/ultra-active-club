import React from 'react';
import './Queries.css'

const Queries = () => {
    return (
        <div className='blog-position'>
            <h2 className='mt-5 mb-3 text-primary'>-Knowledge To Know-</h2>

            <div className='container text-start ms-5 mb-4'>
                <div className='blog-design'>
                    <p className='mb-0'><span className='fw-bold'>Question-1: </span> How does React works?</p>
                    <small><samp className='fw-bold fs-6'>Answer: </samp><br /> React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</small>
                </div>

                <div className='blog-design'>
                    <p className='mb-0'><span className='fw-bold'>Question-2: </span> Difference between props & state. </p>
                    <small><samp className='fw-bold fs-6'>Answer: </samp><br /> i. In props data is passed from one component to another. In state data is passed within the component only. <br />
                        ii. Props are immutable. But state is mutable</small>
                </div>

                <div className='blog-design'>
                    <p className='mb-0'><span className='fw-bold'>Question-3: </span> What are the uses of useEffect except loading data from API?</p>
                    <small><samp className='fw-bold fs-6'>Answer: </samp>UseEffect manually change DOM in React, set subscription except of data loading from API.</small>
                </div>
            </div>
        </div>
    );
};

export default Queries;