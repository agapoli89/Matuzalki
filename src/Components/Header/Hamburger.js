import {IoMenu} from "react-icons/io5";

const Hamburger = ({toggleMenu}) => {
    return (  
        <button className="hamburger" onClick={toggleMenu}><IoMenu /></button>
    );
}
 
export default Hamburger;