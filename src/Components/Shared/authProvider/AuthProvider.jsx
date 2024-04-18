import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../../firebase/firebase.config';
import { GoogleAuthProvider, GithubAuthProvider, updateProfile } from "firebase/auth";
import PropTypes from 'prop-types'


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [doctors, setDoctors] = useState([])
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)




    useEffect(() => {
        fetch('/doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])



    // Login work
    const auth = getAuth(app)
    const rejisterUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }
    const provider = new GoogleAuthProvider();
    const googleLogin = () => {
        signInWithPopup(auth, provider)

    }
    const githubProvider = new GithubAuthProvider();
    const githubLogin = () => {
        signInWithPopup(auth, githubProvider)
    }

    const updateUser = (currentUser, name, photo) => {
        updateProfile(currentUser, {
            displayName: name, photoURL: photo
        })

    }
    useEffect(() => {
        const unsucribe = onAuthStateChanged(auth, (user) => {

            setUser(user)
            setLoading(false)

            return () => {
                unsucribe()
            }
        });
    }, [auth])

    const contextInfo = { doctors, rejisterUser, loginUser, user, logOutUser, loading, googleLogin, githubLogin, updateUser }

    return (
        <div>
            <AuthContext.Provider value={contextInfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.object.isRequired
}

export default AuthProvider;