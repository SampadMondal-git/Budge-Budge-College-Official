import React from 'react'
import myStyles from './librarysubcommittee.module.css'

export function Librarysubcommittee() {
    return (
        <div className={myStyles.container}>
            <h2 className={myStyles.section_title}>Library Sub-Committee</h2>

            <div className={myStyles.governing_staffs}>
                <div className={myStyles.staffs}>
                    <h5>Library Sub-Committee</h5>
                    <p>Dr. Debjani Datta<br /><span className={myStyles.designation}>Chairperson - Principal</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Library Sub-Committee</h5>
                    <p>Dr. Partha Pratim Chaudhuri<br /><span className={myStyles.designation}>Associate Professor, Dept. of Zoology</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Library Sub-Committee</h5>
                    <p>Dr. Gautam Das<br /><span className={myStyles.designation}>Associate Professor, Dept. of Commerce</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Library Sub-Committee</h5>
                    <p>Dr. Dipak Mandal<br /><span className={myStyles.designation}>Associate Professor, Dept. of History</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Library Sub-Committee</h5>
                    <p>Dr. Shreya Chakravorty<br /><span className={myStyles.designation}>Asst. Professor, Dept. of English</span></p>
                </div>


                <div className={myStyles.staffs}>
                    <h5>Library Sub-Committee</h5>
                    <p>Dr. Reshmi Sarkar<br /><span className={myStyles.designation}>Convenor, Librarian</span></p>
                </div>
            </div>
        </div>
    )
}