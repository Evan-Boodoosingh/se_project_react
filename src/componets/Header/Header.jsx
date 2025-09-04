import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.svg';
import './Header.css';

function Header({ handleAddClick }) {
const now = new Date();
const dateStr = now.toLocaleDateString("default", {
  month: "long",
  day: "numeric",
});

  return (
    <header className="header">
      <img src={logo} alt="Logo" className="header__logo" />
     <p className="header__place">
       <time className="header__datetime" dateTime={now}>
         {dateStr}
       </time>
       , New York
     </p>
     <button className="header__btn" onClick={handleAddClick}>+ Add clothes</button>
     <p className="header__username">Terrence Tegegne</p>
     <img src={avatar} alt="Avatar" className="header__avatar" />
   </header>
  );
}

export default Header;