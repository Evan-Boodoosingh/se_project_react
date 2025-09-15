import "./SideBar.css";
import avatar from "../../assets/avatar.svg";

function SideBar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__row">
        <p className="sidebar__username">Terrence Tegegne</p>
        <img src={avatar} alt="Avatar" className="sidebar__avatar" />
      </div>
    </aside>
  );
}

export default SideBar;
