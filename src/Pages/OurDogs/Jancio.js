import { useState } from "react";
import Gallery from "../../components/Gallery/Gallery";
import Button from "../../components/Button/Button";

const images = [
    {
        url: '1.jpg',
        caption: "Jańcio...",
    },
    {
        url: '2.jpg',
        caption: "...tak wyglądał kiedy do nas trafił...", 
    },
    {
        url: '3.jpg',
        caption: "...został oskalpowany przez wnyki", 
    },
    {
        url: '4.jpg',
        caption: "...", 
    },
    {
        url: '5.jpg',
        caption: "Tutaj już w pełnej formie, kiedy przez lata rządził sforą :)", 
    },
    {
        url: '6.jpg',
        caption: "Niezwłoczna amputacja łapki zaraz po zdiagnozowaniu mięsaka dawała nadzieję na szybki powrót do zdrowia...", 
    },
    {
        url: '7.png',
        caption: "Właśnie tak chcemy go zapamiętać!", 
    },
]

const Jancio = () => {

    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const handleIsGalleryOpen = () => setIsGalleryOpen(prev => !prev);

    const imagesToGallery = images.map(({url}) => require(`../../images/dogs/jancio/jancio${url}`).default);
    const captionsToGallery = images.map(({caption}) => caption);

    return (  
        <main className="article article--justify">
            <h2>Jańcio - samiec alfa naszej sfory. Pies, który nauczył nas rozmawiać ze zwierzętami.</h2>
            <p>Kolejna smutna historia. Jańcio został oskalpowany przez wnyki. Znaleziono go ledwie żywego na polu gdzieś między Piecowicami a Bielawą. Skrajnie wycieńczony, w aucie tracił przytomność. Okazało się, że jego głowa opleciona jest zaciśniętą stalową linką, która rozcięła policzki i kark uniemożliwiając picie i połykanie pokarmów. Uratowany przez lekarzy z Kliniki Uniwersytetu Przyrodniczego wyrósł na wspaniałego, wiernego psa. Rozcięte policzki nie zrosły sie, więc przy jedzeniu musiał sie trochę napracowywać.</p>
            <p>Swoją siła charakteru, spokojem, psią mądrością i brakiem agresji wzbudzał zaufanie wśród psów. Cała sfora była mu posłuszna i wiernie w niego wpatrzona. To on rozwiązywał konflity między psami, a niesfone i rozrabiające szybko przywoływał do porządku. Przez wiele lat obserwowaliśmy jak komunikuje sie ze zwierzętami, jak przekazuje im informacjie i egzekwuje posłuszeństwo. Jego siłą był spokój, opanowanie i konsekwentne i przewidywalne działanie. Ngdy nie wykorzystywał agresji i swojej siły fizycznej.</p>
            <p>Na wiosnę 2017 roku zdiagnozowano mięsaka. Szybka amputacja łapy i nadzieja, że jeszcze nie jest za późno...</p>
            <p>...jesienią 2017 pojawiły się przerzuty do płuc i inych organów. W listopadzie Jańcio pożegnał się ze swoimi braćmi i z nami ....odszedł za Tęczowy Most.</p>
            <Button text={"Zobacz galerię zdjęć Jańcia"} handleClick={handleIsGalleryOpen} addClass={"center"}/>
            {isGalleryOpen && <Gallery handleIsGalleryOpen={handleIsGalleryOpen} images={imagesToGallery} captions={captionsToGallery}/>}
        </main>
    );
}
 
export default Jancio;