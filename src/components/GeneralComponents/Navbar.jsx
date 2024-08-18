import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../GeneralComponents/GeneralComponent.css";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <header>
                <div className="container">
                    <nav>
                        <div className="logo">
                            <Link className="nodeco" to="/"><h2>Service Konnect</h2></Link>
                        </div>
                        <ul className={isOpen ? "nav-link active" : "nav-link"}>
                            <li>
                                <Link className="nodeco" to="/">Home</Link>
                            </li>
                            <li>
                                <Link className="nodeco" to="/">About</Link>
                            </li>
                            <li>
                                <Link className="nodeco" to="/SkillandServices">Skills/Services</Link>
                            </li>
                            <li>
                                <Link className="nodeco" to="/login">Login</Link>
                            </li>
                        </ul>
                        <div className="icon" onClick={toggleMenu}>
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar;
