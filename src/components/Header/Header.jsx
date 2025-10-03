import React, { useContext } from "react";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
import "./Header.css";

import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header({
  handleAddClick,
  weatherData,
  handleRegisterClick,
  handleLoginClick,
  isLoggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);

  const now = new Date();
  const dateStr = now.toLocaleDateString("default", {
    month: "long",
    day: "numeric",
  });

  // Avatar display logic with enhanced error handling
  const renderUserAvatar = () => {
    // Check if user has an uploaded avatar
    if (currentUser?.avatar) {
      return (
        <img
          src={currentUser.avatar}
          alt={currentUser?.name || "User"}
          className="header__avatar"
          onError={(e) => {
            // If image fails to load, hide it and show placeholder
            e.target.style.display = "none";
          }}
        />
      );
    }

    // Create placeholder with first letter
    const getFirstLetter = () => {
      if (currentUser?.name && currentUser.name.trim().length > 0) {
        return currentUser.name.trim().charAt(0).toUpperCase();
      }
      return "U"; // "U" for "User" as fallback
    };

    return <div className="header__avatar-placeholder">{getFirstLetter()}</div>;
  };

  return (
    <header className="header">
      <div className="header__side">
        <Link to="/" className="header__link">
          <img src={logo} alt="WTWR Logo" className="header__logo" />
        </Link>
        <p className="header__place">
          <time className="header__datetime" dateTime={now}>
            {dateStr}
          </time>
          , {weatherData.city}
        </p>
      </div>

      <div className="header__side">
        <ToggleSwitch />

        {/* Conditional navigation based on login status */}
        {isLoggedIn ? (
          // Logged in user sees: Add clothes button + user info + profile link
          <div className="header__user-container">
            <button onClick={handleAddClick} className="header__btn">
              + Add clothes
            </button>
            <Link to="/profile" className="header__profile-link">
              <div className="header__user-info">
                <p className="header__username">{currentUser?.name}</p>
                {renderUserAvatar()}
              </div>
            </Link>
          </div>
        ) : (
          // Not logged in user sees: Sign up + Log in buttons
          <div className="header__auth-buttons">
            <button
              onClick={handleRegisterClick}
              className="header__register-btn"
            >
              Sign Up
            </button>
            <button onClick={handleLoginClick} className="header__login-btn">
              Log In
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
