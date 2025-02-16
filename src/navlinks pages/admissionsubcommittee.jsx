import React from 'react'
import myStyles from './admissionsubcommittee.module.css'

export function Admissionsubcommittee() {
    return (
        <div className={myStyles.container}>
            <h2 className={myStyles.section_title}>Admission Sub-Committee</h2>

            <div className={myStyles.governing_staffs}>
                <div className={myStyles.staffs}>
                    <h5>Admission Sub-Committee</h5>
                    <p>Dr. Debjani Datta<br /><span className={myStyles.designation}>Principal</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Admission Sub-Committee</h5>
                    <p>Smt. Pritha Barua<br /><span className={myStyles.designation}>Associate Professor, Dept. of Bengali</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Admission Sub-Committee</h5>
                    <p>Dr. Partha Pratim Chaudhuri<br /><span className={myStyles.designation}>Convener, Associate Professor, Dept. of Zoology</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Admission Sub-Committee</h5>
                    <p>Dr. Bhanusuta Mitra<br /><span className={myStyles.designation}>Associate Professor, Dept. of Chemistry</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Admission Sub-Committee</h5>
                    <p>Dr. Anup Kumar Sahoo<br /><span className={myStyles.designation}>Asst. Professor, Dept. of Physics</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Admission Sub-Committee</h5>
                    <p>Dr. Gautam Das<br /><span className={myStyles.designation}>Asst. Prof., Dept. of Commerce</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Admission Sub-Committee</h5>
                    <p>Dr. Swati Sachdev<br /><span className={myStyles.designation}>Asst. Professor, Dept. of Geography</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Admission Sub-Committee</h5>
                    <p>Sajid Qamar<br /><span className={myStyles.designation}>Asst. Prof., Dept. of Geography</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Admission Sub-Committee</h5>
                    <p>Subrata Karmakar<br /><span className={myStyles.designation}>Non-teaching Staff</span></p>
                </div>
            </div>
        </div>
    )
}