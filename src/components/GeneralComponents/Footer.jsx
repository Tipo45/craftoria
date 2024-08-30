import React, { useState } from "react";
import { a, Link } from "react-router-dom";
import "../GeneralComponents/GeneralComponent.css";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter, FaSnapchat } from "react-icons/fa6";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { MdAddShoppingCart } from "react-icons/md";

const Footer = () => {
  const [value, setValue] = useState(0);

  return (
    <>
    <div className="big-footer-cart">
        <Link to="/cart"><MdAddShoppingCart /></Link>
    </div>
      <div className="footer">
        <div className="big_footer">
          <div className="sub_footer section_padding">
            <div className="sub_footer-as">
              <div className="sub_footer-as-div">
                <h4>Connect</h4>
                <a className="nodeco" href="#">
                  <p>Employer</p>
                </a>
                <a className="nodeco" href="#">
                  <p>Employer</p>
                </a>
                <a className="nodeco" href="#">
                  <p>Employer</p>
                </a>
              </div>
              <div className="sub_footer-as-div">
                <h4>Connect</h4>
                <a className="nodeco" href="#">
                  <p>Employer</p>
                </a>
                <a className="nodeco" href="#">
                  <p>Employer</p>
                </a>
                <a className="nodeco" href="#">
                  <p>Employer</p>
                </a>
              </div>
              <div className="sub_footer-as-div">
                <h4>Connect</h4>
                <a className="nodeco" href="#">
                  <p>Employer</p>
                </a>
                <a className="nodeco" href="#">
                  <p>Employer</p>
                </a>
                <a className="nodeco" href="#">
                  <p>Employer</p>
                </a>
              </div>
              <div className="sub_footer-as-div">
                <h4>Connect</h4>
                <a className="nodeco" href="#">
                  <p>Employer</p>
                </a>
                <a className="nodeco" href="#">
                  <p>Employer</p>
                </a>
                <a className="nodeco" href="#">
                  <p>Employer</p>
                </a>
              </div>
              <div className="sub_footer-as-div">
                <h4>Connect With Us</h4>
                <div className="socialmedia">
                  <p>
                    <a href="https://wa.me/2348135854955">
                      <FaWhatsapp />
                    </a>
                  </p>
                  <p>
                    <a href="">
                      <FaXTwitter />
                    </a>
                  </p>
                  <p>
                    <a href="">
                      <FaTelegramPlane />
                    </a>
                  </p>
                  <p>
                    <a href="">
                      <FaSnapchat />
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <hr />

            <div className="sub_footer-below">
              <div className="sub_footer-copyright">
                <p>
                  @{new Date().getFullYear()} TipoDevelopers. All right
                  reserved.
                </p>
              </div>
              <div className="sub_footer-below-as">
                <a className="nodeco" href="#">
                  <div>
                    <p>Terms & Conditions</p>
                  </div>
                </a>
                <a className="nodeco" href="#">
                  <div>
                    <p>Security</p>
                  </div>
                </a>
                <a className="nodeco" href="#">
                  <div>
                    <p>Privacy</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="small_footer">
          <div className="container-fluid">
            <BottomNavigation
              className="bottom-nav"
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
              <Link to="/">
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
              </Link>
              <Link to="/productsandservices/activepage">
                <BottomNavigationAction
                  label="Menu"
                  icon={<FormatListBulletedIcon />}
                />
              </Link>
              <Link to="/cart">
                <BottomNavigationAction
                  label="Cart"
                  icon={<ShoppingCartCheckoutIcon />}
                />
              </Link>
              <Link to="/login">
                <BottomNavigationAction
                  label="Account"
                  icon={<AccountCircleIcon />}
                />
              </Link>
            </BottomNavigation>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
