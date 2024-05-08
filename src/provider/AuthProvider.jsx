/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const Login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            const LoggedEmail =currentUser?.email ||  user?.email;
            const loggedUser = {email: LoggedEmail}
            setUser(currentUser)
            setLoading(false)
            // get token when currentUser have 
            if(currentUser){
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`,loggedUser, { withCredentials: true })
                .then()
            }
            else{
                axios.post(`${import.meta.env.VITE_API_URL}/logout`,loggedUser, { withCredentials: true })
                .then()
            }
            return () => {
                unsubscribe();
            }
        })
    }, [user])

    const authInfo = {
        user,
        loading,
        createUser,
        Login,
        logOut,
        setLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;