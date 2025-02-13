import React from 'react'
import myStyles from './grievanceredressalcell.module.css'
export function Grievanceredressalcell() {
    return (
        <>
            <div className={myStyles.grievance_redressal_cell}>
                <h1>Grievance Redressal Cell</h1>
            </div>
            <div className={myStyles.staffs}>
                <table>
                    <tr>
                        <th>Sub Committee Name</th>
                        <th>Member</th>
                        <th>Designation</th>
                    </tr>
                    <tr>
                        <td>Grievance Redressal Cell</td>
                        <td>Dr. Debjani Datta</td>
                        <td>Chairperson - Principal</td>
                    </tr>
                    <tr>
                        <td>Grievance Redressal Cell</td>
                        <td>Dr. Partha Pratim Chaudhuri</td>
                        <td>Convener, Associate Professor, Dept. of Zoology</td>
                    </tr>
                    <tr>
                        <td>Grievance Redressal Cell</td>
                        <td>Dr. Swati Sachdev</td>
                        <td>Asst. Prof., Dept. of Geography</td>
                    </tr>
                    <tr>
                        <td>Grievance Redressal Cell</td>
                        <td>Dr. Shruti Agrawal</td>
                        <td>Asst. Prof., Dept. of Food & Nutrition</td>
                    </tr>
                    <tr>
                        <td>Grievance Redressal Cell</td>
                        <td>Dr. Papia Das</td>
                        <td>Asst. Prof., Dept. of Zoology</td>
                    </tr>
                </table>
            </div>
        </>
    )
}
