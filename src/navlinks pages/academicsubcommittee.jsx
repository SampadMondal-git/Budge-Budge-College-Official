import React from 'react'
import myStyles from './academicsubcommittee.module.css'

export function Academicsubcommittee() {
    return (
        <div className={myStyles.container}>
            <h2 className={myStyles.section_title}>Academic Sub-Committee</h2>

            <div className={myStyles.governing_staffs}>
                <div className={myStyles.staffs}>
                    <h5>Academic Sub-Committee</h5>
                    <p>Dr. Debjani Datta<br /><span className={myStyles.designation}>Chairperson - Principal</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Academic Sub-Committee</h5>
                    <p>Dr. Bhanusuta Mitra<br /><span className={myStyles.designation}>Convenor, Associate Professor, Dept. of Chemistry</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Academic Sub-Committee</h5>
                    <p>Dr. Partha Pratim Chaudhuri<br /><span className={myStyles.designation}>Associate Professor, Dept. of Zoology</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Academic Sub-Committee</h5>
                    <p>Dr. Sandip Sinha<br /><span className={myStyles.designation}>Associate Professor,Dept. of Commerce</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Academic Sub-Committee</h5>
                    <p>Dr. Kakali Ghosal<br /><span className={myStyles.designation}>Asst. Prof., Dept. of Philosophy</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Academic Sub-Committee</h5>
                    <p>Dr. Swati Sachdev<br /><span className={myStyles.designation}>Asst. Prof., Dept. of Geography</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Academic Sub-Committee</h5>
                    <p>Dr. Shruti Agrawal<br /><span className={myStyles.designation}>Asst. Prof., Dept. of Food & Nutrition</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Academic Sub-Committee</h5>
                    <p>Dr. Priyanka Bose Das<br /><span className={myStyles.designation}>Asst. Prof., Dept. of Education</span></p>
                </div>
            </div>
        </div>
    )
}