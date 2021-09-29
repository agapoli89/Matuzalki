import { useLocation, useHistory } from "react-router-dom";
import { dogs } from './DogsData';
import Button from "../../Components/Button/Button";
import './Dog.scss';

import manius from '../../images/dogs/behindTheRainbow/manius.jpg';
import maksio from '../../images/dogs/behindTheRainbow/maksio.jpg';
import sylwek from '../../images/dogs/behindTheRainbow/sylwek.jpg';
import ignas from '../../images/dogs/behindTheRainbow/ignas.jpg';
import misiek from '../../images/dogs/behindTheRainbow/misiek.jpg';
import wicia from '../../images/dogs/behindTheRainbow/vicia.jpg';
import diana from '../../images/dogs/behindTheRainbow/diana.jpg';
import pluto from '../../images/dogs/behindTheRainbow/pluto.jpg';
import piotrus from '../../images/dogs/behindTheRainbow/piotrus.jpg';

const Dog = () => {

    const location = useLocation().pathname;
    const dog = dogs.find(({url}) => url === location);
    const { dogName, par1, par2, url } = dog;
    const history = useHistory();
    console.log(history);

    const handleGoBack = history.goBack;

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

    return (  
        <main className="article article--justify">
            <h2>{dogName}</h2>
            <div className="dog-page">
                <div>
                    <p>{par1}</p>
                    <p>{par2}</p>
                </div>
                    <div className="dog-page__img-box"><img src={imgToDisplay(url)} alt={dogName}/></div>
                </div>
                <Button text="Wróć do pozostałych piesków" handleClick={handleGoBack}/>
        </main>
    );
}
 
export default Dog;