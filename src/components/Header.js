import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  let [btnText, setBtnText] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Offers</li>
          <li>Cart</li>
          <li>
            <button
              className="login"
              onClick={() => {
                let newbtnName = btnText === "Login" ? "Logout" : "Login";
                setBtnText(newbtnName);
              }}
            >
              {btnText}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
