import { Link } from 'react-router-dom';

const MenuLink = ({text, url, toggleMenu}) => {
    return (  
        <li>
            <Link to={url} onClick={toggleMenu}>{text}</Link>
        </li>
    );
}
 
export default MenuLink;