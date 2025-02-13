import React from 'react'
import myStyles from './academicsubcommittee.module.css'
export function Academicsubcommittee() {
    return (
        <>
            <div className={myStyles.academic_subcommittee}>
                <h1>Academic Sub-Committee</h1>
            </div>
            <div className={myStyles.staffs}>
                <table>
                    <tr>
                        <th>Sub Committee Name</th>
                        <th>Member</th>
                        <th>Designation</th>
                    </tr>
                    <tr>
                        <td>Academic Sub-Committee</td>
                        <td>Dr. Debjani Datta</td>
                        <td>Chairperson - Principal</td>
                    </tr>
                    <tr>
                        <td>Academic Sub-Committee</td>
                        <td>Dr. Bhanusuta Mitra</td>
                        <td>Convenor, Associate Professor, Dept. of Chemistry</td>
                    </tr>
                    <tr>
                        <td>Academic Sub-Committee</td>
                        <td>Dr. Partha Pratim Chaudhuri</td>
                        <td>Associate Professor, Dept. of Zoology</td>
                    </tr>
                    <tr>
                        <td>Academic Sub-Committee</td>
                        <td>Dr. Sandip Sinha</td>
                        <td>Associate Professor, Dept. of Commerce</td>
                    </tr>
                    <tr>
                        <td>Academic Sub-Committee</td>
                        <td>Dr. Kakali Ghosal</td>
                        <td>Asst. Prof., Dept. of Philosophy</td>
                    </tr>
                    <tr>
                        <td>Academic Sub-Committee</td>
                        <td>Dr. Swati Sachdev</td>
                        <td>Asst. Prof., Dept. of Geography</td>
                    </tr>
                    <tr>
                        <td>Academic Sub-Committee</td>
                        <td>Dr. Shruti Agrawal</td>
                        <td>Asst. Prof., Dept. of Food & Nutrition</td>
                    </tr>
                    <tr>
                        <td>Academic Sub-Committee</td>
                        <td>Dr. Priyanka Bose Das</td>
                        <td>Asst. Prof., Dept. of Education</td>
                    </tr>
                </table>
            </div>
        </>
    )
}
