import React from "react";
import Logo from "../assets/logo.png";
const Header = () => {
  return (
    <div>
      <div className="header">
        <img className="logo" src={Logo} alt="deliveroo-logo" />
      </div>
      <div className="line"></div>
    </div>
  );
};
export default Header;
