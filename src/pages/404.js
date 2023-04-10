import React from 'react'
import { Link } from 'react-router-dom';

function Page404() {
  return (
    <div className="page-404">
        <h1>Sorry...</h1>
        <br></br>
        <h1>Page not found</h1>
        <br></br>
        <Link to='/' className="navbar-link"><h1>Dashboard</h1></Link>
        <br></br>
    </div>
  )
}

export default Page404;