import React from 'react';
import logo from "../images/calculator.png";

const Header = () => {
  return (
    <header className="bg-primary text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <div style={{width: "50px", height: "50px", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <img src={logo} alt="Logo" style={{width: "100%", height: "100%"}} />
        </div>
        <h1>Gold Rate Calculator</h1>
        <img src={logo} alt="Calculator" style={{width: "50px", height: "50px"}} />
      </div>
    </header>
  );
};

export default Header;
