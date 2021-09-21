import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import Button from '../../Components/Button/Button';
import { members } from './MembersData';

import Miron from '../../images/people/Miron2.png';
import Basia from '../../images/people/Basia2.png';
import Ela from '../../images/people/Ela2.png';
import Joasia from '../../images/people/Joasia.png';
import Asia from '../../images/people/Asia2.png';
import Magda from '../../images/people/Magda.png';

import './Members.scss';

const Members = () => {

    const imgToDisplay = (img) => {
        switch (img) {
            case "Miron":
                return Miron;
            case "Basia":
                return Basia;
            case "Ela":
                return Ela;
            case "Joasia":
                return Joasia;
            case "Asia":
                return Asia;
            default:
                return Magda;
        }
    }

    const membersToDisplay = members.map(({ id, name, position, description, email, linkToPhone, phone, img, addInfoClass, addPictureClass }) => (
        <section className="member" key={id}>
            <div className="member__picture"><img src={imgToDisplay(img)} alt="Miron"/></div>
            <ul className="member__contact">
                {email && <li className="member__contact__item"><a className="member__contact__item" href={`mailto:${email}`}><IoMail title={email} /></a></li>}
                {linkToPhone && <li className="member__contact__item"><a className="member__contact__item" href={`tel:${linkToPhone}`}><FaPhoneAlt title={phone}/></a></li>}
            </ul>
            <div className="member__info">
                <h3 className="member__info__name">{name}</h3>
                <span className="member__info__position">{position}</span>   
            </div>
            <p className="member__description">{description}</p>
        </section>
    ))

    return (  
        <main className="article article--justify article--medium">
            <h2>Członkowie Fundacji</h2>
            <div className="members-box">
                {membersToDisplay}
            </div>
            <Button text={"Poznaj też naszych wolontariuszy i PSIjaciół"} link={"/wolontariusze-i-psijaciele"} addClass="center"/>
        </main>
    );
}
 
export default Members;