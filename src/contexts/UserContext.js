import React, { createContext, useState } from 'react';


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        token: localStorage.getItem('token'),
        companyName: localStorage.getItem('companyName'),
        email: localStorage.getItem('email'),
        firstName: localStorage.getItem('firstName'),
        lastName: localStorage.getItem('lastName'),
        ID: localStorage.getItem('ID'),
    });
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
} 