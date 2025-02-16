import React from 'react'
import myStyles from './grievanceredressalcell.module.css'

export function Grievanceredressalcell() {
    return (
        <div className={myStyles.container}>
            <h2 className={myStyles.section_title}>Grievance Redressal Cell</h2>

            <div className={myStyles.governing_staffs}>
                <div className={myStyles.staffs}>
                    <h5>Grievance Redressal Cell</h5>
                    <p>Dr. Debjani Datta<br /><span className={myStyles.designation}>Chairperson - Principal</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Grievance Redressal Cell</h5>
                    <p>Dr. Partha Pratim Chaudhuri<br /><span className={myStyles.designation}>Convener, Associate Professor, Dept. of Zoology</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Grievance Redressal Cell</h5>
                    <p>Dr. Swati Sachdev<br /><span className={myStyles.designation}>Asst. Prof., Dept. of Geography</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Grievance Redressal Cell</h5>
                    <p>Dr. Shruti Agrawal<br /><span className={myStyles.designation}>Asst. Prof., Dept. of Food & Nutrition</span></p>
                </div>

                <div className={myStyles.staffs}>
                    <h5>Grievance Redressal Cell</h5>
                    <p>Dr. Papia Das<br /><span className={myStyles.designation}>Asst. Prof., Dept. of Zoology</span></p>
                </div>
            </div>
        </div>
    )
}