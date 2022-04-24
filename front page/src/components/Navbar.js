import React from 'react'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div><nav className="navbar navbar-expand-lg navbar-light shadow">
    <div className="container">
      <NavLink className="navbar-brand fw-bolder fg-4 mx-auto" to="/">Navbar</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/About">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Services">Services</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Contact">Contact</NavLink>
          </li>
          
        </ul>
        <NavLink className="btn btn-outline-primary ms-auto px-4 rounded-pill" to="/Login">
            <i className="fa fa-sign-in me-2">  Login</i></NavLink>
        <NavLink className="btn btn-outline-primary ms-2 px-4 rounded-pill" to="/register"> <i className="fa fa-user-plus me-2">  Register</i></NavLink>
        <NavLink className="btn btn-outline-primary ms-2 px-4 rounded-pill" to="/dashboard"> <i className="fa fa-user-plus me-2"> Dashboard</i></NavLink>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar