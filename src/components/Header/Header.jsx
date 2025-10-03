import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
import "./Header.css";

import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

function Header({ handleAddClick, weatherData, handleRegisterClick, handleLoginClick }) {
  const now = new Date();
  const dateStr = now.toLocaleDateString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__side">
        {" "}
        <Link to="/" className="header__link">
          <img src={logo} alt="Logo" className="header__logo" />
        </Link>
        <p className="header__place">
          <time className="header__datetime" dateTime={now}>
            {dateStr}
          </time>
          , {weatherData.city}
        </p>
      </div>
      <div className="header__side">
        {" "}
        <ToggleSwitch />
        <button className="header__btn" onClick={handleAddClick}>
          + Add clothes
        </button>
        <Link to="/profile" className="header__link">
          <p className="header__username">Terrence Tegegne</p>
          <img src={avatar} alt="Avatar" className="header__avatar" />
        </Link>
        <button className="header__register-btn" onClick={handleRegisterClick}>
          Sign up
        </button>
         <button className="header__login-btn" onClick={handleLoginClick}>
          log in
        </button>
      </div>
    </header>
  );
}

export default Header;
