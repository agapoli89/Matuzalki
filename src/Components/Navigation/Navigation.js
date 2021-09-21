import { useState, useEffect } from 'react';
import { scrollToTop } from '../../helpers/ScrollToTopFunction';
import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';
import Menu from './Menu/Menu';
import { useMediaQuery } from 'react-responsive';

import logo from './../../images/logo2.png';
import './Navigation.scss';

const Navigation = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isTopOfThePage, setIsTopOfThePage] = useState(window.scrollY === 0);
    const isMediumView = useMediaQuery({ query: '(min-width:768px)' });
    const toggleMenu = () => setIsMenuVisible(prev => !prev);

    const changeNavHeight = () => setIsTopOfThePage(window.scrollY === 0)

    useEffect(() => {
      function watchScroll() {
        window.addEventListener("scroll", changeNavHeight);
      }
      watchScroll();
      return () => {
        window.removeEventListener("scroll", changeNavHeight);
      };
    });

    return (  
      <nav className={`navigation ${!isTopOfThePage && "navigation--scrolled"}`}>
        <Link to="/">
          <img src={logo} alt="logo" className={`navigation__logo ${!isTopOfThePage && "navigation__logo--scrolled"}`} onClick={() => scrollToTop()}></img>
        </Link>
        <Hamburger toggleMenu={toggleMenu} isTopOfThePage={isTopOfThePage} />
        {isMediumView || isMenuVisible ? <Menu toggleMenu={toggleMenu} isTopOfThePage={isTopOfThePage}/> : null}
      </nav>
    );
}
 
export default Navigation;