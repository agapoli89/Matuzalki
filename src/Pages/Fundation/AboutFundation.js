import Button from '../../Components/Button/Button';
import './AboutFundation.scss';

const AboutFundation = () => {
    return (  
        <main className="article article--justify">
            <h2>O nas</h2>
            <p>Fundacja Pomocy Zwierzętom "Matuzalki" powstała na kanwie wieloletniej działalności Eli i&nbsp;Mirona, celem pomocy zwierzętom domowym, ze&nbsp;szczególnym uwzględnieniem zwierząt w&nbsp;podeszłym wieku. Zaczęło się ćwierć wieku temu, a&nbsp;FPZ Matuzalki jest jedynie kontynuacją wieloletnich poczynań.</p>
            <h5 className="about-fundation__subheader">Co się zmieniło?</h5>
            <p>Absolutnie nic! Nadal będziemy robić co w&nbsp;naszej mocy, aby pomóc tym starym, chorym i&nbsp;niechcianym, ale bez Waszej pomocy nie damy rady i&nbsp;będziemy skazani na porażkę... Stąd, mamy wielką nadzieję, że w&nbsp;miarę swoich możliwości będziecie nas wspierać, tak jak dotychczas :).</p>
            <h5 className="about-fundation__subheader">Ale od początku. Jak to się zaczęło...</h5>
            <p>Swoją przygodę ze zwierzętami zaczęliśmy będąc jeszcze na studiach, czyli jakieś ćwierć wieku temu.
            Wszystko zaczęło się od Alfa- rudego młodzieńca, którego Ela zwinęła do tramwaju na placu Wróblewskiego. Pies biegał między pędzącymi samochodami o&nbsp;mało nie doprowadzając jej do zawału serca. Jednym ruchem wyciągnęła koledze z&nbsp;roku - Marcin Boruciński :) - pasek ze spodni i&nbsp;załapała piesa na tak prowizoryczną, ale skuteczną pętlę. Alficzek żył z&nbsp;nami 17&nbsp;lat&nbsp;:). 
            Pierwszego poważniejszego doświadczenia w&nbsp;pomaganiu zwierzętom nabraliśmy wstępując do opolskiego oddziału TOZ bodajże w 1993 roku. Byliśmy jedynymi młodymi ludźmi i&nbsp;na dodatek jako jedyni mieliśmy auto (ba !!! łada niva :) ) wiec robiliśmy ...wszystko&nbsp;:) ...i&nbsp;zaopatrzenie schroniska m. in. w jedzenie dla zwierząt...i transport psów do veta... i interwencje. Skończyło się na tym, że przez pewien czas "społecznie dyrektorowałem" w opolskim schronisku&nbsp;:) Po zakończeniu przez Elę stażu, i&nbsp;moich studiów wróciliśmy do Wrocławia. 
            Kiedy skończyliśmy budowę domu i&nbsp;przenieśliśmy się do urokliwej wsi pod Długołęką zaczęła się ostra psia i&nbsp;kocia jazda. Co chwilę pod sklepem pojawiała się jakaś wyrzucona z&nbsp;auta bida, lub "coś" przywiązanego do drzewa w&nbsp;lesie, czy potrąconego przez pędzące przez wieś samochody. Ratowaliśmy, leczyliśmy, sterylizowali i&nbsp;szukaliśmy na własną rękę domów adopcyjnych. W połowie 2013 poznaliśmy Asię Kleszcz i&nbsp;tak zaczęła się nasza przygoda z&nbsp;TOZem po raz drugi. Weszliśmy w&nbsp;grupę młodych, pełnych energii i&nbsp;chęci ludzi, którym pomaganie, ratowanie i&nbsp;poświęcenie swojego młodego życia zwierzętom sprawiało wielką radość. Nam też !!! Koniecznością stało się utworzenie domu tymczasowego, który działa i&nbsp;funkcjonuje do dnia dzisiejszego.</p>
            <p>Z racji uzależnienia od endorfin musimy kontynuować pracę na rzecz zwierząt. Chcemy pomagać niechcianym, chorym psim babciom i&nbsp;dziadkom, aby na koniec swojego życia choć przez chwilę czuły się szczęśliwe i&nbsp;bezpiecznie, aby mogły odejść w&nbsp;spokoju, czując w&nbsp;sercu miłość do człowieka.</p>
            <h4>Będzie nam niezwykle miło jeśli i&nbsp;Ty dołączysz do grona miłośników zwierząt i&nbsp;będziesz nam kibicował!</h4>
            <p className="about-fundation__post-scriptum">Ps. Tylko, żeby utopijny opis Cię nie zmylił! Nie jesteśmy cudowni, najlepsi, a&nbsp;czego się nie dotkniemy nie zamieni się w&nbsp;złoto. Też mamy gorszy dzień, jesteśmy niewyspani, łapiemy gumę, z&nbsp;kanap i&nbsp;ubrań ciągle zbieramy sierść. Nie wszystkie nasze psy są najmilsze i&nbsp;najlepiej ułożone na świecie. Też musimy na nie ryknąć, też potrafią się pogryźć. Jesteśmy najnormalniejsi na świecie, reprezentujemy najróżniejsze zawody, poglądy życiowe i&nbsp;te polityczne, mieszkamy w&nbsp;różnych miejsach, łączy nas w&nbsp;zasadzie tylko jedno: miłość do zwierząt i&nbsp;chęć nieniesienia pomocy tym, którzy nie potrafią obronić się sami...
            </p>
            <Button text={"Poznaj bliżej każdego z nas"} link={"/czlonkowie"}/>
        </main>
    );
}
 
export default AboutFundation;