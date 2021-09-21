import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

import '../../App.scss';
import './HomePage.scss';

import Miron from '../../images/people/Miron.png';
import Basia from '../../images/people/Basia.png';
import Ela from '../../images/people/Ela.png';
import Joasia from '../../images/people/Joasia.png';
import Asia from '../../images/people/Asia.png';
import Magda from '../../images/people/Magda.png';
import Bronek from '../../images/dogs/Bronek.png';
import Donek from '../../images/dogs/Donek.png';
import Ignas from '../../images/dogs/Ignas.png';
import KRS from '../../images/krs.png';

const HomePage = () => {
    const isLargeView = useMediaQuery({ query: '(min-width:992px)' });

    return (  
        <section className="section">
            <article className={`article ${isLargeView && "about-us-large"}`}>
                <h3 className="about-us-large__head">O nas</h3>
                <div className="home-page__text about-us-large__text">Fundacja Pomocy Zwierzętom "Matuzalki" powstała na kanwie wieloletniej działalności Eli i&nbsp;Mirona, celem pomocy zwierzętom domowym, ze&nbsp;szczególnym uwzględnieniem zwierząt w&nbsp;podeszłym wieku. Zaczęło się ćwierć wieku temu, a&nbsp;FPZ Matuzalki jest jedynie kontynuacją wieloletnich poczynań.
                    <h5>Co się zmieniło?</h5>
                    Absolutnie nic! Nadal będziemy robić co w&nbsp;naszej mocy, aby pomóc tym starym, chorym i&nbsp;niechcianym, ale bez Waszej pomocy nie damy rady i&nbsp;będziemy skazani na porażkę... Stąd, mamy wielką nadzieję, że w&nbsp;miarę swoich możliwości będziecie nas wspierać, tak jak dotychczas :).
                    <h5>Ale od początku. Jak to się zaczęło...</h5>
                    <button className="home-page__button about-us-large__button"><Link to="/o-fundacji">...poznaj nas bliżej</Link></button>
                </div>
                
                {isLargeView && <div className="about-us-large__image-box">
                    <div className="polaroid polaroid--Miron"><img src={Miron} alt="Miron" />Miron</div>
                    <div className="polaroid polaroid--Basia"><img src={Basia} alt="Basia" />Basia</div>
                    <div className="polaroid polaroid--Ela"><img src={Ela} alt="Ela" />Ela</div>
                    <div className="polaroid polaroid--Joasia"><img src={Joasia} alt="Joasia" />Joasia</div>
                    <div className="polaroid polaroid--Asia"><img src={Asia} alt="Asia" />Asia</div>
                    <div className="polaroid polaroid--Magda"><img src={Magda} alt="Magda" />Magda</div>
                </div>}
            </article>
            <article className="article article--outstanding">
                <div className="home-page__adoption"></div>
                <div className="home-page__description">
                    <h3 className="home-page__title">Adopcja...</h3>
                    {isLargeView && <div className="home-page__description__image-box">
                        <div className="polaroid polaroid--Bronek"><img src={Bronek} alt="Bronek" />Bronek</div>
                        <div className="polaroid polaroid--Donek"><img src={Donek} alt="Donek" />Donek</div>
                        <div className="polaroid polaroid--Ignas"><img src={Ignas} alt="Ignaś" />Ignaś</div>
                    </div>}
                    <div className="home-page__text home-page__text--outstanding">
                        <p style={{marginTop: 0}}>...temat rzeka. O&nbsp;adopcji bezpańskich zwierząt napisano już chyba wszystko. Bezspornie jest to&nbsp;forma pomocy udzielona komuś, kto nie potrafi obronić się sam i&nbsp;jest całkowicie zależny od&nbsp;człowieka.</p>
                        <blockquote className="home-page__quote">„Adoptując jednego psa nie zmienisz całego świata, ale&nbsp;zmienisz świat tego psa”.</blockquote> 
                        <p>I&nbsp;to już wystarczająco dużo, aby walczyć o&nbsp;jednego psa, każdego po kolei.</p>
                        <strong>KONTAKT W SPRAWIE ADOPCJI: </strong>
                        <strong>e-mail: <a href='mailto:fpz@matuzalki.pl'>fpz@matuzalki.pl</a></strong>
                        <strong><a href='tel:+48519499344'>tel.: 519 499 344 (ELA)</a></strong>
                        <button className="home-page__button home-page__button--outstanding">Dowiedz się więcej</button>
                    </div>
                </div>
            </article>
            <div className="transition"></div>
            <article className={`article ${isLargeView && "support-large"}`}>
                <div className="support-large__text">
                    <h3>Wesprzyj nas</h3>
                    <p className="home-page__text"> Matuzalki to&nbsp;organizacja NON-PROFIT. Jeżeli chcesz i&nbsp;możesz to&nbsp;wspomóż nasze zwierzaki grosikiem przekazując darowiznę.</p>
                    <div className="home-page__support">
                        <h3 style={{margin: 0}}>ING BANK ŚLĄSKI:</h3>
                        <strong style={{textAlign: 'center'}}>57 1050 1575 1000 0090 3092 7736</strong>
                        <h4 style={{marginBottom: 4}}>Wpłaty spoza Polski (euro)</h4>
                        <strong>Kod SWIFT : INGBPLPW</strong>
                        <strong style={{textAlign: 'center'}}>PL 35 1050 1575 1000 0090 3092 7744</strong>
                    </div>
                    <p className="home-page__text home-page__text--support">Możesz też przekazać swój <strong>1%&nbsp;podatku</strong>. To realna pomoc, która nic Cię nie kosztuje :)</p>
                    <div className="home-page__support">
                        <strong>KRS 0000615358</strong> 
                    </div>
                </div>
                {isLargeView && <div className="support-large__image">
                    <img src={KRS} alt="KRS" />    
                </div>}
            </article>
        </section>
    );
}
 
export default HomePage;