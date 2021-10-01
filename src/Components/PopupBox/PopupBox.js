import React from 'react';
import Popup from 'reactjs-popup';
import "./PopupBox.scss";

const PopupBox = ({text, dogName}) => {

    const content = (
        <>
            <div className="modal__content">
                {text === "Adoptuj wirtualnie" && <>
                    <p>Adoptuj wirtualnie, wpłacając wybraną przez siebie kwotę na konto nr: <strong>57 1050 1575 1000 0090 3092 7736</strong>, z dopiskiem: <strong>{dogName}/adopcja wirtualna</strong></p>
                </>}
                {text === "Adoptuj" ? <p>Napisz lub zadzwoń:</p> : <p>By dowiedzieć się czego {dogName} aktualnie potrzebuje, skontaktuj się z nami. Porozmawiamy!</p>}
                <address><a href='mailto:fpz@matuzalki.pl'>e-mail: fpz@matuzalki.pl</a></address>
                <address><a href='tel:+48519499344'>tel.: 519 499 344 (ELA)</a></address>
                <p>
                    (Jeżeli nie odbieramy, prosimy o&nbsp;SMSa z&nbsp;hasłem "ADOPCJA_{text === "Adoptuj wirtualnie" && "WIRTUALNA_"}{dogName.toUpperCase()}" - oddzwonimy)
                </p>
            </div>
        </>
    ) 

    return (  
        <Popup
            trigger={<button className="button"> {text} </button>}
            modal
            lockScroll
        >
            {close => (
                <div className="modal">
                <button className="modal__close" onClick={close}>
                &times;
                </button>
                <h2 className="modal__header">Dziękujemy! Jesteś już o krok by odmienić psie życie i&nbsp;zyskać prawdziwego PSIjaciela&nbsp;:)</h2>
                {content}
            </div>
            )}
        </Popup>
    );
}
 
export default PopupBox;