import { useLocation, useHistory } from "react-router-dom";
import { useState } from "react";

import { dogs } from './DogsData';
import Button from "../../Components/Button/Button";
import Gallery from "../../Components/Gallery/Gallery";
import PopupBox from "../../Components/PopupBox/PopupBox";
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
import stella from '../../images/dogs/toAdopt/stella.jpg';
import donek from '../../images/dogs/toAdoptVirtually/donek.jpg';

import stella1 from '../../images/dogs/toGallery/stella1.png';
import stella2 from '../../images/dogs/toGallery/stella2.jpg';

const Dog = () => {

    const location = useLocation().pathname;
    const history = useHistory();
    const dog = dogs.find(({url}) => url === location.slice(5));
    const { dogName, dogStatus, par1, par2, url, strongInfo, link, linkInfo, link2, linkInfo2, isGallery } = dog;
    const handleGoBack = history.goBack;

    const imgToDisplay = (url) => {
        switch (url) {
            case "manius":
                return manius;
            case "maksio":
                return maksio;
            case "sylwek":
                return sylwek;
            case "ignas":
                return ignas;
            case "misiek":
                return misiek;
            case "wicia":
                return wicia;
            case "diana":
                return diana;
            case "pluto":
                return pluto;
            case "piotrus":
                return piotrus;
            case "stella":
                return stella;
            case "donek":
                return donek;
            default:
                return maksio;
        }
    }

    const toGallery = (url) => {
        switch (url) {
            case "stella":
                return {
                    img: [stella1, stella2],
                    caption: ["Stella z misiem :)", "I jak jej nie kochać...?"],
                };
            case "maksio":
                return maksio;
            default:
                return {
                    img: [stella1, stella2],
                    caption: ["Stella z misiem :)", "I jak jej nie kochać...?"],
                };
        }
    }

    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const handleIsGalleryOpen = () => setIsGalleryOpen(prev => !prev)

    return (  
        <main className="article article--justify">
            <h2>{dogName}</h2>
            <div className="dog-page">
                <div>
                    <p>{par1}</p>
                    <p>{par2}</p>
                    <strong>{strongInfo}</strong>
                    <p><a href={link} target="_blank" rel="noreferrer">{linkInfo}</a></p>
                    <p><a href={link2} target="_blank" rel="noreferrer">{linkInfo2}</a></p>
                    {isGallery && <Button text={"Zobacz więcej zdjęć"} handleClick={handleIsGalleryOpen} addClass={"center"}/>}
                    {isGalleryOpen && <Gallery handleIsGalleryOpen={handleIsGalleryOpen} images={toGallery(url).img} captions={toGallery(url).caption}/>}
                </div>
                    <div className="dog-page__img-box"><img src={imgToDisplay(url)} alt={dogName}/></div>
                </div>
                <div className="dog-page__buttons-box">
                    {(dogStatus === "toAdopt" || dogStatus === "toAdoptVirtually") && <PopupBox text="Adoptuj wirtualnie" dogName={dogName}/>}
                    {dogStatus === "toAdopt" && <PopupBox text="Adoptuj" dogName={dogName}/>}
                    <Button text="Wróć do pozostałych piesków" handleClick={handleGoBack}/>
                </div>
        </main>
    );
}
 
export default Dog;