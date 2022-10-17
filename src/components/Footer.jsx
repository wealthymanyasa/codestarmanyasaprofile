import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-sm p-4 text-center text-white">
      Copyright © {new Date().getFullYear()} (codeStar <a href="https://github.com/wealthymanyasa" target="_blank" rel="noreferrer"> 
        <ion-icon name="logo-github"></ion-icon>
      </a> ) All Rights reserved.
    </div>
  );
};

export default Footer;
