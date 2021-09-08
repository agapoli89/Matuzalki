import TitlePage from './TitlePage/TitlePage';
import { useMediaQuery } from 'react-responsive';

import '../../App.scss';
import './HomePage.scss';

import Miron from '../../images/Miron.png';
import Basia from '../../images/Basia.png';
import Ela from '../../images/Ela.png';
import Joasia from '../../images/Joasia.png';
import Asia from '../../images/Asia.png';
import Magda from '../../images/Magda.png';

const HomePage = () => {
    const isLargeView = useMediaQuery({ query: '(min-width:992px)' });

    return (  
        <section className="section">
            <TitlePage />
            <article className={`article ${isLargeView && "about-us-large"}`}>
                <h3 className="about-us-large__head">O nas</h3>
                <div className="home-page__text about-us-large__text">Fundacja Pomocy Zwierzętom "Matuzalki" powstała na kanwie wieloletniej działalności Eli i&nbsp;Mirona, celem pomocy zwierzętom domowym, ze&nbsp;szczególnym uwzględnieniem zwierząt w&nbsp;podeszłym wieku. Zaczęło się ćwierć wieku temu, a&nbsp;FPZ Matuzalki jest jedynie kontynuacją wieloletnich poczynań.
                    <h5>Co się zmieniło?</h5>
                    Absolutnie nic! Nadal będziemy robić co w&nbsp;naszej mocy, aby pomóc tym starym, chorym i&nbsp;niechcianym, ale bez Waszej pomocy nie damy rady i&nbsp;będziemy skazani na porażkę... Stąd, mamy wielką nadzieję, że w&nbsp;miarę swoich możliwości będziecie nas wspierać, tak jak dotychczas :).
                    <h5>Ale od początku. Jak to się zaczęło...</h5>
                    <button className="home-page__button about-us-large__button">...poznaj nas bliżej</button>
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
                    <div className="home-page__text home-page__text--outstanding">...temat rzeka. O&nbsp;adopcji bezpańskich zwierząt napisano już chyba wszystko. Bezspornie jest to&nbsp;forma pomocy udzielona komuś, kto nie potrafi obronić się sam i&nbsp;jest całkowicie zależny od&nbsp;człowieka. <blockquote className="home-page__quote"><p>„Adoptując jednego psa nie zmienisz całego świata, ale&nbsp;zmienisz świat tego psa”.</p></blockquote> I&nbsp;to już wystarczająco dużo, aby walczyć o&nbsp;jednego psa, każdego po kolei.</div>
                    <strong className="home-page__text home-page__text--outstanding home-page__text--start">KONTAKT W SPRAWIE ADOPCJI: </strong>
                    <strong className="home-page__text home-page__text--outstanding home-page__text--start">e-mail: fpz@matuzalki.pl</strong>
                    <strong className="home-page__text home-page__text--outstanding home-page__text--start">tel.: 519 499 344 (ELA)</strong>
                    <button className="home-page__button home-page__button--outstanding">Dowiedz się więcej</button>
                </div>
            </article>
            <div className="transition"></div>
            <article className="article">
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
            </article>
        </section>
    );
}
 
export default HomePage;