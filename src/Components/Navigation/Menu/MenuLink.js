import { Link } from 'react-router-dom';

const MenuLink = ({text, url}) => {
    return (  
        <li>
            <Link to={url}>{text}</Link>
        </li>
    );
}
 
export default MenuLink;