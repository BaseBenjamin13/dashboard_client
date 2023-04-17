import React, { createContext, useState } from 'react';


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        companyName: localStorage.getItem('companyName'),
        email: localStorage.getItem('email'),
        token: localStorage.getItem('token'),
    });
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
} 