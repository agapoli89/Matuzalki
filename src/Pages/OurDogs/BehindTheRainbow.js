import { Link } from 'react-router-dom';
import { dogs } from './DogsData';

import './Dogs.scss';

const BehindTheRainbow = () => {
    
    const dogsBehindTheRainbow = dogs.filter(({dogStatus}) => dogStatus === "behindTheRainbow");
    const dogsToDisplay = dogsBehindTheRainbow.map(({id, dogName, url, imgExtention})=> (
        <Link key={id} to={`psy/${url}`} className="dog">
            <div className="dog__picture"><img src={require(`../../images/dogs/behindTheRainbow/${url}.${imgExtention}`).default} alt={dogName} /></div>
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