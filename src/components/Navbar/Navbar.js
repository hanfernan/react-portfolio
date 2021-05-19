import React, { useState } from "react";
import { Link } from "react-router-dom";
import Resume from '../../assets/Hannah_Fernanes_Martin_MERNStack_Res.pdf'
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  const [click, setClick] = useState(false);

  //reverses state of menu
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
              <Link to='/' className='nav-links'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-links'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/projects' className='nav-links'>
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-links'>
                Contact
              </Link>
            </li>
            <li className='nav-item'>
              <a href={Resume} target="_blank" className='nav-links'>
              <i class="fas fa-download"/>Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
