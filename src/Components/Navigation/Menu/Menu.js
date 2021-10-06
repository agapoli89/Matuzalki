import { useState } from "react";
import { Link } from 'react-router-dom';
import { IoTriangle } from "react-icons/io5";
import { motion } from "framer-motion"

import MenuLink from "./MenuLink";
import { menuData } from "./MenuData.js";
import './Menu.scss';


const Menu = ({toggleMenu, isTopOfThePage}) => {
    const [isFundationMenuOpen, setIsFundationMenuOpen] = useState(false);
    const [isAdoptionMenuOpen, setIsAdoptionMenuOpen] = useState(false);
    const [isSupportMenuOpen, setIsSupportMenuOpen] = useState(false);

    const toggleFundationMenu = () => {
        setIsAdoptionMenuOpen(false);
        setIsSupportMenuOpen(false);
        setIsFundationMenuOpen(prev => !prev)
    };
    const toggleAdoptionMenu = () => {
        setIsFundationMenuOpen(false);
        setIsSupportMenuOpen(false);
        setIsAdoptionMenuOpen(prev => !prev)
    };
    const toggleSupportMenu = () => {
        setIsFundationMenuOpen(false);
        setIsAdoptionMenuOpen(false);
        setIsSupportMenuOpen(prev => !prev)
    };
    const toggleAllMenu = () => {
        toggleMenu();
        setIsFundationMenuOpen(false);
        setIsAdoptionMenuOpen(false);
        setIsSupportMenuOpen(false);
    }

    const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "-100%" },
    }

    return (  
        <motion.ul 
            initial={{opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={`menu ${!isTopOfThePage && "menu--scrolled"}`}
        >
            <li className="menu__item" onClick={toggleFundationMenu} >
                <div className="menu__item__text" >Fundacja <i className={`menu__item__icon  ${!isFundationMenuOpen && "menu__item__icon--rotated"}`}><IoTriangle /></i></div>
                <motion.ul 
                    animate={isFundationMenuOpen ? "open" : "closed"}
                    variants={variants}
                    className={`submenu ${!isFundationMenuOpen && "submenu--invisible"}`} 
                >
                    {menuData.fundationSubmenu.map(({id, description, url}) => <MenuLink key={id} text={description} url={url} toggleMenu={toggleMenu}/>
                    )}
                </motion.ul>
            </li>
            <li className="menu__item" onClick={toggleAdoptionMenu}>
                <div className="menu__item__text" >Nasze psy <i className={`menu__item__icon  ${!isAdoptionMenuOpen && "menu__item__icon--rotated"}`}><IoTriangle /></i></div>
                <motion.ul 
                    animate={isAdoptionMenuOpen ? "open" : "closed"}
                    variants={variants}
                    className={`submenu ${!isAdoptionMenuOpen && "submenu--invisible"}`}
                >
                    {menuData.adoptionSubmenu.map(({id, description, url}) => <MenuLink key={id} text={description} url={url} toggleMenu={toggleMenu}/>)}
                </motion.ul>
            </li>
            <li className="menu__item" onClick={toggleSupportMenu}>
                <div className="menu__item__text" >Wsparcie <i className={`menu__item__icon  ${!isSupportMenuOpen && "menu__item__icon--rotated"}`}><IoTriangle /></i></div>
                <motion.ul 
                    animate={isSupportMenuOpen ? "open" : "closed"}
                    variants={variants}
                    className={`submenu ${!isSupportMenuOpen && "submenu--invisible"}`}
                >
                    {menuData.supportSubmenu.map(({id, description, url}) => <MenuLink key={id} text={description} url={url}
                    toggleMenu={toggleMenu}/>)}
                </motion.ul>
            </li>
            <Link to="/kontakt" onClick={toggleAllMenu}><li className="menu__item">Kontakt</li></Link>
        </motion.ul>
    );
}
 
export default Menu;