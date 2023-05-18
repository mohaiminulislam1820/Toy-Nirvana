import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../firebase-config/firebase-config'
import { useLocation } from 'react-router-dom';

export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {
    
    const [user,setUser]=useState(null);

    const [loading,setLoading]=useState(true);

    const currentLocation=useLocation();
    
    useEffect(()=>{
        if(currentLocation.pathname=='/')
            document.title="ToyNirvana | Home"
        else{
            const title=currentLocation.pathname.split('/')[1];
            document.title="ToyNirvana | "+title[0].toUpperCase()+title.slice(1);
        }
        
    },[currentLocation.pathname])

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
        user,loading,setLoading,signInWithEmail,signUpWithEmail,signInWithGoogle,signOutUser,currentLocation
    };


    return (
        <AuthContext.Provider value={contexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;