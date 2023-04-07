import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <div className="navbar">
        <Link to='/register' className="navbar-link"><h1>Register</h1></Link>
        
        <Link to='/login' className="navbar-link"><h1>Login</h1></Link>
    </div>
  )
}

export default NavBar