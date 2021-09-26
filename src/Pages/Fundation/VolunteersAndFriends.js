import { IoLogoFacebook, IoLogoInstagram, IoGlobeOutline} from "react-icons/io5";

import Monika from '../../images/people/monika.jpg';
import Eliza from '../../images/people/Eliza.png';

const VolonteersAndFriends = () => {
    return (  
        <main className="article article--justify article--medium">
            <h2>Nasi Wolontariusze i&nbsp;PSIjaciele - bez nich nie damy rady...</h2>
            <div className="members-box">
                <section className="member">
                    <div className="member__picture"><img src={Monika} alt="Miron"/></div>
                    <div className="member__info">
                        <h3 className="member__info__name">Monika Świteńka</h3>
                        <span className="member__info__position">Nasza Wolontariuszka</span>   
                    </div>
                    <p className="member__description">Dobra dusza Fundacji. Absolutnie wrażliwa na psi los. Ze swoją rodziną u boku pomaga jak może,... a może wiele! :)</p>
                </section>
                <section className="member">
                    <div className="member__picture"><img src={Eliza} alt="Miron"/></div>
                    <ul className="member__contact">
                        <li className="member__contact__item"><a className="member__contact__item" href="https://www.facebook.com/zjawagold?_rdc=1&_rdr" target="_blank" rel="noreferrer"><IoLogoFacebook /></a></li>
                        <li className="member__contact__item"><a className="member__contact__item" href="https://www.instagram.com/positivedogwroclaw/" target="_blank" rel="noreferrer"><IoLogoInstagram /></a></li>
                        <li className="member__contact__item"><a className="member__contact__item" href="https://positivedog.pl/?fbclid=IwAR11KZOvwy8fDkJT4j4UsjmibGcya-qFp2atu-0cf2-n7Mjm0x6oQCnaWnM" target="_blank" rel="noreferrer"><IoGlobeOutline /></a></li>
                    </ul>
                    <div className="member__info">
                        <h3 className="member__info__name">Eliza Polkowska-Matejko</h3>
                        <span className="member__info__position">Nasza Opiekunka Behawioralna</span>   
                    </div>
                    <p className="member__description">Założycielka i instruktorka szkolenia psów w Positive Dog.</p>
                </section>
            </div>
        </main>
    );
}
 
export default VolonteersAndFriends;