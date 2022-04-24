import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                 <Link className="navbar-brand" >SAI CABLE</Link>
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                 <li className="nav-item">
                   <Link className="nav-link active" aria-current="page" to="/Register">Register</Link>
                 </li>
                 <li className="nav-item">
                 <Link className="nav-link active" aria-current="page" to="/Recharge">Recharge</Link>
                 </li>
                 <li className="nav-item">
                 <Link className="nav-link active" aria-current="page" to="/Custemor_Details">Custemor Details</Link>
                 </li>
                 <li className="nav-item">
                 <Link className="nav-link active" aria-current="page" to="/Recharge_details">Recharge Details</Link>
                 </li>
               </ul>

             </div>
           </div>
         </nav>
            
        </div>
        
    )
}

export default Navbar
