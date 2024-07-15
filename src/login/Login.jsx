import { useState } from "react";
import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";


const Logform = () => {

    return (
        <div className="wrapper">
            <form action="#">
                <h1>Login</h1>
                <div className="input-box">
                <FaUserAlt />
                    <input type="text" placeholder="Username" required />
                </div>
                <div className="input-box">
                <FaLock />
                    <input type="password" placeholder="Password" required />
                </div>
                <div className="forgot-pass">
                    <a href="#">Forgot Password</a>
                </div>
                <button type="submit" className="btn">Login</button>
                <div className="register-link">
                    <p>Don't have an account?<a href="#">Register Here</a></p>
                </div>
            </form>
        </div>
    )
}

export default Logform;