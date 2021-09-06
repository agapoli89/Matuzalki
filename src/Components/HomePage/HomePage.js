import TitlePage from './TitlePage/TitlePage';

import '../../App.scss';
import './HomePage.scss';

const HomePage = () => {
    return (  
        <section className="section">
            <TitlePage />
            <article className="article">
                <h3>O nas</h3>
                <p className="home-page__text">Fundacja Pomocy Zwierzętom "Matuzalki" powstała na kanwie wieloletniej działalności Eli i&nbsp;Mirona, celem pomocy zwierzętom domowym, ze&nbsp;szczególnym uwzględnieniem zwierząt w&nbsp;podeszłym wieku. Zaczęło się ćwierć wieku temu, a&nbsp;FPZ Matuzalki jest jedynie kontynuacją wieloletnich poczynań.</p>
                <button className="home-page__button">Poznaj nas bliżej</button>
            </article>
            <article className="article article--outstanding">
                <div className="home-page__adoption"></div>
                <h3 className="home-page__title">Adopcja...</h3>
                <p className="home-page__text home-page__text--outstanding">...temat rzeka. O&nbsp;adopcji bezpańskich zwierząt napisano już chyba wszystko. Bezspornie jest to&nbsp;forma pomocy udzielona komuś, kto nie potrafi obronić się sam i&nbsp;jest całkowicie zależny od&nbsp;człowieka. <blockquote className="home-page__quote"><p>„Adoptując jednego psa nie zmienisz całego świata, ale&nbsp;zmienisz świat tego psa”.</p></blockquote> I&nbsp;to już wystarczająco dużo, aby walczyć o&nbsp;jednego psa, każdego po kolei.</p>
                <strong className="home-page__text home-page__text--outstanding home-page__text--start">KONTAKT W SPRAWIE ADOPCJI: 
                fpz@matuzalki.pl / tel. 519 499 344 (ELA)</strong>
                <button className="home-page__button home-page__button--outstanding">Dowiedz się więcej</button>
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
                <p className="home-page__text">Możesz też przekazać swój <strong>1%&nbsp;podatku</strong>. To realna pomoc, która nic Cię nie kosztuje :)</p>
                <div className="home-page__support">
                    <strong>KRS 0000615358</strong>
                </div>
            </article>
        </section>
    );
}
 
export default HomePage;