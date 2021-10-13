import { Link } from 'react-router-dom';
import { dogs } from './DogsData';
import Button from '../../components/Button/Button';
import './Adoption.scss';

import stella from '../../images/dogs/toAdopt/stella.jpg';
import maksio from '../../images/dogs/behindTheRainbow/maksio.jpg';
import sylwek from '../../images/dogs/behindTheRainbow/sylwek.jpg';

const Adoption = () => {

    const imgToDisplay = (url) => {
        switch (url) {
            case "stella":
                return stella;
            case "maksio":
                return maksio;
            case "sylwek":
                return sylwek;
            default:
                return maksio;
        }
    }

    const dogsToAdopt = dogs.filter(({dogStatus}) => dogStatus === "toAdopt");
    const dogsToDisplay = dogsToAdopt.map(({id, dogName, url})=> (
        <Link key={id} to={`psy/${url}`} className="dog dog--to-adopt">
            <div className="dog__picture"><img src={imgToDisplay(url)} alt={dogName} /></div>
            <p className="dog__text">{dogName}</p>
        </Link>
    ))

    return (  
        <main className="article article--justify adoption">
            <h2>Adopcja</h2>
            <p>Temat rzeka. O adopcji bezpańskich zwierząt napisano już chyba wszystko. Bezspornie jest to forma pomocy udzielona komuś, kto nie potrafi obronić się sam i jest całkowicie zależny od człowieka.</p>
            <blockquote className="home-page__quote">„Adoptując jednego psa nie zmienisz całego świata, ale&nbsp;zmienisz świat tego psa”.</blockquote> 
            <p>I&nbsp;to już wystarczająco dużo, aby walczyć o&nbsp;jednego psa, każdego po kolei.</p>
            <div className="adoption__contact-box">
                <div className="adoption__contact">
                    <h3>Kontakt w sprawie adopcji:</h3>
                    <address><a href='mailto:fpz@matuzalki.pl'>e-mail: fpz@matuzalki.pl</a></address>
                    <address><a href='tel:+48519499344'>tel.: 519 499 344 (ELA)</a></address>
                </div>
                <div className="home-page__support">
                    <strong>Jeżeli nie odbieramy to znaczy, że pracujemy, karmimy sforę, lub jesteśmy u veta - wtedy prosimy o SMSa z hasłem "ADOPCJA_imię psa" - oddzwonimy</strong>
                </div>
            </div>
            <strong>*Wszystkie zwierzęta przekazywane do adopcji są odrobaczone, zaszczepione i po zabiegu kastracji/sterylizacji.</strong>
            <a href="https://www.facebook.com/matuzalki.adopcje" target="_blank" rel="noreferrer"><p>Aby być na bieżąco odwiedź nasz profil na Facebooku - Matuzalki Adopcje.</p></a>
            <h3>Pieski gotowe do adopcji:</h3>
            <div className="dogs-box">
                {dogsToDisplay}
            </div>
            <Button text="Jeżeli marzysz o psiaku, ale obecnie nie masz możliwość pełnoetatowej opieki, rozważ adopcję wirtualną" addClass="outstanding" addClass2="center" link="/adoptuj-wirtualnie"/>
        </main>
    );
}
 
export default Adoption;