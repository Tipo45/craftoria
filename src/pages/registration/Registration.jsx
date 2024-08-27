// import { useState } from "react";
import React from "react";
import { FaUserAlt, FaLock, FaArrowLeft } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import "../login/Login.css";

const Regform = () => {
  // const [firstname, setFirstname] = useState('');
  // const [lastname, setLastname] = useState('');
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmpassword, setConfirmPassword] = useState('');
  // const [errors, setErrors] = useState({ firstname: '', lastname: '', username: '', password: '', confirmpassword: '' });

  // const validateForm = () => {
  //     let valid = true;
  //     let errors = { firstname: '', secondname: '', username: '', password: '', confirmpassword: '' };

  //     if (firstname.length === 0) {
  //         errors.firstname = 'Firstname is required.';
  //         valid = false;
  //     } else if (firstname.length > 0 && firstname.length < 3) {
  //         errors.firstname = 'Firstname must be at least 3 characters.';
  //         valid = false;
  //     } else {
  //         setFirstname(capitalizeName(firstname));
  //     }

  //     if (lastname.length === 0) {
  //         errors.lastname = 'Lastname is required.';
  //         valid = false;
  //     } else if (lastname.length > 0 && lastname.length < 3) {
  //         errors.lastname = 'Lastname must be at least 3 characters.';
  //         valid = false;
  //     } else {
  //         setFirstname(capitalizeName(lastname));
  //     }

  //     if (username.length === 0) {
  //         errors.username = 'Username is required.';
  //         valid = false;
  //     } else if (username.length > 0 && username.length < 4) {
  //         errors.username = 'Username must be at least 4 characters.';
  //         valid = false;
  //     }

  //     if (password.length === 0) {
  //         errors.password = 'Password is required.';
  //         valid = false;
  //     } else if (password.length > 0 && password.length < 8) {
  //         errors.password = 'Password must be at least 8 characters.';
  //         valid = false;
  //     }

  //     if (confirmpassword !== password) {
  //         errors.confirmpassword = "Password do not match.";
  //         valid= false;
  //     }

  //     if (valid) {
  //         setErrors({ firstname: '', lastname: '', username: '', password: '', confirmpassword: '' });
  //     } else {
  //         setErrors(errors);
  //     }

  //     return valid;
  // };

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (validateForm()) {
  // Perform the actual form submission, e.g., API call
  // console.log('Form submitted with:', { firstname, lastname, username, password });
  // Here you might handle success/failure responses from an API call
  //     }
  // };

  // const capitalizeName = (name) => {
  //     return name
  //         .split(' ')
  //         .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  //         .join(' ');
  // };

  return (
    <>
      <div className="directions">
        <span>
          <Link to="/login"><FaArrowLeft /></Link>
        </span>
      </div>
      <div className="wrapper">
        <form action="#">
          <h1>Client Registration</h1>

          <div className="names">
            <div className="input-box">
              <MdDriveFileRenameOutline className="icon" />
              <input type="text" placeholder="Firstname" />
            </div>

            <div className="input-box">
              <MdDriveFileRenameOutline className="icon" />
              <input type="text" placeholder="Lastname" />
            </div>
          </div>

          <div className="input-box">
            <FaUserAlt className="icon" />
            <input type="text" placeholder="Username" maxLength="10" />
          </div>

          <div className="input-box">
            <FaLock className="icon" />
            <input type="password" placeholder="Password" minLength="8" />
          </div>

          <div className="input-box">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder=" Confirm Password"
              minLength="8"
            />
          </div>

          <Link to="/client/activepage"><button type="submit" className="btn">
            Register
          </button></Link>
          <div className="register-link">
            <p>
              Already have an account?<Link to="/login"> Sign In</Link>
            </p>
          </div>
          <div className="art-reg">
            <span>
              Are you an artisan?,
              <Link to="/artisanregistration">click here</Link> to register
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Regform;
