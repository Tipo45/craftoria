import React from 'react';
import "../ClientUserProfile/Usersidebar.css";
import { Link } from 'react-router-dom';
import { GrUserSettings } from "react-icons/gr";
import { IoBagOutline, IoEyeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const UserSidebar = ({ activepage }) => {
  return (
    <div className='usersidebar'>
      {
        activepage === 'accountsettings' ?
        <div className='s2'>
            <GrUserSettings />
        <span>Account Settings</span>
      </div>
          :
          <Link
            to='/client/accountsettings'
            className='nodeco'>
                
            <div className='s1'>
            <GrUserSettings />
              <span className="text-dark">Account Settings</span>
            </div>
          </Link>
      }


      {
        activepage === 'changepassword' ?
          <div className='s2'>
            <IoEyeOutline />
            <span>Change Password</span>
          </div>

          :
          <Link
            to='/client/changepassword' className='nodeco'>
            <div className='s1'>
            <IoEyeOutline />
              <span className="text-dark">Change Password</span>
            </div>
          </Link>
      }

      {
        activepage === 'yourorders' ?
          <div className='s2'>
            <IoBagOutline />
            <span>Your Orders</span>
          </div>

          :
          <Link
            to='/client/yourorders' className='nodeco'>
            <div className='s1'>
              
            <IoBagOutline />
              <span className="text-dark">Your Orders</span>
            </div>
          </Link>
      }

      {
        activepage === 'address' ?

          <div className='s2'>
            <CiLocationOn />
            <span>Address</span>
          </div>
          :
          <Link
            to='/client/address' className='nodeco'>
            <div className='s1'>
            <CiLocationOn />
              <span className="text-dark">Address</span>
            </div>
          </Link>
      }
    </div>
  )
}

export default UserSidebar;