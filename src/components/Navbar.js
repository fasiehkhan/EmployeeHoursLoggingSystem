import React, {useState} from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div>
        <nav className="navbar">
            <div class="navbar-container">
                <Link to="/" className="navbar-logo"> 
                EHLS
                </Link>

            </div>
        </nav>
    </div>
  )
}

export default Navbar