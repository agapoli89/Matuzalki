import { useState } from "react";
import Button from "../../components/Button/Button";
import Gallery from "../../components/Gallery/Gallery";

//based on: https://shaquillegalimba.medium.com/how-to-import-multiple-images-in-react-1936efeeae7b

function importAll(r) {
	let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
	return images
}
const images = importAll(require.context('../../images/ourPlace', false, /\.(png|jpe?g|svg)$/));

const captions = [
    "25 luty 2016, Mellon w akcji ...:)", 
    "25 luty 2016, Mellon w akcji c.d.", 
    "...", 
    "CREDIT SUISSE - fundament pierwszego pawilonu", 
    "CREDIT SUISSE - fundament pierwszego pawilonu c.d.", 
    "Efekty pierwszych prac.", 
    "Kilka ujęć z góry", 
    "...", 
    "VOLVO dla Matuzalków", 
    "...", 
    "...",
    "...",
    "10 czerwca 2017, rozpoczęcie budowy pawilonu nr 2...",
    "... przy nieocenionej pomocy Volvo Polska sp. z o.o...",
    "...", 
    "...",
    "...",
    "...", 
    "...",
    "...",
    "...", 
    "...",
    "...",
    "...", 
    "...",
    "...",
    "...", 
    "...",
    "...",
    "I jeszcze w tym samym miesiącu ruszyły prace nad pawilonem nr 3...",
    "...tutaj pomocne okazało się 1250zł., które to Wy wpłaciliście w czasie zorganizowanej przez nas zbiórki :)...",
    "...prawie 800zł. dołożyło Credit Suisse...",
    "i tak oto elemnty konstrukcyjne ścian zostały spłacone! :)",
    "A oto piec podarowany nam przez Grażynę i Andrzeja Zygan z Dobroszyc...",
    "...komin do pieca postawiliśmy dzięki wsparciu finansowemu psioluby Kasi Kossobudzkiej i przyjaciół...",
    "...Anita Sobol zakupiła nam prawie 300m2 specjalnej folii zbrojonej, którą pokryliśmy dach pawilonów, aby pieski miały cieplutko",
    "A tu jeszcze obraz z jesieni 2017.",
    "Dzięki firmie skladokien.pl z Bykowa oraz Biance Burzyńskiej dostaliśmy również super ofertę na stolarkę okienną...",
    "...mogliśmy więc zamontować pierwsze okna w pawilonach!",
    "Maj 2018 - i znowu ogromne wsparcie z Credit Suisse IT...",
    "na zdjęciach widoczne są efekty prac ociepleniowych - wełna mineralna na ścianach...",
    "...ekipie zawdzięczamy także wykarczowanie 150 metrowego pasa pod płot oraz ogarnięcie kojców i wyczesanie psiaków. Dziękujemy!",
    "Czerwiec 2018 - montaż pokrycia dachów na pawilonach dla zwierząt! (komplet paneli blachodachówkowych z obróbkami i dostawą w bardzo promocyjnej cenie dostaliśmy dzięki Pani Magdzie z Millenium Projekt (www.mp24.pl) z Długołęki, sam montaż dachu robiliśmy własnymi siłami)",
    "Stan z lipca 2018 roku",
];

const OurPlace = () => {

    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const handleIsGalleryOpen = () => setIsGalleryOpen(prev => !prev)

    const imagesSize = Object.keys(images).length;
    const imagesToGallery = [];

    for (let i=1; i<=imagesSize; i++) {
        imagesToGallery.push(images[`build${i}.jpg`].default)
    }

    return (  
        <main className="article article--justify">
            <h2>Nasze miejsce</h2>
            <p>Raków - urokliwa wieś pod Wrocławiem. To tutaj wybudowaliśmy dom i tutaj postanowiliśmy prowadzić nasz ośrodek. Początkowo warunki w jakich mieszkały nasze psy można było określić jako prowizoryczne :) Prędzej czy później musiała zostać podjęta decyzja o rozbudowie...</p>
            <p>I tak oto, w 2016 roku ruszyła budowa 3 pawilonów i 2 wiat o łącznej powierzchni 250m2. Inwestycja odbywała się systemem gospodarczym, czyli własnymi rękami, a finansowana była ze środków prywatnych członków Fundacji, wpłat celowych oraz przy niebagatelnym wsparciu zwierzolubów z Credit Susisse IT Wrocław i Volvo Polska Sp. z o.o. oraz wielu wielu innych PSIjaciół.</p>
            <p>Teraz już bez zbędnej skromności możemy szczycić się, że mamy PSI PAWILON z prawdziwego zdarzenia, a w nim:</p>
            <ul>
                <li>ogrzewane pokoje noclegowe,</li>
                <li>kuchnia z miejscem na psią wanne,</li>
                <li>magazyn karmy,</li>
                <li>ambulatorium + biurko fundacji,</li>
                <li>izolatka (kwarantanna),</li>
                <li>dwie wiaty na sprzęt, słomę i dary,</li>
                <li>miejsce magazynowe (poddasze),</li>
                <li>pokój dla wolontariuszy (poddasze),</li>
            </ul>
            <Button text={"Zobacz jak to wszystko powstawało"} handleClick={handleIsGalleryOpen} addClass={"center"}/>
            {isGalleryOpen && <Gallery handleIsGalleryOpen={handleIsGalleryOpen} images={imagesToGallery} captions={captions}/>}
        </main>
    );
}
 
export default OurPlace;