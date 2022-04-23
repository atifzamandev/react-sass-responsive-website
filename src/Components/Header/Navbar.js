import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoWhite from '../../images/logo-white.png';
import logoBlack from '../../images/logo-black.png';

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  useEffect( ()=> {
    window.addEventListener("scroll", handleScroll);
  }, [])

  const  handleScroll = ()=> {
    if(window.scrollY > 120) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  }
  return (
    <div className={`navbar ${menu ? 'whiteBg' : 'transparent' }`}>
        <div className="container">
            <div className="navbar__content">
                <div className="navbar__left"><img src={menu ? logoBlack : logoWhite} alt="" /></div>
                <ul className="navbar__right">
                    <li><Link className='link' to="/">Home</Link></li>
                    <li><Link className='link' to="/services">Services</Link></li>
                    <li><Link className='link' to="/projects">Projects</Link></li>
                    <li><Link className='link' to='/aboutus'>About</Link></li>
                    <li><Link className='link' to="/contact">Contact</Link></li>
                </ul>
            </div>


        </div>
    </div>
  )
}

export default Navbar