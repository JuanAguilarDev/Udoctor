import React, { useContext, createContext, useState } from 'react'
import { firebase } from '../helpers/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
const { auth } = firebase();

const AuthContext = createContext(); 

export function useAuth() {
    return useContext(AuthContext);
}


export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);

    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        
    }

    
    const value = {
        currentUser
    }


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
