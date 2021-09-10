import { Link } from "react-router-dom";
import { IoTriangle } from "react-icons/io5";
import './Navigation.scss';
import { useState } from "react";

const Navigation = () => {
    const [isFundationMenuOpen, setIsFundationMenuOpen] = useState(false);
    const [isAdoptionMenuOpen, setIsAdoptionMenuOpen] = useState(false);
    const [isSupportMenuOpen, setIsSupportMenuOpen] = useState(false);

    const toggleFundationMenu = () => setIsFundationMenuOpen(prev => !prev);
    const toggleAdoptionMenu = () => setIsAdoptionMenuOpen(prev => !prev);
    const toggleSupportMenu = () => setIsSupportMenuOpen(prev => !prev);

    return (  
        <nav className="navigation">
            <ul className="menu">
                <li className="menu__item">
                    <div className="menu__item__text" onClick={toggleFundationMenu}>Fundacja <i className="menu__item__icon menu__item__icon--rotated"><IoTriangle /></i></div>
                    <ul className={`submenu ${!isFundationMenuOpen && "submenu--invisible"}`}>
                        <li>Kilka słów o fundacji</li>
                        <li>Członkowie</li>
                        <li>Wolontariusze i PSIjaciele</li>
                        <li>Sprawozdania</li>
                    </ul>
                </li>
                <li className="menu__item">
                    <div className="menu__item__text" onClick={toggleAdoptionMenu}>Nasze psy <i className="menu__item__icon menu__item__icon--rotated"><IoTriangle /></i></div>
                    <ul className={`submenu ${!isAdoptionMenuOpen && "submenu--invisible"}`}>
                        <li>Adoptuj</li>
                        <li>Adoptuj wirtualnie</li>
                        <li>Jańcio</li>
                        <li>Nasi Rezydenci</li>
                        <li>Im się udało</li>
                        <li>Po drugiej stronie tęczy</li>
                    </ul>
                </li>
                <li className="menu__item">
                    <div className="menu__item__text" onClick={toggleSupportMenu}>Wsparcie <i className="menu__item__icon menu__item__icon--rotated"><IoTriangle /></i></div>
                    <ul className={`submenu ${!isSupportMenuOpen && "submenu--invisible"}`}>
                        <li>Jak nam pomóc?</li>
                        <li>Oni nas wsparli</li>
                    </ul>
                </li>
                <li className="menu__item">Kontakt</li>
            </ul>
        </nav>
    );
}
 
export default Navigation;