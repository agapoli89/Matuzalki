import { useState } from "react";
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Gallery from "../../components/Gallery/Gallery";
import { IoHeart } from "react-icons/io5";
import { dogs } from './DogsData';

import './Dogs.scss';

import kostek from '../../images/dogs/withHome/kostek.jpg';
import pepe from '../../images/dogs/withHome/pepe.jpg';
import pepezpiotrkiem from '../../images/dogs/withHome/pepezpiotrkiem.jpg';
import pepezul from '../../images/dogs/withHome/pepezul.jpg';
import lalawparku from '../../images/dogs/withHome/lalkawparku.jpg';
import lalanapleckach from '../../images/dogs/withHome/lalkanapleckach.jpg';
import lalawsamochodzie from '../../images/dogs/withHome/lalkawsamochodzie.jpg';
import szymonkolderka from '../../images/dogs/withHome/szymonkolderka.jpg';
import szymon from '../../images/dogs/withHome/szymon.jpg';

const images = [
    {
        name: "julka1",
        caption: "Julka - teraz już LUSIA!" 
    },
    {
        name: "julka2",
        caption: "...pies obronny!" 
    },
    {
        name: "stefanek1",
        caption: "Stefanek rozpoczyna radosne życie..." 
    },
    {
        name: "stefanek2",
        caption: "...w prawdziwym łóżeczku :)" 
    },
    {
        name: "pepa1",
        caption: "Pepa też ma już swój szczęśliwy dom!" 
    },
    {
        name: "tytus1",
        caption: "Tytus zamieszkał przy górce Słowiańskiej." 
    },
    {
        name: "lucek1",
        caption: "Lucek (vel Ciapek) swoje szczęście odnalazł w Kiełczowie" 
    },
    {
        name: "kotek1",
        caption: "Happy endem skończyła się też historia kociej mamy i jej trójki małych kociąt..." 
    },
    {
        name: "kotek2",
        caption: "...tutaj już w drodze do nowych domków :)" 
    },
    {
        name: "nina1",
        caption: "Nina" 
    },
    {
        name: "misza1",
        caption: "Misza" 
    },
    {
        name: "kostek1",
        caption: "Kostek - jego historię opisaliśmy niżej :)" 
    },
    {
        name: "pepe1",
        caption: "Pepe w blasku zachodzącego słońca... (jego historię również przeczytasz poniżej :))" 
    },
    {
        name: "lala1",
        caption: "Lala (z opowieści poniżej) w swoim naturalnym środowisku ;)" 
    },
    {
        name: "szymon1",
        caption: "Szymon w parku."
    }
];

const TheyFoundHome = () => {

    const imagesToGallery = images.map(({name}) => require(`../../images/dogs/withHome/toGallery/${name}.jpg`).default);
    const captions = images.map(({caption}) => caption);

    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const handleIsGalleryOpen = () => setIsGalleryOpen(prev => !prev)

    const dogsWithHome = dogs.filter(({dogStatus}) => dogStatus === "withHome");
    const dogsToDisplay = dogsWithHome.map(({id, dogName, url, imgExtention})=> (
        <Link key={id} to={`psy/${url}`} className="dog dog--to-adopt">
            <div className="dog__picture"><img src={require(`../../images/dogs/withHome/${url}.${imgExtention}`).default} alt={dogName} /></div>
            <p className="dog__text">{dogName}</p>
        </Link>
    ))

    return (  
        <main className="article article--justify">
            <h2>Im się udało!</h2>
            <p>Za każdym razem kiedy jakiś Matuzalek znajduje kochający dom, nasze serca rosną. Daje nam to pewność, że nasza praca ma sens. Razem możemy sprawić by ta sekcja stale się rozrastała <IoHeart /></p>
            <Button text="Zobacz galerię szczęśliwych Matuzalków" addClass="center" handleClick={handleIsGalleryOpen}/>
            {isGalleryOpen && <Gallery handleIsGalleryOpen={handleIsGalleryOpen} images={imagesToGallery} captions={captions}/>}
            <h3>A oto kilka radosnych historii. Czekamy również na opowieść od Ciebie :)</h3>
            <div className="they-found-home">
                <h4 className="they-found-home__dog-history">Kostek...</h4>
                <img src={kostek} alt="Kostek z mamą" className="they-found-home__dog-image"/>
                <p className="they-found-home__dog-history">Przygarnięty pod koniec marca 2016 roku z wrocławskiego schroniska senior, odzyskał nadzieję i chęć do życia. Każdego dnia zaskakiwał nas udowadniając, że matuzalek po przejściach, chorobach i ciężkim życiu potrafi cieszyć się i być szczęśliwym.</p>
                <p className="they-found-home__dog-history">Kostuś miał zostać z nami do końca.... a tu nagle, w pewną kwietniową sobotę, pojawili się Dominika i Kuba, którzy chcieli "coś" od nas adoptować. Kiedy zobaczyli Kostka, jego otwartość, radość i chęć kontaktu zapragnęli go mieć!!! Tym samym Kostek dostał od losu cudowny, kochający dom na spokojną i bezpieczną starość.</p>
                <p className="they-found-home__dog-history">Tym samym już w niedzielę rano Kostek mógł spróbować jak wygodne jest jego nowe, własne (!!!) kojo. Wraz z dwoma kotami zamieszkał w ...Szwajcarii :) ale będzie też często zaglądał do Wrocławia.</p>
            </div>
            <div className="they-found-home">
                <h4 className="they-found-home__dog-history">Czerwiec 2016 - "Pepe jest mój!"</h4>
                <img src={pepe} alt="Pepe" className="they-found-home__dog-image they-found-home__dog-image--right"/>
                <p className="they-found-home__dog-history">Jesteśmy trochę obłąkani, to przyznajemy bez bicia i zbędnej skromności. Ale dobrze nam z tym. Dlaczego od tego zaczynam? Bo z doświadczenia wiem, że tak właśnie stwierdzają ludzie, którzy nas poznają, a wraz z nami nasz domowy inwentarz. Zaczęło się od Gazozo (dawniej Yulka od Mirona), później był Kitajczyk (kot - myśleliśmy, że ratujemy go od beznadziei życia na wsi, a tak na prawdę - jak się okazało później - go porwaliśmy. Dluuuuga historia i lepiej, żeby pozostała nieopowiedziana). Potem pojawił się Fakolczyk (kot, który razem z dwiema swoimi siostrami trafił do nas jako tymczas i tak już został - siostry poszły dalej). I w końcu Pepe.</p>
                <img src={pepezpiotrkiem} alt="Pepe z Piotrkiem" className="they-found-home__dog-image they-found-home__dog-image"/>
                <p className="they-found-home__dog-history">Często znajdowałam ja, albo Piotr jakieś zagubione piesony. Czasem zostawały na kilka godzin, aż właściciel się znalazł, czasem na dobę, ale zawsze po takiej przygodzie mówiliśmy sobie: "Nieeee, drugi pies, przy zazdrosnej Gazozo, i kotach, które nie każdy pies toleruje, to najgorszy pomysł". Nie mniej, gdy podczas rowerowego pikniku zobaczyliśmy Pepe, takie argumenty przestały być ważne. Piotrek jako pierwszy stwierdził, że Pepe jest nasz. Ja, jako że zdrowo w związku odgrywać jest w kluczowych kwestiach role dobrego i złego gliny, mówiłam, że absolutnie nie. Jednak gdy Piotrek powiedział, że wziął Pepe, a potem okazało, się, że tylko żartował, jakoś mi się smutno zrobiło, że jednak nie i postanowiłam, że bierzemy kochać tego pieska!</p>
                <p className="they-found-home__dog-history">Początki były oczywiście trudne. To w końcu stworzenie, które jak każdy potrzebuje się zaaklimatyzować .. i w sumie my do niego również. Pozostali domownicy po obwąchaniu, poprychaniu, sprawdzeniu na co można sobie pozwolić, już się oswoili, my również i jest najlepiej!!!!</p>
                <img src={pepezul} alt="Pepe z mamą" className="they-found-home__dog-image they-found-home__dog-image--right"/>
                <p className="they-found-home__dog-history">Pepe to piesek kochany, spokojny, taki mały myśliciel. Czasem się nad czymś zatrybi i tak stanie i stoi i myśli. Siostra moja, będąc opiekunką tymczasową, zawiesiła mu przez to na obróżce odblask rowerowy, w razie gdyby chciał nagle się zamyślić na jezdni. Pepe jest pieskiem starszym, dzięki czemu szybko zaaklimatyzował się w naszym zezwierzęconym domu, bo jest spokojny, stonowany i rozumie więcej niż szczeniak, który wszędzie musi wsadzić nochal. Papiery adopcyjne podpisałam ja. Gazozo jest zapisana na Piotrka, więc teraz jest po równo, poza tym ja walczyłam o Pepe jak lew, gdy Piotrkiem zaczęły targać wątpliwości. Teraz jest idealnie, rano wstaje w prawdzie pół godziny wcześniej, żeby razem z Pio wyprowadzić oba psy (wcześniej z Gazo chodził w tygodniu tylko Piotrek), ale taki poranny spacer okazał się czystą przyjemnością</p>
                <p className="they-found-home__dog-history">Jestem bardzo, BARDZO szczęśliwa z Pepka. Szczególnie, że nigdy nie miałam psa z ogonkiem (Gazo nie ma), a to najwspanialsze uczucie, gdy widzisz swojego kochanego piesona merdającego ogonkiem na Twój widok!! :)</p>
                <p className="they-found-home__dog-history">Ula i Piotrek</p>
            </div>
            <div className="they-found-home">
                <h4 className="they-found-home__dog-history">Czerwiec 2016 roku okazał się szczęśliwy również dla Lali</h4>
                <img src={lalanapleckach} alt="Pepe z mamą" className="they-found-home__dog-image"/>
                <p className="they-found-home__dog-history">LALĘ poznaliśmy podczas wolontariatu w Fundacji Matuzalki. Rudo – biały piesek z ogromną miłością do człowieka i potrzebą posiadania kogoś bliskiego na wyłączność. I tak to się zaczęło....:-) LALA trafiła do naszej patchworkowej rodziny osobników „po przejściach”, w skład której wchodzi dwoje ludzi (czyli MY) oraz dwa koty: biały Zorro i brązowo-szary Skipper. Gdy przyszliśmy po raz pierwszy z Lalą do domu to Zorro rozpoczął pod drzwiami wejściowymi akcję obrony terytorium. Efekt całego zajćia był następujący: koty zamieszkały w wannie a LALA przejęła sofkę. Przez pierwszy tydzień koty w panice uciekały gdy pojawiala sie LALA (poruszały sie tylko po 1 piętrze), co z koleji ją prowokowalo do pogoni. Relacja LALI z kotami była naszym głównym zmartwieniem.</p>
                <img src={lalawsamochodzie} alt="Pepe z Piotrkiem" className="they-found-home__dog-image they-found-home__dog-image--right"/>
                <p className="they-found-home__dog-history">Na szczęście nikt nikogo nie zjadł, krew się nie lała a mieszkanie nie zostało zdewastowane. Jedyna strata to stłuczona przez Skippera szklanka – sztuk 1.Po tygodniu ustawiania hierarchii oraz pracy z LALĄ i kotami nastapił przełom. Koty zeszły na dół a ja mogłam siedzieć ze Skipperem na kolanach obok leżącej LALI. Szczerze mówić, to myślalam, że taki obrazek będzie możliwy może po 2 latach.LALA jest bardzo fajnym, kochanym i wdzięcznym psem. Pilnuje nas gdy śpimy, chowa sie pod łóżko podczas burzy, a gdy już wyjdzie przytula się do nas w łóżku. Zupełnie jak my, LALA lubi spacery po bezdrożach . Tak samo jak MY potrafi się upierać i nakręcic. Ale to bardzo grzeczny i wpatrzony w człowieka Zwierzak. Na spacerach sama pilnuje się swojego człowieka, daje się bez większych problemów przywołać, raczej nie zaczepia innych psów. Spokojnie zostaje w domu gdy my idziemy do pracy. Nie ma z nią żadnych kłopotów.</p>
                <img src={lalawparku} alt="Pepe" className="they-found-home__dog-image"/>
                <p className="they-found-home__dog-history">Oboje uważamy, że decyzja o adopcji LALI to jedna z naszych najlepszych decyzji. Relacja człowieka z psem jest nieco inna niż z kotem czy drugim człowiekiem. Nie chcę powiedzieć, że lepsza czy gorsza lecz inna. To rozwijające doświadczenie. Dzięki LALI spotykamy też sporo pozytywnych, zakręconych ludzi i to jest dla nas także bardzo wartościowe.</p>
                <p className="they-found-home__dog-history">Basia i Marcin</p>
            </div>
            <div className="they-found-home">
                <h4 className="they-found-home__dog-history">Lipiec 2016 - Historia jakich mało</h4>
                <img src={szymonkolderka} alt="Pepe z mamą" className="they-found-home__dog-image they-found-home__dog-image--right"/>
                <p className="they-found-home__dog-history">Szymon, wolnożyjący pies z ul. Truskawkowej, który musiał zniknąć z tej ulicy, z powodu nowego właściciela jednego z domów, który chciał go zabić. Musiał nauczyć się życia w Ośrodku. Później baaaaardzo długo czekał na ten jeden jedyny dom.</p>
                <img src={szymon} alt="Pepe z Piotrkiem" className="they-found-home__dog-image"/>
                <p className="they-found-home__dog-history">Szymek i jego nowi właściciele udowonili, że wszystko jest możliwe. "Szymon jest cudowny! To najfajniejszy i najmądrzejszy piesek z jakim kiedykolwiek mieliśmy do czynienia. Jest niesamowicie grzeczny i zawsze wie jak się zachować. Odkąd jest u nas zwiedził już trochę Polski i żaden środek transportu nie jest mu obcy, wszędzie gdzie się pojawia wzbudza zachwyt :). Odkryliśmy także jego zamiłowanie do kąpieli błotnych i śmiemy przypuszczać, że jest to pies błotno-lądowy :). Nie mogliśmy lepiej trafić jeśli chodzi o adopcje pieska i jeszcze raz ogromnie dziękujemy ekipie Matuzalki za przechowanie dla nas takiego skarbu :):):)"</p>
                <p className="they-found-home__dog-history">Ola i Adam</p>
            </div>
            <h3>I jeszcze więcej szczęściarzy:</h3>
            <div className="dogs-box">
                {dogsToDisplay}
            </div>
        </main>
    );
}
 
export default TheyFoundHome;