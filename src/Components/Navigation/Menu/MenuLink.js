import { Link } from 'react-router-dom';

const MenuLink = ({text, url, toggleMenu}) => {
    return (  
        <Link to={url} onClick={toggleMenu}><li>{text}</li></Link>  
    );
}
 
export default MenuLink;