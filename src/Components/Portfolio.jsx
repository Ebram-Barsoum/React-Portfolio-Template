import React, { useState } from 'react';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import Header from './Header';
import img1 from '../assets/poert1.png';
import img2 from '../assets/port2.png';
import img3 from '../assets/port3.png';

export default function Portfolio() {
  const [zoom, setZoom] = useState('');

  return (
    <div className="portfolio mt-5 py-5 position-relative ">
      <div className="container d-flex flex-column gap-3 py-5">
        <div className="row">
          <h1 className='text-center fw-bold'>PORTFOLIO COMPONENT</h1>
          <Header bgColor='#1A252F'/>
        </div>

        <div className="row gy-5">
          <div className="col-12 col-md-6 col-lg-4 px-4">
              <div className="content" onClick={()=>{setZoom(img1)}}>
                <img src={img1} alt="" className='w-100 rounded-2' />
                <div className="overlay rounded-2"><ZoomInIcon className='icon text-white'/></div>
              </div>      
          </div>

          <div className="col-12 col-md-6 col-lg-4 px-4">
             <div className="content" onClick={()=>{setZoom(img2)}}>
                <img src={img2} alt="" className='w-100 rounded-2' />
                <div className="overlay rounded-2"><ZoomInIcon className='icon text-white'/></div>
              </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 px-4">
              <div className="content" onClick={()=>{setZoom(img3)}}>
                <img src={img3} alt="" className='w-100 rounded-2' />
                <div className="overlay rounded-2"><ZoomInIcon className='icon text-white'/></div>
              </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 px-4">
              <div className="content" onClick={()=>{setZoom(img1)}}>
                <img src={img1} alt="" className='w-100 rounded-2' />
                <div className="overlay rounded-2"><ZoomInIcon className='icon text-white'/></div>
              </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 px-4">
              <div className="content" onClick={()=>{setZoom(img2)}}>
                <img src={img2} alt="" className='w-100 rounded-2' />
                <div className="overlay rounded-2"><ZoomInIcon className='icon text-white'/></div>
              </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 px-4">
              <div className="content" onClick={()=>{setZoom(img3)}}>
                <img src={img3} alt="" className='w-100 rounded-2' />
                <div className="overlay rounded-2"><ZoomInIcon className='icon text-white'/></div>
              </div>
          </div>
        </div>
      </div>

      {zoom &&
        <div className="zoom w-100 vh-100 position-fixed start-0 top-0 d-flex justify-content-center align-items-center " onClick={(e) => {
          (e.target.tagName !== 'IMG') && setZoom('');
        }}>
            <div className="row m-0 justify-content-center">
              <img src={zoom} alt="" className='col-12 col-md-8'/>
            </div>
      </div>}

    </div>
  )
}
