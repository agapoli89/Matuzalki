import { Link } from 'react-router-dom';
import { dogs } from './DogsData';
import Button from '../../components/Button/Button';

const VirtualAdoption = () => {

    const dogsToAdoptVirtually = dogs.filter(({dogStatus}) => dogStatus === "toAdoptVirtually");
    const dogsToDisplay = dogsToAdoptVirtually.map(({id, dogName, url, imgExtention})=> (
        <Link key={id} to={`psy/${url}`} className="dog dog--to-adopt">
            <div className="dog__picture"><img src={require(`../../images/dogs/toAdoptVirtually/${url}.${imgExtention}`).default} alt={dogName} /></div>
            <p className="dog__text">{dogName}</p>
        </Link>
    ))

    return (  
        <main className="article article--justify adoption">
            <h2>Adoptuj wirtualnie i daj wiarę w lepsze jutro!</h2>
            <p>Adopcja wirtualna nie wymaga wielkiego wysiłku. Polega na wirtualnej „opiece” nad wybranym psiakiem, poprzez pomoc w jego utrzymaniu, leczeniu i wyżywieniu. W praktyce polega to na deklaracji comiesięcznych wpłat na rzecz wybranego przez Państwa podopiecznego (w kwestii jej wysokości oraz długości pomocy to Państwo są jedynymi decydentami).</p>
            <h4>PO CO?</h4>
            <p>Stare, chore, nierasowe. To takim psom najtrudniej znaleźć nowy dom. Zwyczajnie nikt ich nie chce. I choćbyśmy stawali na rzęsach, często rzeczywistość okazuje się brutalna, takiemu psu nie da się znaleźć domu. W Ośrodku mają zapewnione miejsce do końca swoich dni. Będziemy je kochać, opiekować się nimi i pielęgnować jak najlepiej potrafimy. To takie psy w Ośrodku mieszkają latami, wymagają zwiększonej opieki weterynaryjnej, często specjalistycznej karmy, leków, stąd wymagają największych nakładów finansowych. Adopcja wirtualna = comiesięczny datek na rzecz konkretnego psa, stanowi środek do celu – zapewnienie jak najlepszych warunków bytowych.</p>
            <h4>JAK TO ZROBIĆ?</h4>
            <p>Technicznie jest to niezwykle proste. Wybieracie Państwo pieska, któremu decydujecie się pomóć (album „Adopcje Wirtualne”), kontaktujecie się z Nami, rozmawiamy o aktualnych potrzebach danego psa, ustalamy szczegóły i działamy! :)</p>
            <h4>CO W ZAMIAN?</h4>
            <p>Musicie sobie Państwo zdawać sprawę, iż adopcja wirtualna jest formą wolontariatu. W zamian za pomoc otrzymuejcie Państwo dozgonną wdzięczność zarówno naszą jak i naszego/Waszego podopiecznego.</p>
            <p>Oczywiście macie Państwo możliwość uczestniczyć w życiu tego psa, zarówno wirtualnie jak i realnie (osoby, które zdecydują się wirtualnie adoptować naszych podopiecznych serdecznie zapraszamy do Ośrodka na spacer ze „swoim” pupilem).</p>
            <p>Adopcja wirtualna to forma pomocy nie wymagająca nawet wstania z fotela. Otwórz serce, pomóż!</p>
            <div className="adoption__contact">
                <h3>Kontakt w sprawie adopcji wirtualnej:</h3>
                <address><a href='mailto:fpz@matuzalki.pl'>e-mail: fpz@matuzalki.pl</a></address>
                <address><a href='tel:+48519499344'>tel.: 519 499 344 (ELA)</a></address>
            </div>
            <div className="home-page__support">
                <strong>Jeżeli nie odbieramy to znaczy, że pracujemy, karmimy sforę, lub jesteśmy u veta - wtedy prosimy o SMSa z hasłem "ADOPCJA_WIRTUALNA_imię psa" - oddzwonimy</strong>
            </div>
            <h3>Pieski, które czekają na Twoją pomoc:</h3>
            <div className="dogs-box">
                {dogsToDisplay}
            </div>
            <Button text="Pieski gotowe do standardowej adopcji również można wespierać wirtualnie do czasu znalezienia nowego domu :)" addClass="outstanding" addClass2="center" link="/adoptuj"/>
        </main>
    );
}
 
export default VirtualAdoption;