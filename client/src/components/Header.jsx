import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {

    return(
       <div className="Header_container">
        <div className="Nav_container">
           <nav className="navBar">
               <ul className="navList">
                <li className="navItems"><Link to="/Home">Home</Link></li>
                <li className="navItems"><Link to="/About">About</Link></li>
                <li className="navItems"><Link to="/References">References</Link></li>
                </ul>
            </nav>
        </div>

        <div className="Buttons_container">
            <Link to="/SignUp">
                <button className="signUpBtn">Sign Up!</button>
            </Link>

            <Link to="/SignIn">
                <button className="signInBtn">Sign In</button>
            </Link>
            
            </div>
        </div>
    )
}

export default Header