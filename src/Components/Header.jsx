import React from 'react'
import StarIcon from '@mui/icons-material/Star';
export default function Header({bgColor}) {
  return (
      <div className='star d-flex justify-content-center align-items-center gap-3'>
          <div className="before" style={{backgroundColor:bgColor}}></div>
          <StarIcon className='fs-3'/>
          <div className="after" style={{backgroundColor:bgColor}}></div>
      </div>
  )
}
