import React, { useState } from "react";
import { Link } from "react-router-dom";
import Resume from '../../assets/Hannah_Fernandes-Martin_Resume23.pdf'
import "./style.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" onClick={closeMobileMenu} className="navbar-logo">
            HFM <i className='far fa-smile' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' onClick={closeMobileMenu} className='nav-links'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' onClick={closeMobileMenu} className='nav-links'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/projects' onClick={closeMobileMenu} className='nav-links'>
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' onClick={closeMobileMenu} className='nav-links'>
                Contact
              </Link>
            </li>
            <li className='nav-item'>
              <a href={Resume} target="_blank" rel="noreferrer" className='nav-links'>
              <i className="fas fa-download"/>Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
