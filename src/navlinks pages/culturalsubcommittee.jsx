import React from 'react'
import myStyles from './culturalsubcommittee.module.css'

export function Culturalsubcommittee() {
    return (
        <div className={myStyles.container}>
            <h2 className={myStyles.section_title}>Cultural Sub-Committee</h2>

            <div className={myStyles.governing_staffs}>
                <div className={myStyles.staffs}>
                    <h5>Cultural Sub-Committee</h5>
                    <p>Dr. Priyanka Bose Das<br /><span className={myStyles.designation}>Asst. Prof., Dept. of Education</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Cultural Sub-Committee</h5>
                    <p>Smita Sahu<br /><span className={myStyles.designation}>Asst. Prof., Dept. of Food & Nutrition</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Cultural Sub-Committee</h5>
                    <p>Dr. Samiran Panday<br /><span className={myStyles.designation}>Associate Prof., Dept. of Botany</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Cultural Sub-Committee</h5>
                    <p>Chumki Sarkar<br /><span className={myStyles.designation}>SACT-II, Dept. of History</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Cultural Sub-Committee</h5>
                    <p>Piyali Das<br /><span className={myStyles.designation}>SACT-II, Dept. of Botany</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Cultural Sub-Committee</h5>
                    <p>Sumit Santra<br /><span className={myStyles.designation}>SACT-II, Dept. of History</span></p>
                </div>
            </div>
        </div>
    )
}