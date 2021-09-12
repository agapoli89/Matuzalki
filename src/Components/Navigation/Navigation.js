import Hamburger from './Hamburger';
import Menu from './Menu/Menu';
import { useMediaQuery } from 'react-responsive';

import logo from './../../images/logo2.png';
import './Navigation.scss';
import { useState } from 'react';

const Navigation = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const isMediumView = useMediaQuery({ query: '(min-width:768px)' });

    const toggleMenu = () => setIsMenuVisible(prev => !prev);

    return (  
      <nav className="navigation">
        <a>
          <img src={logo} alt="logo" className="navigation__logo"></img>
        </a>
        <Hamburger toggleMenu={toggleMenu}/>
        {isMediumView || isMenuVisible ? <Menu /> : null}
      </nav>
    );
}
 
export default Navigation;