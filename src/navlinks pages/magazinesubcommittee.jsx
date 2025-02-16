import React from 'react'
import myStyles from './magazinesubcommittee.module.css'

export function Magazinesubcommittee() {
    return (
        <div className={myStyles.container}>
            <h2 className={myStyles.section_title}>Magazine Sub-Committee</h2>

            <div className={myStyles.governing_staffs}>
                <div className={myStyles.staffs}>
                    <h5>Magazine Sub-Committee</h5>
                    <p>Dr. Shreya Chakravorty<br /><span className={myStyles.designation}>Associate Prof., Dept. of English</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Magazine Sub-Committee</h5>
                    <p>Dr. Papia Das<br /><span className={myStyles.designation}>Asst. Prof., Dept. of Zoology</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Magazine Sub-Committee</h5>
                    <p>Smita Sahu<br /><span className={myStyles.designation}>Asst. Prof., Dept. of Food & Nutrition</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Magazine Sub-Committee</h5>
                    <p>Dr. Reshmi Sarkar<br /><span className={myStyles.designation}>Convenor, Librarian</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Magazine Sub-Committee</h5>
                    <p>Sujit Kumar Mahato<br /><span className={myStyles.designation}>Asst. Prof., Dept. of Commerce</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Magazine Sub-Committee</h5>
                    <p>Payel Roy<br /><span className={myStyles.designation}>SACT-II, Dept. of Political Science</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Magazine Sub-Committee</h5>
                    <p>Sumana Das<br /><span className={myStyles.designation}>SACT-II, Dept. of Geography</span></p>
                </div>
            </div>
        </div>
    )
}