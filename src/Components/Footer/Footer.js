import { IoHeart, IoLogoFacebook, IoLogoYoutube, IoLogoInstagram } from "react-icons/io5";
import './Footer.scss'

const Footer = () => {
    return (  
        <footer className="footer">
            <p>© 2021 Made with <IoHeart /> for Fundacja Pomocy Zwierzętom MATUZALKI</p>
            <div className="footer__social-media">
                <a className="footer__link" href="https://www.facebook.com/matuzalki" target="_blank" rel="noreferrer"><IoLogoFacebook /></a>
                <a className="footer__link" href="https://www.youtube.com/channel/UCAx3QWtR_SosGEIBy7YQf4w" target="_blank" rel="noreferrer"><IoLogoYoutube /></a>
                <a className="footer__link" href="https://www.instagram.com/matuzalki/" target="_blank" rel="noreferrer"><IoLogoInstagram /></a>
            </div>
        </footer>
    );
}
 
export default Footer;