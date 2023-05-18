import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../firebase-config/firebase-config'

export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {
    
    const [user,setUser]=useState(null);

    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{

            setUser(currentUser);
            setLoading(false);
        });

        return ()=>unsubscribe();
    },[])

    const signUpWithEmail=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInWithEmail=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    
    const providerGoogle= new GoogleAuthProvider();
    const signInWithGoogle=()=>{
        return signInWithPopup(auth,providerGoogle);
    }

    const signOutUser=()=>{
        return signOut(auth);
    }

    const contexts={
        user,loading,setLoading,signInWithEmail,signUpWithEmail,signInWithGoogle
    };


    return (
        <AuthContext.Provider value={contexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;