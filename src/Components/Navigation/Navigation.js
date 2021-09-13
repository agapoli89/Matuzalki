import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';
import Menu from './Menu/Menu';
import { useMediaQuery } from 'react-responsive';

import logo from './../../images/logo2.png';
import './Navigation.scss';

const Navigation = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const isMediumView = useMediaQuery({ query: '(min-width:768px)' });

    const toggleMenu = () => setIsMenuVisible(prev => !prev);

    return (  
      <nav className="navigation">
        <Link to="/">
          <img src={logo} alt="logo" className="navigation__logo"></img>
        </Link>
        <Hamburger toggleMenu={toggleMenu}/>
        {isMediumView || isMenuVisible ? <Menu toggleMenu={toggleMenu} /> : null}
      </nav>
    );
}
 
export default Navigation;