import React from 'react';
import TextField from '@mui/material/TextField';
import Header from './Header';
import  Button  from '@mui/material/Button';

export default function Contact() {

  return (
    <div className="contact mt-5">
      <div className="container py-5">
        <div className="row py-5">
          <h1 className='fw-bold text-center'>CONTACT SECTION</h1>
          <Header bgColor={'#2C3E50'} />
        </div>
        
        <div className="row justify-content-center ">
          <form action="" className="form col-12 col-md-6 mt-5 d-flex flex-column gap-3">
            <TextField label="Name" className='form-control input' type='text' />
            <TextField label="Age" className='form-control' type='number' />
            <TextField label="Email" className='form-control' type='email' />
            <TextField label="Password" className='form-control' type='password' />
            <Button variant="contained" className='bg-main d-block me-auto py-2'>Send A Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
