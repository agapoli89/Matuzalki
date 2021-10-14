import { useState } from 'react';

import './Reports.scss';

const Reports = () => {

    const [isReportOpen, setIsReportOpen] = useState(false);
    const handleReportOpen = (e) => {
        const year = e.target.innerText;
        setIsReportOpen(year);  

        setTimeout(() => {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
        },50)
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
                    <a href={isReportOpen === '2016' || isReportOpen === '2017' || isReportOpen === '2018' ? require(`../../files/fin${isReportOpen}.rar`).default : require(`../../files/fin${isReportOpen}.pdf`).default} className="report__item">Finansowe</a>
                    <a href={isReportOpen === '2016' || isReportOpen === '2017' || isReportOpen === '2018' ? require(`../../files/mer${isReportOpen}.rar`).default : require(`../../files/mer${isReportOpen}.pdf`).default} className="report__item">Merytoryczne</a>
                </div>
            </>
            )}
        </main>
    );
}
 
export default Reports;