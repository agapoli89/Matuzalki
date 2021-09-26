import './Header.scss';
import { useLocation } from 'react-router';

const Header = () => {
    const location = useLocation();

    return (  
        <main className={`header ${location.pathname === "/wsparli-nas" && "header--for-support"}`}>
            <h1 className="header__title">Fundacja pomocy zwierzętom "MATUZALKI"</h1>
            <p className="header__text">...by starość nie musiała boleć</p>
        </main>
    );
}
 
export default Header;