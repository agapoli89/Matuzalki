import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import './Contact.scss';

const Contact = () => {
    return (  
        <main className="article article--justify contact">
            <h2 className="contact__title">Kontakt do nas</h2>
            <section className="contact__data">
                <address className="contact__data__address">
                    <h3>Fundacja Pomocy Zwierzętom "MATUZALKI"</h3>
                    <span className="contact__data__address__title">Adres Ośrodka i do korespondencji:</span>
                    <span>55-093 Raków 9c</span><br />
                    <span className="contact__data__address__title">Biuro:</span>
                    <span>ul. Miernicza 28<br />
                    50-435 Wrocław<br />
                    <a href="tel:713157351">tel. 71 315 73 51</a><br />
                    (czynne pon.-pt. 9-12; <br />
                    czwartek <strong>nieczynne</strong>)
                    </span>
                </address>
                <p>
                    NIP: 8961550958<br />
                    REGON: 364308983<br />
                    KRS: 0000615358
                </p>
            </section>
            <section className="contact__members">
                <div className="contact__member">
                    <p>Miron Chmielewski (administracja fundacji, media, interwencje, wsparcie, dary):</p>
                    <a href="tel:+48518756665"><FaPhoneAlt /> 518 75 66 65</a>
                    <a href="mailto:miron.chmielewski@matuzalki.pl" ><IoMail /> miron.chmielewski@matuzalki.pl</a>
                </div>
                <div className="contact__member">
                    <p>Ela Platt (adopcje, weterynaria):</p>
                    <a href="tel:+48519499344"><FaPhoneAlt /> 519 499 344</a>
                    <a href="ela.platt@matuzalki.pl" ><IoMail /> ela.platt@matuzalki.pl</a>
                </div>
                <div className="contact__member">
                    <p>Barbara Laskowska (oddział POZNAŃ):</p>
                    <a href="tel:+48519499344"><FaPhoneAlt /> 519 499 344</a>
                    <a href="barbara.laskowska@matuzalki.pl" ><IoMail /> barbara.laskowska@matuzalki.pl</a>
                </div>
                <br />
                <a href="mailto:fpz@matuzalki.pl">email ogólny: fpz@matuzalki.pl</a>
            </section>
            <section className="home-page__support contact__support">
                <h3 style={{margin: 0}}>ING BANK ŚLĄSKI:</h3>
                <strong style={{textAlign: 'center'}}>57 1050 1575 1000 0090 3092 7736</strong>
                <h4 style={{marginBottom: 4}}>Wpłaty spoza Polski (euro)</h4>
                <strong>Kod SWIFT : INGBPLPW</strong>
                <strong style={{textAlign: 'center'}}>PL 35 1050 1575 1000 0090 3092 7744</strong>
            </section>
            <iframe src="https://www.google.com/maps/d/embed?mid=1AKqOKW9sSnrtXxurtl32pXWd7rUiEle5" width="100%" height="480" title="map" className="contact__map"></iframe>
        </main>
    );
}
 
export default Contact;