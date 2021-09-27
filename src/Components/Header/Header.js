import './Header.scss';
import { useLocation } from 'react-router';

const Header = () => {
    const location = useLocation();

    const additionalClass = (loc) => {
        switch (loc) {
            case "/wsparli-nas":
                return "header--support";
            case "/jancio":
                return "header--jancio";
            default:
                return null;
        } 
    }

    return (  
        <main className={`header ${additionalClass(location.pathname)}`}>
            <h1 className="header__title">Fundacja pomocy zwierzętom "MATUZALKI"</h1>
            <p className="header__text">...by starość nie musiała boleć</p>
        </main>
    );
}
 
export default Header;