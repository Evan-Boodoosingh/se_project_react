import React, { useContext } from "react";
import "./SideBar.css";
import avatar from "../../assets/avatar.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function SideBar({ onLogout }) {
  const currentUser = useContext(CurrentUserContext);

  // Avatar display logic (similar to Header)
  const renderUserAvatar = () => {
    if (currentUser?.avatar) {
      return (
        <img
          src={currentUser.avatar}
          alt={currentUser?.name || "User"}
          className="sidebar__avatar"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      );
    }

    const getFirstLetter = () => {
      if (currentUser?.name && currentUser.name.trim().length > 0) {
        return currentUser.name.trim().charAt(0).toUpperCase();
      }
      return "U";
    };

    return (
      <div className="sidebar__avatar-placeholder">{getFirstLetter()}</div>
    );
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__row">
        <p className="sidebar__username">{currentUser?.name || "User"}</p>
        {renderUserAvatar()}
      </div>
      <button className="sidebar__logout-btn" onClick={onLogout}>
        Sign out
      </button>
    </aside>
  );
}

export default SideBar;
