import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
import "./Header.css";

import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({ handleAddClick, weatherData }) {
  const now = new Date();
  const dateStr = now.toLocaleDateString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__side">
        {" "}
        <img src={logo} alt="Logo" className="header__logo" />
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
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="Avatar" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
