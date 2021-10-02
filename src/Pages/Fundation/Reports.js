import { useState } from 'react';

import fin2020 from '../../files/fin2020.pdf';
import fin2019 from '../../files/fin2019.pdf';
import fin2018 from '../../files/fin2018.rar';
import fin2017 from '../../files/fin2017.rar';
import fin2016 from '../../files/fin2016.rar';
import mer2020 from '../../files/mer2020.pdf';
import mer2018 from '../../files/mer2018.rar';
import mer2017 from '../../files/mer2017.rar';
import mer2016 from '../../files/mer2016.rar';

import './Reports.scss';

const Reports = () => {

    const [isReportOpen, setIsReportOpen] = useState(false);
    const handleReportOpen = (e) => {
        const year = e.target.innerText;
        setIsReportOpen(year);  
    }

    const imageFin = (year) => {
        switch (year) {
            case "2020":
                return fin2020;
            case "2019":
                return fin2019;
            case "2018":
                return fin2018;
            case "2017":
                return fin2017;
            case "2016":
                return fin2016;
            default:
                return fin2020;
        }
    }

    const imageMer = (year) => {
        switch (year) {
            case "2020":
                return mer2020;
            case "2019":
                return mer2020;
            case "2018":
                return mer2018;
            case "2017":
                return mer2017;
            case "2016":
                return mer2016;
            default:
                return mer2020;
        }
    }

    const years = [2020, 2019, 2018, 2017, 2016];

    const yearsToDisplay = years.map(year => (
        <button key={year} className="reports__year" onClick={handleReportOpen}>{year}</button>
    ))

    return (  
        <main className="article reports">
            <h2>Sprawozdania finansowe i merytoryczne z działalności Fundacji MATUZALKI</h2>
            <div className="reports__year-box">{yearsToDisplay}</div>
            {isReportOpen && (
            <>
                <h3>Pobierz sprawozdanie za rok: {isReportOpen}</h3>
                <div className="report">
                    <div className="report__item"><a href={imageFin(isReportOpen)} target="_blank" rel="noreferrer">Finansowe</a></div>
                    <div className="report__item"><a href={imageMer(isReportOpen)} target="_blank" rel="noreferrer">Merytoryczne</a></div>
                </div>
            </>
            )}
        </main>
    );
}
 
export default Reports;