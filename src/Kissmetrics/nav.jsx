import React from 'react'
import './nav.css'
import {FaChevronDown} from 'react-icons/fa'

const Nav = () => {
  return (
    <nav>

      <div className="logo">Logo Goes here</div>

      <div className="menu">
        <ul>
          <li><a href="#">Link 1 <FaChevronDown/></a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
          <li><a href="#">Link 4</a></li>
          <li><a href="#">Link 4 <FaChevronDown/></a></li>
          <li><a href="#">Link 4</a></li>
          <li><button className='btnBlue'>Request a demo</button></li>
          <li><button className='btnSignup'>SignUp</button></li>
        </ul>
        
        
      </div>
      
    </nav>
  )
}

export default Nav
