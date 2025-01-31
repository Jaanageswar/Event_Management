import React, { useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './Navbar.css';
import menu_open from '../../Assets/menu_open.svg';
import menu_close from '../../Assets/menu_close.svg';

const Navbar = () => {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = '0';
    menuRef.current.setAttribute("aria-hidden", "false");
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
    menuRef.current.setAttribute("aria-hidden", "true");
  };

  return (
    <nav className='navbar'>
      <div className='logo'><h1>Event Management</h1></div>
      <img onClick={openMenu} className="nav-mob-open" src={menu_open} alt="Open Menu" aria-label="Open Menu" />
      <ul ref={menuRef} className='nav-menu'>
        <img onClick={closeMenu} src={menu_close} alt="Close Menu" className="nav-mob-close" aria-label="Close Menu" />
        <li><Link to="/" className='nav-link' >Home</Link></li>
        <li><Link to="/booking" className='nav-link' >Booking</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
