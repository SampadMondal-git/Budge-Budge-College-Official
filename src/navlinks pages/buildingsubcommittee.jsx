import React from 'react'
import myStyles from './buildingsubcommittee.module.css'

export function Buildingsubcommittee() {
    return (
        <div className={myStyles.container}>
            <h2 className={myStyles.section_title}>Building Sub-Committee</h2>

            <div className={myStyles.governing_staffs}>
                <div className={myStyles.staffs}>
                    <h5>Building Sub-Committee</h5>
                    <p>Dr. Debjani Datta<br /><span className={myStyles.designation}>Convenor, Principal</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Building Sub-Committee</h5>
                    <p>Dr. Anup Kumar Sahoo<br /><span className={myStyles.designation}>Asst. Prof., Dept. of Physics</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Building Sub-Committee</h5>
                    <p>Dr. Dipak Mandal<br /><span className={myStyles.designation}>Associate Prof., Dept. of History</span></p>
                </div>
            </div>
        </div>
    )
}