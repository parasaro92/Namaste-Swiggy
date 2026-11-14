import {LOGO_URL} from "./utils/constant";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import "tailwindcss";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus()

  useEffect(() => {
    console.log("Header rendered");
  }, []);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link to="/about">
              About
            </Link>
          </li>
          <li className="px-4">
            <Link to="/contact">
              Contact
            </Link>
          </li>
          <li className="px-4 font-bold text-xl">Cart</li>
          <button className="login" 
            onClick={() => btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")}>
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Header;