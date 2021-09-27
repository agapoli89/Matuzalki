import { useState } from "react";
import Gallery from "../../Components/Gallery/Gallery";
import Button from "../../Components/Button/Button";

const Jancio = () => {

    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const handleIsGalleryOpen = () => setIsGalleryOpen(prev => !prev)

    return (  
        <main className="article article--justify">
            <h2>Jańcio - samiec alfa naszej sfory. Pies, który nauczył nas rozmawiać ze zwierzętami.</h2>
            <p>Kolejna smutna historia. Jańcio został oskalpowany przez wnyki. Znaleziono go ledwie żywego na polu gdzieś między Piecowicami a Bielawą. Skrajnie wycieńczony, w aucie tracił przytomność. Okazało się, że jego głowa opleciona jest zaciśniętą stalową linką, która rozcięła policzki i kark uniemożliwiając picie i połykanie pokarmów. Uratowany przez lekarzy z Kliniki Uniwersytetu Przyrodniczego wyrósł na wspaniałego, wiernego psa. Rozcięte policzki nie zrosły sie, więc przy jedzeniu musiał sie trochę napracowywać.</p>
            <p>Swoją siła charakteru, spokojem, psią mądrością i brakiem agresji wzbudzał zaufanie wśród psów. Cała sfora była mu posłuszna i wiernie w niego wpatrzona. To on rozwiązywał konflity między psami, a niesfone i rozrabiające szybko przywoływał do porządku. Przez wiele lat obserwowaliśmy jak komunikuje sie ze zwierzętami, jak przekazuje im informacjie i egzekwuje posłuszeństwo. Jego siła był spokój, opanowanie i konsekwentne i przewidywalne działanie. Ngdy nie wykorzystywał agresji i swojej siły fizycznej.</p>
            <p>Na wiosnę 2017 roku zdiagnozowano mięsaka. Szybka amputacja łapy i nadzieja, że jeszcze nie jest za późno...</p>
            <p>...jesienią 2017 pojawiły się przerzuty do płuc i inych organów. W listopadzie Jańcio pożegnał się ze swoimi braćmi i z nami ....odszedł za Tęczowy Most.</p>
            <Button text={"Zobacz galerię zdjęć Jańcia"} handleClick={handleIsGalleryOpen} addClass={"center"}/>
            {isGalleryOpen && <Gallery handleIsGalleryOpen={handleIsGalleryOpen}/>}
        </main>
    );
}
 
export default Jancio;