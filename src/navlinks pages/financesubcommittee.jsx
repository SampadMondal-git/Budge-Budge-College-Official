import React from 'react'
import myStyles from './financesubcommittee.module.css'

export function Financesubcommittee() {
    return (
        <div className={myStyles.container}>
            <h2 className={myStyles.section_title}>Finance Sub-Committee</h2>

            <div className={myStyles.governing_staffs}>
                <div className={myStyles.staffs}>
                    <h5>Finance Sub-Committee</h5>
                    <p>Dr. Debjani Datta<br /><span className={myStyles.designation}>Chairperson - Principal</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Finance Sub-Committee</h5>
                    <p>Shri Gautam Dasgupta<br /><span className={myStyles.designation}>GB Member (Ex-officio)</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Finance Sub-Committee</h5>
                    <p>Dr. Partha Pratim Chaudhuri<br /><span className={myStyles.designation}>Associate Professor, Dept. of Zoology</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Finance Sub-Committee</h5>
                    <p>Dr. Anup Kumar Sahoo<br /><span className={myStyles.designation}>Asst. Prof., Dept. of Physics</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Finance Sub-Committee</h5>
                    <p>Dr. Gautam Das<br /><span className={myStyles.designation}>Convenor-Associate Prof., Dept. of Commerce and Bursar</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Finance Sub-Committee</h5>
                    <p>Subrata Karmakar<br /><span className={myStyles.designation}>Laboratory Attendant, Dept. of Geography</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Finance Sub-Committee</h5>
                    <p>Somenath Bose<br /><span className={myStyles.designation}>Member- Invitee Accountant (Acting)</span></p>
                </div>
            </div>
        </div>
    )
}