import React from "react";
import "../../components/ArtisanUserProfile/Artisansidebar.css";
import { Link } from "react-router-dom";
import { GrUserSettings } from "react-icons/gr";
import { IoEyeOutline, IoPower } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { BiDetail } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";

const Artisansidebar = ({ activepage }) => {
  return (
    <div className="artisansidebar">
      {activepage === "artisanaccountsettings" ? (
        <div className="s4">
          <FaRegUser />
          <span>Account Information</span>
        </div>
      ) : (
        <Link to="/artisan/artisanaccountsettings" className="nodeco">
          <div className="s3">
            <FaRegUser className="text-dark" />
            <span className="text-dark">Account Information</span>
          </div>
        </Link>
      )}

      {activepage === "artisanaccountsettings" ? (
        <div className="s4">
          <GrUserSettings />
          <span>Account Settings</span>
        </div>
      ) : (
        <Link to="/artisan/artisanaccountsettings" className="nodeco">
          <div className="s3">
            <GrUserSettings className="text-info" />
            <span className="text-dark">Account Settings</span>
          </div>
        </Link>
      )}

      {activepage === "artisanchangepassword" ? (
        <div className="s4">
          <IoEyeOutline />
          <span>Change Password</span>
        </div>
      ) : (
        <Link to="/artisan/artisanchangepassword" className="nodeco">
          <div className="s3">
            <IoEyeOutline className="text-secondary" />
            <span className="text-dark">Change Password</span>
          </div>
        </Link>
      )}

      {activepage === "artisanportfolio" ? (
        <div className="s4">
          <BiDetail />
          <span>My Portfolio</span>
        </div>
      ) : (
        <Link to="/artisan/artisanportfolio" className="nodeco">
          <div className="s3">
            <BiDetail className="text-primary" />
            <span className="text-dark">My Portfolio</span>
          </div>
        </Link>
      )}

      {activepage === "artisanaddress" ? (
        <div className="s4">
          <CiLocationOn />
          <span>Address</span>
        </div>
      ) : (
        <Link to="/artisan/artisanaddress" className="nodeco">
          <div className="s3">
            <CiLocationOn className="text-success" />
            <span className="text-dark">Address</span>
          </div>
        </Link>
      )}

      <Link to="/login" className="nodeco">
        <div className="s3">
          <IoPower className="text-danger" />
          <span className="text-dark">Logout</span>
        </div>
      </Link>
    </div>
  );
};

export default Artisansidebar;
