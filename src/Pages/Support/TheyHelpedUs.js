import butcherS from '../../images/support/butchers.png';
import kamilHala from '../../images/support/kamil_hala.png';
import threeM from '../../images/support/3m.png';
import bnyMellon from '../../images/support/bnymellon.png';
import creditSuisse from '../../images/support/creditsuisse.png';
import ibisNovotel from '../../images/support/ibisnovotel.png';
import monikaGaz from '../../images/support/monikagaz.png';
import volvo from '../../images/support/volvo.png';

import { doners } from './TheyHelpedUsData';

import './TheyHelpedUs.scss';

const TheyHelpedUs = () => {

    const imgToDisplay = (img) => {
        switch (img) {
            case "butcherS":
                return butcherS;
            case "kamil_hala":
                return kamilHala;
            case "3m":
                return threeM;
            case "bnymellon":
                return bnyMellon;
            case "creditsuisse":
                return creditSuisse;
            case "ibisnovotel":
                return ibisNovotel;
            case "monikagaz":
                return monikaGaz;
            case "volvo":
                return volvo;
            default:
                return volvo;
        }
    }

    const donersToDisplay = doners.map(({ id, title, href, img }) => (
            <a key={id} href={href} target="_blank" rel="noreferrer" className="support__donor">
                <figure className="support__donor__figcaption">
                    <img src={imgToDisplay(img)} alt="Butcher's" />
                    <figcaption className="support__donor__description">{title}</figcaption>
                </figure>
            </a>
    ))

    return (  
        <main className="article article--justify">
            <h2>Oni nas wsparli</h2>
            <h4>Wspierają, dowożą karmę, koce/ręczniki, wszelkie psie akcesoria, sprzątają, pielęgnują zwierzęta, budują z nami budynki dla zwierząt. Są zawsze, gdy potrzebna jest pomoc. Nigdy nie odmawiają. Zawsze gotowi, by nieść pomoc komuś, kto nie potrafi obronić się sam…</h4>
            <h4>Bez nich nie mielibyśmy racji bytu. Fundacja Pomocy Zwierzętom „Matuzalki” to nasze wspólne dzieło. Poznajcie ich:</h4>
            <div className="support__donors-box">
                {donersToDisplay}
            </div>
        </main>
    );
}
 
export default TheyHelpedUs;