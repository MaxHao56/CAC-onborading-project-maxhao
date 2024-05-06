import React from 'react';
import '../../styles/header.css';



const Header = () => {
  return (
    <header className="Header">
        
    <div className='CAC_max'>
        <a href='/'>
            <img src="/CAC-logo.png" alt="CAC-max" className='CAC_img' />
        </a>

    </div>  
    
           
    <nav className="Navigation">
        <ul>

            <li><a href="/home">Home</a></li>
            <li className="dropdown">
                <a href="selection">Selection</a>
                <ul className="dropdown-menu">
                    <li><a href="/creation">Creation</a></li>
                    <li><a href="/delete">Update</a></li>
                    <li><a href="/update">Delete</a></li>
                </ul>
            </li>
            <li><a href="/pageview">View</a></li>
            <li><a href="/login">Login</a></li>
        </ul>
        
    </nav>

</header>
  )
}

export default Header