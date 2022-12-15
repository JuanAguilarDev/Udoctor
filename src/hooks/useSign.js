import React, { useState, useEffect } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { firebase } from '../helpers/firebase';
const { auth } = firebase();


export const useSign = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsuscribe = auth.onAuthStateChanged(user => {
            setUser(user);
        });
        console.log(user);
        return unsuscribe;
    }, []);

    const signUp = (state) => {
        createUserWithEmailAndPassword(auth, state.email, state.password)
            .then((userCredential) => {
                console.log('Registrado con exito. ', userCredential.user);
            })
            .catch( error => {
                throw new Error(error.message)
            })
    }

    return {
        signUp,
        user
    }
}
