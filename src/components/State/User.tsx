import { useState } from 'react';

type AuthUser = { 
    name: string
    email:string
}
export const User =()=>{
    const [user, setUser]=useState< AuthUser | null>(null);
    const handleLogin=()=>{
        setUser({
            name:'precious',
            email:'precious@emaple.com'
        })
    }
    const handleLogout=()=>{
        setUser(null)
    }
    return(
        <div>
            <button onClick={handleLogin}>login</button>
            <button onClick={handleLogout}>logout</button>
            <div>user name is {user?.name}</div>
            <div>user email is {user?.email}</div>
        </div>

             // IF YOU CAN'T LOGOUT
    // const [user, setUser] = useState<AuthUser>({} as AuthUser);
    // const handleLogin = () => {
    //     setUser({
    //         name: 'precious',
    //         email: 'precious@emaple.com'
    //     })
    // }
    // return (
    //     <div>
    //         <button onClick={handleLogin}>login</button>
    //         <div>user name is {user.name}</div>
    //         <div>user email is {user.email}</div>
    //     </div>
    )
}