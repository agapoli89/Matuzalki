import { useLocation, useHistory } from "react-router-dom";
import { useState } from "react";

import { dogs } from './DogsData';
import Button from "../../components/Button/Button";
import Gallery from "../../components/Gallery/Gallery";
import PopupBox from "../../components/PopupBox/PopupBox";
import './Dog.scss';

import maksio from '../../images/dogs/behindTheRainbow/maksio.jpg';

import stella1 from '../../images/dogs/toGallery/stella1.png';
import stella2 from '../../images/dogs/toGallery/stella2.jpg';

const Dog = () => {

    const location = useLocation().pathname;
    const history = useHistory();
    const dog = dogs.find(({url}) => url === location.slice(5));
    const { dogName, dogStatus, par1, par2, url, strongInfo, link, linkInfo, link2, linkInfo2, isGallery, imgExtention } = dog;
    const handleGoBack = history.goBack;

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
                <div className="dog-page__img-box"><img src={require(`../../images/dogs/${dogStatus}/${url}.${imgExtention}`).default} alt={dogName}/>
                </div>
                {dogStatus === "withHome" && <div className="mission-completed">
                    <span>Misja: Nowy dom -</span>
                    <strong>- WYKONANA!</strong>
                </div>}
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