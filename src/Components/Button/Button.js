import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({ text, link, addClass, addClass2, handleClick }) => {

    console.log(link)

    const buttonLink = <Link to={link} className="button-link">
        <button className={`button button--${addClass} button--${addClass2}`} onClick={handleClick}>
            {text}
        </button>
    </Link>

    return (  
        <>
            {!link ? (<button className={`button button--${addClass} button--${addClass2}`} onClick={handleClick}>
            {text}
            </button>) : buttonLink}
        </>
    );
}
 
export default Button;