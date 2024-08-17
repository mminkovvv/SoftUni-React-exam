import "./NavBar.css";

import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/authContext.jsx";

export const NavBar = () => {
    const { isAuth, username } = useContext(AuthContext);

    return (
        <header className="header">
            <nav>
                <img src="/logo.jpg" className="logo" />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/exercises">Exercises</Link></li>
                    {!isAuth && (
                        <>
                            <li><Link to="login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </>
                    )}
                    {isAuth && (
                        <>
                            <li><Link to="/add-exercise">Add Exercise</Link></li>
                            <li><Link to="/logout">Logout</Link></li>
                        </>
                    )}
                </ul>
                {isAuth && (
                    <p className="user-username">Welcome {username}</p>
                )}
            </nav>
        </header>
    );
};
