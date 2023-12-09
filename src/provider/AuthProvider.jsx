import React, { createContext, useEffect, useState } from "react";
import auth from "../../firebase.config";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateEmail, updateProfile } from "firebase/auth"

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const baseURL = `https://electronix-backend-4fvbl61kn-mir-billadins-projects.vercel.app`;




  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };


  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }


  const updatingUser = (username, photo) => {
    console.log(user)
     setLoading(true);
     return updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: photo,
     })
  }


  const loggingWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        setLoading(false);
        
    })
    return () => {
        unsubscribe();
    }
  }, [])



  const authInfo = {
    user,
    createUser,
    signInUser,
    logOut,
    updatingUser,
    loggingWithGoogle,
    loading, 
    setLoading,
    baseURL,
  };

  


  return (
    <AuthContext.Provider value={authInfo} baseURL={baseURL}>
    {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;