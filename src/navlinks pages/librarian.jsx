import React from 'react'
import myStyles from './librarian.module.css'
import Reshmi_Sarkar from '../Pdf files/7517CV - Reshmi Sarkar.pdf';
export function Librarian() {
    return (
        <>
            <div className={myStyles.container}>
                <h2 className={myStyles.section_title}>Librarian</h2>

                <div className={myStyles.librarian}>
                    <div className={myStyles.staffs}>
                        <h5>DR. RESHMI SARKAR</h5>
                        <div className={myStyles.details}>
                            <p><span className={myStyles.highlight}>Designation:</span> Librarian</p>
                            <p><span className={myStyles.highlight}>Qualification:</span> M.LIS., Ph.D</p>
                            <p><span className={myStyles.highlight}>Resume:</span><a href={Reshmi_Sarkar} download="7517CV - Reshmi Sarkar.pdf"> Download Resume</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
