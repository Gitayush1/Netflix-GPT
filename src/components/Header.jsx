import React from "react";
import Logo from "../assets/Logo";

const Header = () => {
  return (
    <div className="absolute py-6 px-30 bg-gradient-to-b from-black z-10">
      <Logo/>
    </div>
  );
};

export default Header;
