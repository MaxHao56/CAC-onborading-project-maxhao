'use client'

import React from 'react';

import '../../styles/footer.css'


export default function Footer() {
  return (

<footer className="footer">
      <div className="container">
        <div className="row">
          <div className='footer-col'>
            <li>
              <img className='cs-img' src="CAC-logo.png" alt="CISD-logo" />
            </li>
          </div>

          <div className="footer-col">
            <ul>
              <h4>Contact Us</h4>
              <li><a href="/">Email: maxhaotz@gmail.com</a></li>             
            </ul>
          </div>

          <div className="footer-col">
            <h4> Subscribe Us</h4>
        
          </div>

          <div className='footer-col'>
            <p className='copyright'>&copy; 2024 by MaxHaoCAC.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}