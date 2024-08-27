import React from 'react';
import "../ArtisanUserProfile/Artisansidebar.css";
import { Link } from 'react-router-dom';
import { GrUserSettings } from "react-icons/gr";
import { IoBagOutline, IoEyeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const Artisansidebar = ({ activepage }) => {
  return (
    <div className='usersidebar'>
      {
        activepage === 'artisanaccountsettings' ?
        <div className='s2'>
            <GrUserSettings />
        <span>Account Settings</span>
      </div>
          :
          <Link
            to='/artisan/accountsettings'
            className='nodeco'>
                
            <div className='s1'>
            <GrUserSettings />
              <span className="text-dark">Account Settings</span>
            </div>
          </Link>
      }


      {
        activepage === 'artisanchangepassword' ?
          <div className='s2'>
            <IoEyeOutline />
            <span>Change Password</span>
          </div>

          :
          <Link
            to='/artisan/changepassword' className='nodeco'>
            <div className='s1'>
            <IoEyeOutline />
              <span className="text-dark">Change Password</span>
            </div>
          </Link>
      }

      {
        activepage === 'artisanskillorservice' ?
          <div className='s2'>
            <IoBagOutline />
            <span>My Portfolio</span>
          </div>

          :
          <Link
            to='/artisan/portfolio' className='nodeco'>
            <div className='s1'>
              
            <IoBagOutline />
              <span className="text-dark">My Portfolio</span>
            </div>
          </Link>
      }

      {
        activepage === 'artisanaddress' ?

          <div className='s2'>
            <CiLocationOn />
            <span>Address</span>
          </div>
          :
          <Link
            to='/artisan/address' className='nodeco'>
            <div className='s1'>
            <CiLocationOn />
              <span className="text-dark">Address</span>
            </div>
          </Link>
      }
    </div>
  )
}

export default Artisansidebar;