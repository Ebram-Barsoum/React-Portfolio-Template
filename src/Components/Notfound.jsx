import React from 'react'
import notFoundImage from '../assets/404-error.jpg';

export default function Notfound() {
    return (
        <div className="not-found mt-5 py-5">
            <div className="container">
                <div className="row justify-content-center ">
                   <img src={notFoundImage} alt="" className='col-12 col-md-6'/>
                </div>
            </div>
        </div>
    );
}
