import React from 'react'
import myStyles from './sportssubcommittee.module.css'

export function Sportssubcommittee() {
    return (
        <div className={myStyles.container}>
            <h2 className={myStyles.section_title}>Sports Sub-Committee</h2>

            <div className={myStyles.governing_staffs}>
                <div className={myStyles.staffs}>
                    <h5>Sports Sub-Committee</h5>
                    <p>Dr. Dipak Mandal<br /><span className={myStyles.designation}>Associate Prof., Dept. of History</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Sports Sub-Committee</h5>
                    <p>Sajid Qamar<br /><span className={myStyles.designation}>Asst. Prof., Dept. of Geography</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Sports Sub-Committee</h5>
                    <p>Sujit Kumar Mahato<br /><span className={myStyles.designation}>Asst. Prof., Dept. of Commerce</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Sports Sub-Committee</h5>
                    <p>Mriganka Mallick<br /><span className={myStyles.designation}>SACT-II, Dept. of Commerce</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Sports Sub-Committee</h5>
                    <p>Raj Kumar Shaw<br /><span className={myStyles.designation}>SACT-II, Dept. of Psychology</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Sports Sub-Committee</h5>
                    <p>Sumit Santra<br /><span className={myStyles.designation}>SACT-II, Dept. of History</span></p>
                </div>
            </div>
        </div>
    )
}