import { useState } from "react";
import { IoTriangle } from "react-icons/io5";

import MenuLink from "./MenuLink";
import './Menu.scss';


const Menu = () => {
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

    const fundationSubmenu = ["Kilka słów o fundacji", "Członkowie", "Wolontariusze i PSIjaciele", "Sprawozdania"];
    const adoptionSubmenu = ["Adoptuj", "Adoptuj wirtualnie", "Jańcio", "Nasi Rezydenci", "Im się udało", "Po drugiej stronie tęczy"];
    const supportSubmenu = ["Jak nam pomóc?", "Oni nas wsparli"];

    return (  
        <ul className="menu">
            <li className="menu__item" onClick={toggleFundationMenu} >
                <div className="menu__item__text" >Fundacja <i className={`menu__item__icon  ${!isFundationMenuOpen && "menu__item__icon--rotated"}`}><IoTriangle /></i></div>
                <ul className={`submenu ${!isFundationMenuOpen && "submenu--invisible"}`} >
                    {fundationSubmenu.map(fundationSubmenuItem => <MenuLink key={fundationSubmenuItem} text={fundationSubmenuItem} />)}
                </ul>
            </li>
            <li className="menu__item" onClick={toggleAdoptionMenu}>
                <div className="menu__item__text" >Nasze psy <i className={`menu__item__icon  ${!isAdoptionMenuOpen && "menu__item__icon--rotated"}`}><IoTriangle /></i></div>
                <ul className={`submenu ${!isAdoptionMenuOpen && "submenu--invisible"}`}>
                    {adoptionSubmenu.map(adoptionSubmenuItem => <MenuLink key={adoptionSubmenuItem} text={adoptionSubmenuItem} />)}
                </ul>
            </li>
            <li className="menu__item" onClick={toggleSupportMenu}>
                <div className="menu__item__text" >Wsparcie <i className={`menu__item__icon  ${!isSupportMenuOpen && "menu__item__icon--rotated"}`}><IoTriangle /></i></div>
                <ul className={`submenu ${!isSupportMenuOpen && "submenu--invisible"}`}>
                    {supportSubmenu.map(supportSubmenuItem => <MenuLink key={supportSubmenuItem} text={supportSubmenuItem} />)}
                </ul>
            </li>
            <li className="menu__item">Kontakt</li>
        </ul>
    );
}
 
export default Menu;