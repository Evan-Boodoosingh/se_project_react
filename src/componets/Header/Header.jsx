import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.svg';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="header__logo" />
     <p className="header__place">
       <time className="header__datetime" dateTime="2025-09-01">
         September 1
       </time>
       , New York
     </p>
     <button className="header__button">+ Add clothes</button>
     <p className="header__username">Terrence Tegegne</p>
     <img src={avatar} alt="Avatar" className="header__avatar" />
   </header>
  );
}

export default Header;