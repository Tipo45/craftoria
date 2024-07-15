import { useState } from "react";
import React from 'react';
import { FaUserAlt, FaLock } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { Link } from "react-router-dom";



const Regform = () => {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({ firstname: '', lastname: '', username: '', password: '', confirmpassword: '' });

    const validateForm = () => {
        let valid = true;
        let errors = { firstname: '', secondname: '', username: '', password: '', confirmpassword: '' };

        if (firstname.length === 0) {
            errors.firstname = 'Firstname is required.';
            valid = false;
        } else if (firstname.length > 0 && firstname.length < 3) {
            errors.firstname = 'Firstname must be at least 3 characters.';
            valid = false;
        } else {
            setFirstname(capitalizeName(firstname));
        }

        if (lastname.length === 0) {
            errors.lastname = 'Lastname is required.';
            valid = false;
        } else if (lastname.length > 0 && lastname.length < 3) {
            errors.lastname = 'Lastname must be at least 3 characters.';
            valid = false;
        } else {
            setFirstname(capitalizeName(lastname));
        }

        if (username.length === 0) {
            errors.username = 'Username is required.';
            valid = false;
        } else if (username.length > 0 && username.length < 4) {
            errors.username = 'Username must be at least 4 characters.';
            valid = false;
        }

        
        if (password.length === 0) {
            errors.password = 'Password is required.';
            valid = false;
        } else if (password.length > 0 && password.length < 8) {
            errors.password = 'Password must be at least 8 characters.';
            valid = false;
        }


        if (confirmpassword !== password) {
            errors.confirmpassword = "Password do not match.";
            valid= false;
        }


        if (valid) {
            setErrors({ firstname: '', lastname: '', username: '', password: '', confirmpassword: '' });
        } else {
            setErrors(errors);
        }

        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Perform the actual form submission, e.g., API call
            console.log('Form submitted with:', { firstname, lastname, username, password });
            // Here you might handle success/failure responses from an API call
        }
    };

    const capitalizeName = (name) => {
        return name
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    };

    return (
        <div className="wrapper">
            <form action="#" onSubmit={handleSubmit}>
                <h1>Registration</h1>

                <div className="input-box">
                <MdDriveFileRenameOutline className="icon" />
                <input type="text" placeholder="Firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                {errors.firstname && <span className="error-message">{errors.firstname}</span>}
                </div>

                <div className="input-box">
                <MdDriveFileRenameOutline className="icon" />
                <input type="text" placeholder="Lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                {errors.lastname && <span className="error-message">{errors.lastname}</span>}
                </div>

                <div className="input-box">
                <FaUserAlt className="icon" />
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} maxLength="10" />
                    {errors.username && <span className="error-message">{errors.username}</span>}
                </div>

                <div className="input-box">
                <FaLock className="icon" />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} minLength="8" />
                    {errors.password && <span className="error-message">{errors.password}</span>}
                </div>

                <div className="input-box">
                <FaLock className="icon" />
                    <input type="password" placeholder=" Confirm Password" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} minLength="8" />
                    {errors.confirmpassword && <span className="error-message">{errors.confirmpassword}</span>}
                </div>

                <button type="submit" className="btn">Register</button>
                <div className="register-link">
                    <p>Already have an account?<Link to="/">Sign In</Link></p>
                </div>


            </form>
        </div>
    )
}

export default Regform;