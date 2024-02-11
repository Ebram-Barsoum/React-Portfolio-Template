import React from 'react'
import Header from './Header';

export default function About() {
  return (
    <div className="about mt-5 d-flex justify-content-center align-items-center">
      <div className="container ">
        <div className="row  text-white justify-content-center ">
          <h1 className='text-center fw-bold'>ABOUT COMPONENT</h1>
          <Header bgColor='#fff'/>
          
          <div className="col-12 col-md-8 row mt-3 gy-4">
          <div className="col-12 col-md-6">
            Freelancer is a free bootstrap theme created by Route.
            The download includes the complete source files including HTML, CSS,
            and JavaScript as well as optional SASS stylesheets for easy customization.
          </div>
          <div className="col-12 col-md-6">
            Freelancer is a free bootstrap theme created by Route.
            The download includes the complete source files including HTML, CSS,
            and JavaScript as well as optional SASS stylesheets for easy customization.
          </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}
