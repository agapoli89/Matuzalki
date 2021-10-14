import { useState } from "react";
import Button from "../../components/Button/Button";
import Gallery from "../../components/Gallery/Gallery";

const images = [
    { img: "1",
      caption: "25 luty 2016, Mellon w akcji ...:)", 
    },
    { img: "2",
      caption: "25 luty 2016, Mellon w akcji c.d.", 
    },
    { img: "3",
      caption: "...", 
    },
    { img: "4",
      caption: "CREDIT SUISSE - fundament pierwszego pawilonu", 
    },
    { img: "5",
      caption: "CREDIT SUISSE - fundament pierwszego pawilonu c.d.", 
    },
    { img: "6",
      caption: "Efekty pierwszych prac.", 
    },
    { img: "7",
      caption: "Kilka ujęć z góry", 
    },
    { img: "8",
      caption: "...", 
    },
    { img: "9",
      caption: "VOLVO dla Matuzalków", 
    },
    { img: "10",
      caption: "...", 
    },
    { img: "11",
      caption: "...",
    },
    { img: "12",
      caption: "...",
    },
    { img: "13",
      caption: "10 czerwca 2017, rozpoczęcie budowy pawilonu nr 2...",
    },
    { img: "14",
      caption: "... przy nieocenionej pomocy Volvo Polska sp. z o.o...",
    },
    { img: "15",
      caption: "...", 
    },
    { img: "16",
      caption: "...",
    },
    { img: "17",
      caption: "...",
    },
    { img: "18",
      caption: "...", 
    },
    { img: "19",
      caption: "...",
    },
    { img: "20",
      caption: "...",
    },
    { img: "21",
      caption: "...", 
    },
    { img: "22",
      caption: "...",
    },
    { img: "23",
      caption: "...",
    },
    { img: "24",
      caption: "...", 
    },
    { img: "25",
      caption: "...",
    },
    { img: "26",
      caption: "...",
    },
    { img: "27",
      caption: "...", 
    },
    { img: "28",
      caption: "...",
    },
    { img: "29",
      caption: "...",
    },
    { img: "30",
      caption: "I jeszcze w tym samym miesiącu ruszyły prace nad pawilonem nr 3...",
    },
    { img: "31",
      caption: "...tutaj pomocne okazało się 1250zł., które to Wy wpłaciliście w czasie zorganizowanej przez nas zbiórki :)...",
    },
    { img: "32",
      caption: "...prawie 800zł. dołożyło Credit Suisse...",
    },
    { img: "33",
      caption: "i tak oto elemnty konstrukcyjne ścian zostały spłacone! :)",
    },
    { img: "34",
      caption: "A oto piec podarowany nam przez Grażynę i Andrzeja Zygan z Dobroszyc...",
    },
    { img: "35",
      caption: "...komin do pieca postawiliśmy dzięki wsparciu finansowemu psioluby Kasi Kossobudzkiej i przyjaciół...",
    },
    { img: "36",
      caption: "...Anita Sobol zakupiła nam prawie 300m2 specjalnej folii zbrojonej, którą pokryliśmy dach pawilonów, aby pieski miały cieplutko",
    },
    { img: "37",
      caption: "A tu jeszcze obraz z jesieni 2017.",
    },
    { img: "38",
      caption: "Dzięki firmie skladokien.pl z Bykowa oraz Biance Burzyńskiej dostaliśmy również super ofertę na stolarkę okienną...",
    },
    { img: "39",
      caption: "...mogliśmy więc zamontować pierwsze okna w pawilonach!",
    },
    { img: "40",
      caption: "Maj 2018 - i znowu ogromne wsparcie z Credit Suisse IT...",
    },
    { img: "41",
      caption: "na zdjęciach widoczne są efekty prac ociepleniowych - wełna mineralna na ścianach...",
    },
    { img: "42",
      caption: "...ekipie zawdzięczamy także wykarczowanie 150 metrowego pasa pod płot oraz ogarnięcie kojców i wyczesanie psiaków. Dziękujemy!",
    },
    { img: "43",
      caption: "Czerwiec 2018 - montaż pokrycia dachów na pawilonach dla zwierząt! (komplet paneli blachodachówkowych z obróbkami i dostawą w bardzo promocyjnej cenie dostaliśmy dzięki Pani Magdzie z Millenium Projekt (www.mp24.pl) z Długołęki, sam montaż dachu robiliśmy własnymi siłami)",
    },
    { img: "44",
      caption: "Stan z lipca 2018 roku",
    }
];

const OurPlace = () => {

    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const handleIsGalleryOpen = () => setIsGalleryOpen(prev => !prev)

    const imagesToGallery = images.map(({img}) => require(`../../images/ourPlace/build${img}.jpg`).default);
    const captions = images.map(({caption}) => caption);

    console.log(imagesToGallery);
    console.log(captions);

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