import {
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
  
  import axios from "axios";
  import PropTypes from "prop-types";
  import { createContext, useEffect, useState } from "react";
  import auth from "../Firebase/firebase.config";
  
  export const AuthContext = createContext(null);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  
  const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    // Creating The Function Of The USER
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    // Login Function
    const logIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    // Google SignIn
    const googleSignIn = () => {
      // setLoading(true);
      return signInWithPopup(auth, googleProvider);
    };
  
    //   Github Signin
    const gitHubSignIn = () => {
      setLoading(true);
      return signInWithPopup(auth, gitHubProvider);
    };
  
    // Logout Function
    const logOut = () => {
      setLoading(true);
      return signOut(auth);
    };
  
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log("User in the auth state changed ==>", currentUser);
        const userEmail = currentUser?.email || user?.email;
        const loggedUser = {email : userEmail}
        setUser(currentUser);
        setLoading(false);
        // If user exist thn making the token
        if (currentUser){
          
          axios.post('http://localhost:5174/jwt',loggedUser, {withCredentials : true})
          .then(res=>{
            console.log('Token Response ==>',res.data)
          })
        }
        else{
          axios.post('http://localhost:5174/logout', loggedUser,{
            withCredentials : true
          })
          .then(res=>{
            console.log(res.data)
          })
        }
      });
      return () => {
        unSubscribe();
      };
    }, []);
  
    const authInfo = {
      user,
      createUser,
      logIn,
      logOut,
      loading,
      googleSignIn,
      gitHubSignIn,
    };
  
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
  };
  
  export default ContextProvider;
  ContextProvider.propTypes = {
    children: PropTypes.node,
  };