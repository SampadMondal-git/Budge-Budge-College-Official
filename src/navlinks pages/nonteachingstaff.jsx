import React from 'react'
import myStyles from './nonteachingstaff.module.css'
export function Nonteachingstaff() {
    return (
        <>
            <div className={myStyles.nonteaching_staff}>
                <h1>Non-Teaching Staff</h1>
            </div>
            <div className={myStyles.staffs}>
                <table>
                    <tr>
                        <th>Member</th>
                        <th>Designation</th>
                        <th>Qualification</th>
                    </tr>
                    <tr>
                        <td>ANIS AHMED</td>
                        <td>Computer Operator (Whole Time Contractual)</td>
                        <td>B.Sc. (Hons)- Diploma in Computer Application</td>
                    </tr>
                    <tr>
                        <td>BIKASH ROY</td>
                        <td>Sweeper (Part-time)</td>
                        <td>Class VIII passed</td>
                    </tr>
                    <tr>
                        <td>SMT. ASHA DEY</td>
                        <td>Teachers' Room Attendant (Contractual temporary)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>SRI DIPAK KAYAL</td>
                        <td>Guard</td>
                        <td>Madhyamik Passed</td>
                    </tr>
                    <tr>
                        <td>SRI NILESH ROY</td>
                        <td>Laboratory Attendant, Dept. of Physics / Office Worker</td>
                        <td>B.Sc. (Pure)</td>
                    </tr>
                    <tr>
                        <td>SRI SAROJ NAG</td>
                        <td>Laboratory Attendant, Dept. of Chemistry / Office Worker</td>
                        <td>B.Sc. (Bio)</td>
                    </tr>
                    <tr>
                        <td>SRI SOMENATH BOSE</td>
                        <td>Electrician-cum-caretaker / Head Clerk (Acting)</td>
                        <td>B.Sc., ITI Diploma in Electrical</td>
                    </tr>
                    <tr>
                        <td>SRI SUBRATA KARMAKAR</td>
                        <td>Laboratory Attendant, Dept. of Geography / Office Worker</td>
                        <td>M.Com. LL.B</td>
                    </tr>
                    <tr>
                        <td>SRI SWAPAN KUMAR MAJHI</td>
                        <td>Guard</td>
                        <td>H.S. (10+2) Passed</td>
                    </tr>
                    <tr>
                        <td>SRI TANAY BHUNIYA</td>
                        <td>Laboratory Attendant, Dept. of Botany/ Office Worker</td>
                        <td>B.Sc.</td>
                    </tr>
                    <tr>
                        <td>SRI TAPAS SHOW</td>
                        <td>Laboratory Attendant, Dept. of Zoology</td>
                        <td>B.A.</td>
                    </tr>
                    <tr>
                        <td>SRI TARAPADA GAYEN Retired on 31/05/2024</td>
                        <td>Peon (Library Section)</td>
                        <td>H.S. (10+2),B.A.</td>
                    </tr>
                </table>
            </div>
        </>
    )
}
