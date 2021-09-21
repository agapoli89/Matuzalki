import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({ text, link, addClass }) => {
    return (  
        <button className={`button button--${addClass}`}>
            <Link to={link}>{text}</Link>
        </button>
    );
}
 
export default Button;