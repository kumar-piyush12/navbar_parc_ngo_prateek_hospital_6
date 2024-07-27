import React from 'react'

import './Navbar.css';
import { data } from '../../constants/';

const Feedback = () => (
  <div className='container'>
    <div className='navbar'>
      {data.logo.map((logo) => (
        <img src={logo.logo} id='prateek-logo' />
      ))}

      <div className='set'>
        <div className='phone-number'>
          <p id='phone-number'>+91-898-3462-213</p>
        </div>

        <div className='get-care-now'>
          <button id='get-care-now'>Get Care Now</button>
        </div>

        <div className='search'>
          <button id='search'>Search</button>
        </div>
      </div>
    </div>
  </div>
)

export default Feedback
