import React from "react";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Background({ children }) {
  return (
    <div className="bg-Eclipse bg-cover bg-center bg-origin-content bg-no-repeat h-screen">
      <div>
        <div className="p-20">
          <img
            src="../src/assets/images/logo-white.png"
            className="w-20 h-7"
            alt="TWC Logo White"
          />
          <h3 className="ternary font-bold -mt-3">contacts</h3>
          <h3 className="ternary -mt-3">portal</h3>
          {children}
        </div>
        <Link to="/login" className="flex float-end">
          <RiLogoutCircleLine color="white" size={25} />
          <h4 className="underline float-right pl-2 pr-20">&lt; logout</h4>
        </Link>
      </div>
    </div>
  );
}

export default Background;
