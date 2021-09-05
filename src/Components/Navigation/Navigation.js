import './Navigation.scss';

const Navigation = () => {
    return (  
        <nav className="navigation">
            <ul className="menu">
                <li>Fundacja
                    <ul className="menu__sublist">
                        <li>Kilka słów o fundacji</li>
                        <li>Członkowie</li>
                        <li>Wolontariusze i PSIjaciele</li>
                        <li>Sprawozdania</li>
                    </ul>
                </li>
                <li>Nasze psy
                    <ul className="menu__sublist">
                        <li>Adoptuj</li>
                        <li>Adoptuj wirtualnie</li>
                        <li>Nasi Rezydenci</li>
                        <li>Im się udało</li>
                        <li>Po drugiej stronie tęczy</li>
                    </ul>
                </li>
                <li>Wsparcie
                    <ul className="menu__sublist">
                        <li>Jak nam pomóc?</li>
                        <li>Oni nas wsparli</li>
                    </ul>
                </li>
                <li>Kontakt</li>
            </ul>
        </nav>
    );
}
 
export default Navigation;