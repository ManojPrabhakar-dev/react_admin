import React from "react";
import { Notifications, Language, Settings } from "@mui/icons-material";
import "./navBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div>
        <span className="title">Admin Dashboard</span>
      </div>
      <div className="navBarRight">
        <div className="iconWrapper">
          <Notifications />
          <span className="iconBadge">2</span>
        </div>
        <div className="iconWrapper">
          <Language />
          <span className="iconBadge">4</span>
        </div>
        <div className="iconWrapper">
          <Settings />
        </div>
        <img
          className="profilePic"
          src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
      </div>
    </div>
    // </div>
  );
};

export default NavBar;
