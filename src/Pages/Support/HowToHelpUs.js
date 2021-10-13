import KRS from '../../images/krs.png';

import Button from '../../components/Button/Button';
import './HowToHelpUs.scss';

const HowToHelpUs = () => {
    return (  
        <main className="article article--justify">
            <h2>Jak nam pomóc?</h2>
            <p>Jako fundacja „non profit” nie generujemy zysków, nie mamy etatów, czy „umów zleconych”- wszyscy członkowie fundacji to wolontariusze, którzy nie otrzymują jakichkolwiek wynagrodzeń za pracę na rzecz zwierząt. Robimy to bo kochamy pomagać zwierzętom. </p>
            <div>
                <h3 className="support__subtitle">Jeśli możesz, przekaż darowiznę:</h3>
                <div className="home-page__support">
                    <h3 style={{margin: 0}}>ING BANK ŚLĄSKI:</h3>
                    <strong style={{textAlign: 'center'}}>57 1050 1575 1000 0090 3092 7736</strong>
                    <h4 style={{marginBottom: 4}}>Wpłaty spoza Polski (euro)</h4>
                    <strong>Kod SWIFT : INGBPLPW</strong>
                    <strong style={{textAlign: 'center'}}>PL 35 1050 1575 1000 0090 3092 7744</strong>
                </div>
            </div>
            <div className="support__krs">
                <h3 className="support__subtitle">Możesz również przekazać swój 1% podatku - to realna pomoc, która nic Cię nie kosztuje.</h3>
                <h4>KRS: 0000615358</h4>
                <div className="support-large__image support-large__image--small support__krs__image">
                    <img src={KRS} alt="KRS" />    
                </div>
            </div>
            <p>Zebrane środki w całości przeznaczamy na utrzymanie zwierząt i&nbsp;całego Matuzalkowa, czego miesięczny koszt wynosi ok. 10 000 złotych. Na co wydajemy aż tyle pieniędzy?...:</p>
                <ul>
                    <li>Jedzenie (gotowane + specjalistyczne) - 3 000 zł</li>
                    <li>Obsługa weterynaryjna - 3 000 zł</li>
                    <li>Leki – 1 500 zł</li>
                    <li>Utrzymanie Ośrodka (media, ogrzewanie, paliwo) - 1 500 zł</li>
                    <li>Koszty stałe (księgowość, ubezpieczenia etc.) – 750 zł</li>
                </ul>
            <p>Część z tych kosztów (media, paliwo, wyposażenie) pokrywamy z&nbsp;prywatnych środków.</p>
            <div>
                <h3>Jeżeli chciał(a)byś wesprzeć nas w&nbsp;inny sposób (na przykład przekazać karmę czy pomóc jako wolontariusz), skontaktuj się z&nbsp;nami bezpośrednio. Porozmawiamy o&nbsp;naszych aktualnych potrzebach.</h3>
            </div>
            <Button text="Kontakt do nas" addClass="center" link="/kontakt"/>
        </main>
    );
}
 
export default HowToHelpUs;