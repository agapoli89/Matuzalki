import Hamburger from './Hamburger';
import Navigation from './Navigation/Navigation';
import { useMediaQuery } from 'react-responsive';

import logo from './../../images/logo2.png';
import './Header.scss';
import { useState } from 'react';

const Header = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const isMediumView = useMediaQuery({ query: '(min-width:768px)' });

    const toggleMenu = () => setIsMenuVisible(prev => !prev);

    return (  
      <header className="header">
        <a>
          <img src={logo} alt="logo" className="header__logo"></img>
        </a>
        <Hamburger toggleMenu={toggleMenu}/>
        {isMediumView || isMenuVisible ? <Navigation /> : null}
      </header>
    );
}
 
export default Header;