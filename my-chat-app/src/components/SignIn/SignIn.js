import React from 'react'
import Google from "../../assets/google.jpg";
import "./SignIn.css";
import firebase from 'firebase/app';

const SignIn = ({auth}) => {
    const SignInWithGoogle=e=>{
        e.preventDefault()
        const provider=new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
        <div>
            <p>Sign in to start chat..!!</p>
            <button className="signinbutton" onClick={SignInWithGoogle}>
                <img src={Google} alt=""></img>
                <span>Sign in with google</span>
            </button>
        </div>
    )
}

export default SignIn
