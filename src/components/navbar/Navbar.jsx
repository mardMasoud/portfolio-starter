


import React from 'react'

import './navbar.css'

function Navbar() {
  return (
    <nav>
        <div className="left-nav">
          <div className='name-nav'>Andrew</div>
          <span>toggle</span>
        </div>

        <div className="right-nav">
          <div className="list-nav">
            <ul>
             <li>Home</li>
             <li>Services</li>
             <li>Experience</li>
             <li>Protfolio</li>
             <li>Testimonial</li>
            </ul> 
          </div>
          <button className="button">Contact</button>
        </div>
    </nav>
        
    
  )
}

export default Navbar