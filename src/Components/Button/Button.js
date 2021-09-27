import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({ text, link, addClass, handleClick }) => {
    return (  
        <button className={`button button--${addClass}`} onClick={handleClick}>
            {link ? <Link to={link}>{text}</Link> : text}
        </button>
    );
}
 
export default Button;