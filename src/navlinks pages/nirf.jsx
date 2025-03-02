import React from 'react'
import myStyles from './nirf.module.css'
//nirf pdf
import nirfPdf from '../Pdf files/NIRF/Budge-Budge-College-20250215.pdf';
export function Nirf() {
    return (
        <>
            <div className={myStyles.container}>
                <h2 className={myStyles.section_title}>National Institutional Ranking Framework - NIRF</h2>

                <div className={myStyles.grid}>
                    <div className={myStyles.card}>
                        <h3>National Institutional Ranking Framework - NIRF</h3>
                        <div className={myStyles.point}>
                            <p className={myStyles.highlight}>Download NIRF Document: <a href={nirfPdf} download="Budge-Budge-College-20250215.pdf">Budge-Budge-College-20250215</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
