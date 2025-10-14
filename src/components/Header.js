import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  let [btnText, setBtnText] = useState("Login");
  const onlineStatus = useOnlineStatus() === true ? "Online" : "Offline";

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li className="online-status">
            {" "}
            {onlineStatus}
            {onlineStatus === "Online" ? "✅" : "❌"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
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
