import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom'
function Navbar() {
    return (
   
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="#">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/About">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Contact">Contact</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="Login">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Signup">Registration</Link>
      </li>
    </ul>
 
  </div>
</nav>

    )
}

export default Navbar
