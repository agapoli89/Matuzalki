import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import Button from '../../components/Button/Button';
import { members } from './MembersData';

import './Members.scss';

const Members = () => {

    const membersToDisplay = members.map(({ id, name, position, description, email, linkToPhone, phone, url }) => (
        <section className="member" key={id}>
            <div className="member__picture"><img src={url.default} alt="Miron"/></div>
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