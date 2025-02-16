import React from 'react'
import myStyles from './commonroomsubcommittee.module.css'

export function Commonroomsubcommittee() {
    return (
        <div className={myStyles.container}>
            <h2 className={myStyles.section_title}>Common Room Sub-Committee</h2>

            <div className={myStyles.governing_staffs}>
                <div className={myStyles.staffs}>
                    <h5>Common Room Sub-Committee</h5>
                    <p>Dr. Debasis Upadhay<br /><span className={myStyles.designation}>Asst. Prof.,Dept. of Botany</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Common Room Sub-Committee</h5>
                    <p>Dr. Anup Kumar Sahoo<br /><span className={myStyles.designation}>Convenor,Asst. Professor, Dept. of Physics</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Common Room Sub-Committee</h5>
                    <p>Dr. Dipak Mandal<br /><span className={myStyles.designation}>Associate Professor, Dept. of History</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Common Room Sub-Committee</h5>
                    <p>Dr. Samiran Panday<br /><span className={myStyles.designation}>Asst. Prof.,Dept. of Botany</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Common Room Sub-Committee</h5>
                    <p>Buddham Tamang<br /><span className={myStyles.designation}>Asst. Prof., Dept. of Political Science</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Common Room Sub-Committee</h5>
                    <p>Sumit Santra<br /><span className={myStyles.designation}>SACT-II, Dept. of History</span></p>
                </div>
            </div>
        </div>
    )
}