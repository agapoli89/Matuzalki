import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({ text, link, addClass, addClass2, handleClick }) => {
    return (  
        <button className={`button button--${addClass} button--${addClass2}`} onClick={handleClick}>
            {link ? <Link to={link}>{text}</Link> : text}
        </button>
    );
}
 
export default Button;