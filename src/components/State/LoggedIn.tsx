import React, {useState}from 'react';
export const LoggedIn =()=>{
    const [isLoggedIn, setIsLoggedIn]=useState(false)
    const handleLogin=()=>{
        setIsLoggedIn(true)
    }
    const handleLoginout =()=>{
        setIsLoggedIn(false)
    }
    
    return(
        <div>
            <button onClick={handleLogin}>Login </button>
            <button onClick={handleLoginout}>Logout</button>
            <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
        </div>
    )
}