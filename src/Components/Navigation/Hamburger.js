import {IoMenu} from "react-icons/io5";

const Hamburger = ({toggleMenu, isTopOfThePage}) => {
    return (  
        <button className={`hamburger ${!isTopOfThePage && "hamburger--scrolled"}`} onClick={toggleMenu}><IoMenu /></button>
    );
}
 
export default Hamburger;