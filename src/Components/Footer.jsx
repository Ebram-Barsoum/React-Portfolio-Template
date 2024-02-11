import FacebookOutlineIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';

import React from 'react'

export default function Footer() {
    const date = new Date();
  return (
      <div className="footer">
         <div className="container py-5">
            <div className="row gy-4 justify-content-center ">
                  <div className="col-12 col-md-6 col-lg-4 px-3 text-center">
                      <div className="title fs-2"> LOCATION </div>
                      <p className='my-2'>2215 John Daniel Drive</p>
                      <p>Clark, MO 65243</p>
                  </div>
                  
                  <div className="col-12 col-md-6 col-lg-4 px-3 text-center">
                      <div className="title fs-2"> AROUND THE WEB </div>
                      
                      <ul className="socials list-unstyled d-flex justify-content-center gap-3 mt-2">
                          <li className='icon'><FacebookOutlineIcon /></li>
                          <li className='icon'><TwitterIcon /></li>
                          <li className='icon'><LinkedInIcon /></li>
                          <li className='icon'><LanguageIcon/></li>
                      </ul>
                  </div>

                  <div className="col-12 col-md-6 col-lg-4 px-3 text-center">
                      <div className="title fs-2"> ABOUT FREELANCER </div>
                      <p className='mt-2'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                  </div>
              </div>        
          </div>
          
          <div className="row m-0 copyRight py-3 justify-content-center flex-wrap px-2 text-center">CopyRight &copy; { date.getFullYear() } Implemented By Ebram Barsoum</div>
     </div>
  )
}
