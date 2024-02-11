import React from 'react'
import avatar from '../assets/avataaars.svg';
import Header from './Header';

export default function Home() {
    return (
        <div className="home mt-5">
            <div className="container py-5">
                <div className="row justify-content-center pt-5">
                    <div className="col-12 col-lg-6 text-center text-white">
                        <img src={avatar} alt="" className='w-50 avatar' />
                        <h2 className="fw-bold my-3">START FRAMEWORK</h2>
                        <Header bgColor='#fff' />
                        <p className=''>Graphic Artist - Web Designer - Illustrator</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
