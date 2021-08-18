import React from 'react';
import Header from './components/Header/Header';
import "./App.css";
import SignIn from './components/SignIn/SignIn';
import firebase from "firebase/app";
import "firebase/auth";
import {useAuthState} from "react-firebase-hooks/auth";
import Chat from "./components/Chat/Chat";
firebase.initializeApp({
  apiKey: "AIzaSyDi2DIhJOLuoDBuVm9NDv_0sSPfHbrOkt4",
    authDomain: "chat-app-a90aa.firebaseapp.com",
    projectId: "chat-app-a90aa",
    storageBucket: "chat-app-a90aa.appspot.com",
    messagingSenderId: "603737874471",
    appId: "1:603737874471:web:09579e2cb6db1b9e146e02",
    measurementId: "G-6M39ML781H"
});
const auth=firebase.auth()

function App() {
  const [user]=useAuthState(auth)
  return (
    <div className="App">
      <Header auth={auth} user={user}/>
      <section>
      {user?<Chat user={user}/>:<SignIn auth={auth}/>}
      </section>
      
      
    </div>
  );
}

export default App;
