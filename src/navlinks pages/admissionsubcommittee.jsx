import React from 'react'
import myStyles from './admissionsubcommittee.module.css'
export function Admissionsubcommittee() {
    return (
        <>
            <div className={myStyles.admission_subcommittee}>
                <h1>Admission Sub-Committee</h1>
            </div>
            <div className={myStyles.staffs}>
                <table>
                    <tr>
                        <th>Sub Committee Name</th>
                        <th>Member</th>
                        <th>Designation</th>
                    </tr>
                    <tr>
                        <td>Admission Sub-Committee</td>
                        <td>Dr. Debjani Datta</td>
                        <td>Principal</td>
                    </tr>
                    <tr>
                        <td>Admission Sub-Committee</td>
                        <td>Smt. Pritha Barua</td>
                        <td>Associate Professor, Dept. of Bengali</td>
                    </tr>
                    <tr>
                        <td>Admission Sub-Committee</td>
                        <td>Dr. Partha Pratim Chaudhuri</td>
                        <td>Convener, Associate Professor, Dept. of Zoology</td>
                    </tr>
                    <tr>
                        <td>Admission Sub-Committee</td>
                        <td>Dr. Bhanusuta Mitra</td>
                        <td>Associate Professor, Dept. of Chemistry</td>
                    </tr>
                    <tr>
                        <td>Admission Sub-Committee</td>
                        <td>Dr. Anup Kumar Sahoo</td>
                        <td>Asst. Professor, Dept. of Physics</td>
                    </tr>
                    <tr>
                        <td>Admission Sub-Committee</td>
                        <td>Dr. Gautam Das</td>
                        <td>Asst. Professor, Dept. of Commerce</td>
                    </tr>
                    <tr>
                        <td>Admission Sub-Committee</td>
                        <td>Dr. Swati Sachdev</td>
                        <td>Asst. Professor, Dept. of Geography</td>
                    </tr>
                    <tr>
                        <td>Admission Sub-Committee</td>
                        <td>Sajid Qamar</td>
                        <td>Asst. Professor, Dept. of Geography</td>
                    </tr>
                    <tr>
                        <td>Admission Sub-Committee</td>
                        <td>Subrata Karmakar</td>
                        <td>Non-teaching Staff</td>
                    </tr>
                </table>
            </div>
        </>
    )
}
