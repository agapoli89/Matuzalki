import { Link } from 'react-router-dom';
import { dogs } from './DogsData';

import manius from '../../images/dogs/behindTheRainbow/manius.jpg';
import maksio from '../../images/dogs/behindTheRainbow/maksio.jpg';
import sylwek from '../../images/dogs/behindTheRainbow/sylwek.jpg';
import ignas from '../../images/dogs/behindTheRainbow/ignas.jpg';
import misiek from '../../images/dogs/behindTheRainbow/misiek.jpg';
import wicia from '../../images/dogs/behindTheRainbow/vicia.jpg';
import diana from '../../images/dogs/behindTheRainbow/diana.jpg';
import pluto from '../../images/dogs/behindTheRainbow/pluto.jpg';
import piotrus from '../../images/dogs/behindTheRainbow/piotrus.jpg';

import './Dogs.scss';

const BehindTheRainbow = () => {

    const dogsBehindTheRainbow = dogs.filter(({dogStatus}) => dogStatus === "behindTheRainbow");

    const imgToDisplay = (url) => {
        switch (url) {
            case "/manius":
                return manius;
            case "/maksio":
                return maksio;
            case "/sylwek":
                return sylwek;
            case "/ignas":
                return ignas;
            case "/misiek":
                return misiek;
            case "/wicia":
                return wicia;
            case "/diana":
                return diana;
            case "/pluto":
                return pluto;
            case "/piotrus":
                return piotrus;
            default:
                return maksio;
        }
    }

    const dogsToDisplay = dogsBehindTheRainbow.map(({id, dogName, url})=> (
        <Link key={id} to={`${url}`} className="dog">
            <div className="dog__picture"><img src={imgToDisplay(url)} alt={dogName} /></div>
            <p className="dog__text">{dogName}</p>
        </Link>
    ))

    return (  
        <main className="article article--justify">
            <h2>Po drugiej stronie tęczy...</h2>
            <p>Zawsze jest nam smutno kiedy odchodzi Matuzalek, ale wiemy że to nieuniknione. Cieszymy się,że choć na chwilkę daliśmy mu poczuć co to człowiecza miłość i szacunek dla zwierzęcia. Do zobaczenia Aniołki :(.</p>
            <div className="dogs-box">
                {dogsToDisplay}
            </div>
        </main>
    );
}
 
export default BehindTheRainbow;