import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollValue = window.scrollY;
            setScroll(scrollValue);
        }

        window.addEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <nav className={`navbar navbar-expand-lg bg-body-tertiary bg-danger fixed-top ${(scroll > 50) && 'py-3'}`}>
            <div className="container">
                <Link className="navbar-brand text-white fs-4 fw-bold" to=''>START FRAMEWORK</Link>
                <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <MenuIcon className='text-white fs-1'/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link text-white p-2 mx-3 fs-6 fw-bold" to='about'>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white p-2 mx-3 fs-6 fw-bold" to='portfolio'>Portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white p-2 mx-3 fs-6 fw-bold" to='contact'>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
