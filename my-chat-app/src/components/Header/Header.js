import React from 'react'
import Logo from "../../assets/sree.jpg"
import SignOut from "../../assets/signout.jpg"
import Background from "../../assets/background.jpg";
import "./Header.css";


function Header({auth,user}) {
    return (
        <header>
            <img src={Logo} alt="" className="logo"></img>
           {user &&<img src={SignOut} alt="" onClick={()=>auth.signOut()}></img>}
            
            
        </header>
    )
}

export default Header


