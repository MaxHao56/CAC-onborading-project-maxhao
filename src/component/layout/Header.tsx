import React, {useEffect, useState} from 'react';
import '../../styles/header.css';
import axios from 'axios';



// function logout(){}

function logout(){
    const sessionData = sessionStorage.getItem('sessionData')
    axios.post('http://127.0.0.1:8000/api/logout', sessionData)
    .then((response)=>{
        console.log(response)
        sessionStorage.removeItem('sessionData')
        window.location.reload()
    },(error)=>{
        console.log(error)
    })
    
}

//function getuserinfo(){}



export default function Header(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);



    useEffect (()=>{
        const sessionData = sessionStorage.getItem('sessionData')
        if (sessionData){
            setIsLoggedIn(true);
        }
    },[])


  return (
    <header className="Header">
        
    <div className='CAC_max'>
        <a href='/'>
            <img src="/CAC-logo.png" alt="CAC-max" className='CAC_img' />
        </a>

    </div>  



    
           
    <nav className="Navigation">
        
        <ul>
        
        {isLoggedIn ? (
            
            <>
            <button onClick={logout}>Logout</button>
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
            </>
   
            ) : null}

            
            <li><a href={isLoggedIn ? '/' : "/login"}>{isLoggedIn ? null : "Login"}</a></li>

           
            
        
        
        
            
        </ul>
        
    </nav>

</header>
  )};

