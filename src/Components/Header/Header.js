import Navigation from './Navigation';

import logo from './../../images/logo2.png';
import './Header.scss';

const Header = () => {
    return (  
      <header className="header">
        <a>
          <img src={logo} alt="logo" className="header__logo"></img>
        </a>
        <Navigation />
      </header>
    );
}
 
export default Header;