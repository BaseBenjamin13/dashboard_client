import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <div className="navbar">
        <Link to='/register' className="navbar-link"><h1>Register</h1></Link>
        
        <Link to='/login' className="navbar-link"><h1>Login</h1></Link>
        
        <Link to='/' className="navbar-link dashboard-link"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABiElEQVR4nO2YvUrEQBRGjyLa+IONhSDYaae1rFjY6BNoYWVha+kr2FruGwiC2FiKsKsiIljZaSsiKAiK4KJXAhOJYUMmu0lmst4PDgQ2hO9kMjdhQWOVaeDUEBxXMqvAMyCG4HiFCqUP2AG+IhIh38Au0I/nGQUO2wjEOQbG8TTzwL2FRMgdMBe7xlmb85plSmwA7xkkQj6Azch1JIHCMwTsdSAQpw4MuhKZAi5zkAi5cCGyBDzmKJFGIaN1G2iVKCF5S4wAByULSN4is8CtIwnJS2IdeHMoIcBaNwID5nNCPKFuRnSmTAAnHpSXNm/5SVuJGvDgQWlJ4AlYTpPYAj49KCsptMwXdvA6+JNhYN+DgpKRI2AsKnJlfnj1oJxYEnYNuv/mHLgBZjwoKJYEXa+BRtI+kYqQGtcFRUVicX2nRVckFvnvK9JpVKToO/RiifciUtD5oiLoiqCPFrpHyptaC+b/gMpPrRqw2Asiou8RdEXQRwvdI+jU6vnx26yASMNGRKOh+/wADJv/Tm9+KRUAAAAASUVORK5CYII="/><h1>Dashboard</h1></Link>
    
    </div>
  )
}

export default NavBar