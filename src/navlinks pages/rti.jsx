import React from 'react'
import myStyles from './rti.module.css'
//rti pdf
import rtiPdf from '../Pdf files/RTI/rti-act.pdf';

export function Rti() {
    return (
        <div className={myStyles.container}>
            <h2 className={myStyles.section_title}>Right to Information</h2>

            <div className={myStyles.grid}>
                <div className={myStyles.card}>
                    <h3>RTI Act 2005 Compliance</h3>
                    <div className={myStyles.point}>
                        <p>
                            Budge Budge College follows the Right to Information Act, 2005 to maintain
                            transparency and accountability in institutional governance.
                        </p>
                        <a href={rtiPdf} download="rti-act.pdf">
                            Download RTI Act Document
                        </a>
                    </div>
                </div>

                <div className={myStyles.card}>
                    <h3>Designated Officers</h3>
                    <div className={myStyles.point}>
                        <table className={myStyles.stats_table}>
                            <thead>
                                <tr>
                                    <th>Designation</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Appellate Authority</td>
                                    <td>
                                        Dr. Debjani Datta, Principal<br />
                                        <a href="mailto:ddebjani1963@gmail.com">ddebjani1963@gmail.com</a><br />
                                        <a href="tel:9874224929">9874224929</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>SPIO</td>
                                    <td>
                                        Dr. Shreya Chakravorty<br />
                                        Asstt. Prof., Dept. of English<br />
                                        <a href="mailto:thisisonni@gmail.com">thisisonni@gmail.com</a><br />
                                        <a href="tel:9007323841">9007323841</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}