import TitlePage from './TitlePage/TitlePage';
import '../../App.scss';
import './HomePage.scss';

const HomePage = () => {
    return (  
        <>
            <TitlePage />
            <section className="section">
                <h3>O nas</h3>
                <p className="home-page__text">Fundacja Pomocy Zwierzętom "Matuzalki" powstała na kanwie wieloletniej działalności Eli i&nbsp;Mirona, celem pomocy zwierzętom domowym, ze&nbsp;szczególnym uwzględnieniem zwierząt w&nbsp;podeszłym wieku. Zaczęło się ćwierć wieku temu, a&nbsp;FPZ Matuzalki jest jedynie kontynuacją wieloletnich poczynań.</p>
                <button className="home-page__button">Czytaj więcej...</button>
            </section>
            <section>
                
            </section>
        </>
    );
}
 
export default HomePage;